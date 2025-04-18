import React, { useState } from 'react';
import DownloadButton from './DownloadButton';

export interface MarkdownDoc {
  name: string;
  content: string;
}

interface DocsViewerProps {
  docs: MarkdownDoc[];
}

const DocsViewer: React.FC<DocsViewerProps> = ({ docs }) => {
  const [active, setActive] = useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
        {docs.map((doc, idx) => (
          <button
            key={doc.name}
            onClick={() => setActive(idx)}
            style={{
              fontWeight: active === idx ? 'bold' : 'normal',
              background: active === idx ? 'var(--color-accent)' : 'var(--color-surface)',
              color: active === idx ? '#181825' : 'var(--color-primary)',
              border: 'none',
              borderRadius: 8,
              padding: '8px 20px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: active === idx ? '0 2px 8px rgba(137,180,250,0.15)' : 'none',
            }}
          >
            {doc.name}
          </button>
        ))}
      </div>
      <div style={{
        background: 'var(--color-surface)',
        padding: 28,
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(137,180,250,0.10)',
        minWidth: 320,
        maxWidth: 700,
        width: '100%',
        minHeight: 320,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <pre style={{
          background: 'transparent',
          color: 'var(--color-primary)',
          fontSize: 16,
          fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          margin: 0,
          width: '100%',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}>{docs[active]?.content}</pre>
        <div style={{ marginTop: 16 }}>
          <DownloadButton fileName={docs[active]?.name + '.md'} content={docs[active]?.content} />
        </div>
      </div>
    </div>
  );
};

export default DocsViewer;
