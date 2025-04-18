export interface GenerateDocsParams {
  idea: string;
  answers: string[];
}

export interface GeneratedDocs {
  prd: string;
  techStack: string;
  frontend: string;
  backend: string;
  implementationPlan: string;
}

export async function generateDocs({ idea, answers }: GenerateDocsParams, apiKey: string): Promise<GeneratedDocs> {
  const prompt = `You are an expert product and technical writer. Given the following idea and clarifications, generate the following five Markdown documents: prd.md, tech-stack.md, frontend.md, backend.md, implementation-plan.md.\n\nIdea: ${idea}\nClarifications: ${answers.map((a, i) => `Q${i+1}: ${a}`).join('\n')}\n\nEach document should follow the detailed structure below. Output each document separated by a unique delimiter: <ENDDOC>.\n\n[Insert detailed structure from instructions here, or reference as needed.]`;

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4.1-mini-2025-04-14',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.3,
    }),
  });

  if (!res.ok) throw new Error('OpenAI API error');
  const data = await res.json();
  const text = data.choices[0].message.content as string;
  const [prd, techStack, frontend, backend, implementationPlan] = text.split('<ENDDOC>');
  return { prd, techStack, frontend, backend, implementationPlan };
}
