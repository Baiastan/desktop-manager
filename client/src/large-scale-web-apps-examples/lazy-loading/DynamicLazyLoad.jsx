import React, { lazy, Suspense } from 'react';
import Header from '../../components/Header';

//dynamically importing the Post component

const Post = lazy(() => import('./components/Post'));

const DynamicLazyLoad = () => {
  return (
    <div>
      {/* Using Suspense to render fallback while Post is dynamically loading */}
      <Header color="red">Dynacamic Lazy Load</Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Post />
      </Suspense>
    </div>
  );
};

export default DynamicLazyLoad;
