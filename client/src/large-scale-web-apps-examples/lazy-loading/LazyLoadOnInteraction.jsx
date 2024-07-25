import React, { useState } from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';

const LazyLoadOnInteraction = () => {
  const [Post, setPost] = useState(null);

  const handleClick = () => {
    import('./components/Post').then((module) => {
      setPost(() => module.default);
    });
  };

  return (
    <div>
      <Header color="red"> Lazy Loading on Interaction </Header>
      {Post ? <Post /> : <Button onClick={handleClick}>Load Post</Button>}
    </div>
  );
};

export default LazyLoadOnInteraction;
