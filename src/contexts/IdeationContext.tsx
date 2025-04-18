import React, { createContext, useContext, useState, ReactNode } from 'react';

interface IdeationState {
  idea: string;
  setIdea: (idea: string) => void;
  answers: string[];
  setAnswers: (answers: string[]) => void;
  docs: { name: string; content: string }[];
  setDocs: (docs: { name: string; content: string }[]) => void;
}

const IdeationContext = createContext<IdeationState | undefined>(undefined);

export const IdeationProvider = ({ children }: { children: ReactNode }) => {
  const [idea, setIdea] = useState('');
  const [answers, setAnswers] = useState<string[]>([]);
  const [docs, setDocs] = useState<{ name: string; content: string }[]>([]);

  return (
    <IdeationContext.Provider value={{ idea, setIdea, answers, setAnswers, docs, setDocs }}>
      {children}
    </IdeationContext.Provider>
  );
};

export const useIdeation = () => {
  const ctx = useContext(IdeationContext);
  if (!ctx) throw new Error('useIdeation must be used within IdeationProvider');
  return ctx;
};
