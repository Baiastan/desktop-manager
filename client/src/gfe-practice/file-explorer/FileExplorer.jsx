import React from 'react';

import FileList from './FileList';

import './FileExplorer.css';

const FileExplorer = ({ data }) => {
  return (
    <ul className="file-list">
      <FileList fileList={data} level={1} />
    </ul>
  );
};

export default FileExplorer;
