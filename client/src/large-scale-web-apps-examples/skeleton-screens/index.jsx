import React, { useEffect, useState } from 'react';
import Post from '../lazy-loading/components/Post';
import Header from '../../components/Header';
import SkeletonForPost from './SkeletonForPost';
import { Skeleton } from '@mui/material';

const SkeletonExample = () => {
  const [shouldRenderPost, setShouldRenderPost] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShouldRenderPost(true);
    }, 1000);
  }, []);

  return (
    <div>
      <Header color="red">Sekelton Example</Header>
      {shouldRenderPost ? <Post /> : <SkeletonForPost />}
    </div>
  );
};

export default SkeletonExample;
