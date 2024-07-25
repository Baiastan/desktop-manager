import React, { useState, useRef, lazy, Suspense } from 'react';
import useIntersectionObserver from './components/useIntersectionObserver';
import Header from '../../components/Header';

const Post = lazy(() => import('./components/Post'));

const LazyIntersectionObserver = () => {
  const [shouldRenderPost, setShouldRenderPost] = useState(false);

  const postRef = useRef(null);

  const handleIntersect = ([entry]) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        setShouldRenderPost(true);
      }, 1000);
    }
  };

  useIntersectionObserver(postRef, handleIntersect, { treshhold: 0 });

  return (
    <div>
      <Header color="red">Lazy Loading with the Intersection Observer</Header>
      <div style={{ height: '500px' }}>Some Content before the post</div>
      <div ref={postRef}>
        {shouldRenderPost ? (
          <Suspense fallback={<div>Loading Suspense ...</div>}>
            <Post />
          </Suspense>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div style={{ height: '500px' }}>Some Content after the post</div>
    </div>
  );
};

export default LazyIntersectionObserver;
