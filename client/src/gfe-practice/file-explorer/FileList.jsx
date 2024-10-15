import React from 'react';
import FileObject from './FileObject';

const FileList = ({ fileList, level }) => {
  const directories = fileList.filter((fileItem) => fileItem.children);

  directories.sort((a, b) => a.name.localeCompare(b.name));

  const nonDirectories = fileList.filter((fileItem) => !fileItem.children);

  nonDirectories.sort((a, b) => a.name.localeCompare(b.name));

  const items = [...directories, ...nonDirectories];

  return (
    <>
      {items.map((file, index) => {
        return (
          <FileObject
            posInSet={index + 1}
            setSize={items.length}
            key={file.id}
            file={file}
            level={level}
          />
        );
      })}
    </>
  );
};

export default FileList;
