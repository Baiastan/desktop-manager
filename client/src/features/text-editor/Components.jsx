import React from 'react';
import BlockWrapper from '../../pages/study-practice/BlockWrapper';

const Components = {
  container: ({ children, style }) => (
    <BlockWrapper className={style}>{children}</BlockWrapper>
  ),
  heading: ({ children, style, level, text }) => `<${level}>${text}</${level}>`,
};
