import React, { useState } from 'react';

interface IdeaFormProps {
  onSubmit: (idea: string) => void;
}

const IdeaForm: React.FC<IdeaFormProps> = ({ onSubmit }) => {
  const [idea, setIdea] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim()) {
      onSubmit(idea);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label htmlFor="idea-input" style={{ fontWeight: 600, marginBottom: 8 }}>Enter your raw idea:</label>
      <input
        id="idea-input"
        type="text"
        value={idea}
        onChange={e => setIdea(e.target.value)}
        placeholder="Describe your idea..."
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
        Next
      </button>
    </form>
  );
};

export default IdeaForm;
