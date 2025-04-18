import React, { useState } from 'react';
import { useIdeation } from './contexts/IdeationContext';
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

const Home: React.FC = () => {
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
      .then(async result => {
        setDocs([
          { name: 'PRD', content: result.prd },
          { name: 'Tech Stack', content: result.techStack },
          { name: 'Frontend', content: result.frontend },
          { name: 'Backend', content: result.backend },
          { name: 'Implementation Plan', content: result.implementationPlan },
        ]);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1 }}>
        {error && <div style={{ color: 'red' }}>{error}</div>}
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
        {step === 3 && (docs.length > 0 ? <DocsViewer docs={docs} /> : <div>No documents generated.</div>)}
      </div>
      <footer style={{ marginTop: 32, color: 'var(--color-muted)', fontSize: 14, textAlign: 'center', width: '100%' }}>
        &copy; {new Date().getFullYear()} Project Creator
      </footer>
    </div>
  );
};

export default Home;
