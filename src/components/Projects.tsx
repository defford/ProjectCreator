import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [conversations] = useState([]);
  // No longer fetch from Supabase; just show placeholder
  return (
    <div style={{ padding: 32 }}>
      <h2>My Projects</h2>
      <div style={{ marginTop: 16, color: 'var(--color-muted)' }}>
        Project history will appear here.
      </div>
    </div>
  );
};

export default Projects;
