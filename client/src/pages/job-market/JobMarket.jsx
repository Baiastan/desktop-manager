import React from 'react';
import JobList from '../../features/job-market';
import BlockWrapper from '../study-practice/BlockWrapper';
import JobsApplied from '../../features/job-market/JobsApplied';

const JobMarket = () => {
  return (
    <>
      <BlockWrapper showAddText={false}>
        <JobList />
      </BlockWrapper>
      <BlockWrapper showAddText={false}>
        <JobsApplied />
      </BlockWrapper>
    </>
  );
};

export default JobMarket;
