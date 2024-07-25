import React from 'react';
import ObserverPattern from '../../design-patterns-examples/observer-pattern';
import { LayoutWrapper } from '../../components/Layout';

// import styles from "./Practice.module.scss";

import Mediator from '../../design-patterns-examples/mediator-pattern/Mediator';
import BlockWrapper from './BlockWrapper';
import DynamicLazyLoad from '../../large-scale-web-apps-examples/lazy-loading/DynamicLazyLoad';
import LazyLoadOnInteraction from '../../large-scale-web-apps-examples/lazy-loading/LazyLoadOnInteraction';
import LazyIntersectionObserver from '../../large-scale-web-apps-examples/lazy-loading/LazyIntersectionObserver';

const Practice = () => {
  return (
    <LayoutWrapper>
      <BlockWrapper>
        <ObserverPattern />
      </BlockWrapper>
      <BlockWrapper>
        <Mediator />
      </BlockWrapper>
      <BlockWrapper>
        <DynamicLazyLoad />
      </BlockWrapper>
      <BlockWrapper>
        <LazyLoadOnInteraction />
      </BlockWrapper>
      <BlockWrapper>
        <LazyIntersectionObserver />
      </BlockWrapper>
    </LayoutWrapper>
  );
};

export default Practice;
