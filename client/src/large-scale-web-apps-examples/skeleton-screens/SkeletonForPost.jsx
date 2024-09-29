import React from 'react';

import styles from './SkeletonForPost.module.scss';

const SkeletonForPost = () => {
  return (
    <div className={styles['skeleton-post']}>
      <div className={styles['skeleton-title']}></div>
      <div className={styles['skeleton-text']}></div>
      <div className={styles['skeleton-text']}></div>
      <div className={styles['skeleton-text']}></div>
      <div className={styles['skeleton-text']}></div>
      <div className={styles['skeleton-footer']}></div>
    </div>
  );
};

export default SkeletonForPost;
