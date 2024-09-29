import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ children }) => {
  return (
    <SyntaxHighlighter style={tomorrow} language="javascript">
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
