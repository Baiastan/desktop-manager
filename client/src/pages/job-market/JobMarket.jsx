import React from 'react';
import JobList from '../../features/job-market';
import BlockWrapper from '../study-practice/BlockWrapper';

const JobMarket = () => {
  return (
    <BlockWrapper showAddText={false}>
      <JobList />
    </BlockWrapper>
  );
};

export default JobMarket;
