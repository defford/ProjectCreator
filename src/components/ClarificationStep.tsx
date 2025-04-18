import React, { useState } from 'react';

interface ClarificationStepProps {
  questions: string[];
  onComplete: (answers: string[]) => void;
  initialAnswers?: string[];
}

const ClarificationStep: React.FC<ClarificationStepProps> = ({ questions, onComplete, initialAnswers }) => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>(initialAnswers && initialAnswers.length === questions.length ? initialAnswers : Array(questions.length).fill(''));

  const handleAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if (answers[current].trim()) {
      if (current < questions.length - 1) {
        setCurrent(current + 1);
      } else {
        onComplete(answers);
      }
    }
  };

  return (
    <form onSubmit={handleAnswer} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label style={{ fontWeight: 600, marginBottom: 8 }}>{questions[current]}</label>
      <input
        type="text"
        value={answers[current]}
        onChange={e => {
          const newAnswers = [...answers];
          newAnswers[current] = e.target.value;
          setAnswers(newAnswers);
        }}
        required
        style={{
          width: '100%',
          maxWidth: 420,
          padding: '12px 14px',
          borderRadius: 8,
          border: '1px solid var(--color-muted)',
          marginBottom: 18,
          fontSize: 16,
          background: 'var(--color-surface)',
          color: 'var(--color-primary)',
          boxShadow: '0 2px 8px 0 rgba(137,180,250,0.04)',
        }}
      />
      <button
        type="submit"
        style={{
          fontSize: 14,
          padding: '6px 18px',
          borderRadius: 6,
          border: 'none',
          background: 'var(--color-accent)',
          color: '#181825',
          fontWeight: 600,
          letterSpacing: 0.3,
          marginTop: 6,
          cursor: 'pointer',
          boxShadow: '0 1px 4px rgba(137,180,250,0.10)',
          transition: 'background 0.15s',
        }}
      >
        {current < questions.length - 1 ? 'Next' : 'Finish'}
      </button>
    </form>
  );
};

export default ClarificationStep;
