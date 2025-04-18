import React from 'react';

interface DownloadButtonProps {
  fileName: string;
  content: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ fileName, content }) => {
  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleDownload}>Download</button>
  );
};

export default DownloadButton;
