import React, { useId, useState } from 'react';
import FileList from './FileList';

const FileObject = ({ file, level, setSize, posInSet }) => {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  const { children: fileChildren, name: fileName } = file;

  const isDirectory = Boolean(fileChildren);

  return (
    <>
      <li
        className="file-item"
        aria-expanded={isDirectory ? expanded : undefined}
        aria-labelledby={id}
        aria-level={level}
        style={{ paddingLeft: (level - 1) * 16 }}
        aria-posinset={posInSet}
        aria-setsize={setSize}
        role="treeitem"
      >
        <button
          className={[
            'file-item-button',
            isDirectory && 'file-item-button--directory',
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={() => {
            if (!isDirectory) return;

            setExpanded(!expanded);
          }}
        >
          <span id={id}>{fileName}</span>{' '}
          {isDirectory && <>[{expanded ? '-' : '+'}]</>}
        </button>
        {fileChildren && fileChildren.length > 0 && expanded && (
          <FileList fileList={fileChildren} level={level + 1} />
        )}
      </li>
    </>
  );
};

export default FileObject;
