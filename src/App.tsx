import React, { useState, useEffect } from 'react';
import { IdeationProvider, useIdeation } from './contexts/IdeationContext';
import IdeaForm from './components/IdeaForm';
import ClarificationStep from './components/ClarificationStep';
import DocsViewer from './components/DocsViewer';
import { generateDocs } from './utils/openai';

const clarificationQuestions = [
  'Who are the primary users?',
  'What is the main problem this solves?',
  'What are the must-have features?',
  'What metrics define success?',
  'What constraints or timeline should be considered?',
];

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <IdeationProvider>
        <Home />
        <footer style={{ marginTop: 32, color: 'var(--color-muted)', fontSize: 14, textAlign: 'center', width: '100%' }}>
          &copy; {new Date().getFullYear()} Project Creator
        </footer>
      </IdeationProvider>
    </div>
  );
}

export const Home: React.FC = () => {
  const { idea, setIdea, answers, setAnswers, docs, setDocs } = useIdeation();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleIdeaSubmit = (ideaValue: string) => {
    setIdea(ideaValue);
    setStep(1);
  };

  const handleClarificationComplete = (answersValue: string[]) => {
    setAnswers(answersValue);
    setStep(2);
    setLoading(true);
    setError('');
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY || '';
    generateDocs({ idea, answers: answersValue }, apiKey)
      .then(result => {
        setDocs([
          { name: 'PRD', content: result.prd },
          { name: 'Tech Stack', content: result.techStack },
          { name: 'Frontend', content: result.frontend },
          { name: 'Backend', content: result.backend },
          { name: 'Implementation Plan', content: result.implementationPlan },
        ]);
        setLoading(false);
        setStep(3);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  // Outer container: full width, column
  return (
    <div style={{ minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'stretch', background: 'none' }}>
      {/* Centered main content area */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div style={{ width: '100%', maxWidth: 900, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
          {error && <div style={{ color: 'red', textAlign: 'center', marginBottom: 16 }}>{error}</div>}
          {step === 0 && <IdeaForm onSubmit={handleIdeaSubmit} />}
          {step === 1 && (
            <ClarificationStep
              questions={clarificationQuestions}
              onComplete={handleClarificationComplete}
              initialAnswers={answers}
            />
          )}
          {step === 2 && loading && (
            <div style={{ marginTop: 48, textAlign: 'center' }}>
              <div style={{ fontSize: 20, fontWeight: 600 }}>Generating documents...</div>
              <div style={{ fontSize: 48, marginTop: 12 }} role="img" aria-label="loading">⏳</div>
            </div>
          )}
          {step === 3 && (
            docs && docs.length > 0 ? <DocsViewer docs={docs} /> : <div style={{ color: 'red', marginTop: 48 }}>No documents generated or docs invalid.</div>
          )}
        </div>
      </div>
    </div>
  );
};

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, errorInfo: any}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, errorInfo: error };
  }
  componentDidCatch(error: any, errorInfo: any) {
    console.error('[ErrorBoundary] Caught error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div style={{ color: 'red', padding: 24 }}>[ErrorBoundary] Something went wrong: {String(this.state.errorInfo)}</div>;
    }
    return this.props.children;
  }
}

export default App;
