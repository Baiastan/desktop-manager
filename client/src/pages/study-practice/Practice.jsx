import React from 'react';
import ObserverPattern from '../../design-patterns-examples/observer-pattern';
import { LayoutWrapper } from '../../components/Layout';

// import styles from "./Practice.module.scss";

import Mediator from '../../design-patterns-examples/mediator-pattern/Mediator';
import BlockWrapper from './BlockWrapper';
import DynamicLazyLoad from '../../large-scale-web-apps-examples/lazy-loading/DynamicLazyLoad';
import LazyLoadOnInteraction from '../../large-scale-web-apps-examples/lazy-loading/LazyLoadOnInteraction';
import LazyIntersectionObserver from '../../large-scale-web-apps-examples/lazy-loading/LazyIntersectionObserver';
import SkeletonExample from '../../large-scale-web-apps-examples/skeleton-screens';
import SWR from '../../large-scale-web-apps-examples/data-fetching/swr(stale-whille-revalidation)/SWR';
import ReactQuery from '../../large-scale-web-apps-examples/data-fetching/react-query/ReactQueryFetch';
import ReactIntl from '../../large-scale-web-apps-examples/i18n/react-intl/ReactIntl';
import DataLoadingWithHoc from '../../design-patterns-examples/HOC/DataLoadingWithHoc';

const Practice = () => {
  return (
    <LayoutWrapper>
      <BlockWrapper>
        <DataLoadingWithHoc />
      </BlockWrapper>
      <BlockWrapper>
        <ReactIntl />
      </BlockWrapper>
      <BlockWrapper>
        <ReactQuery />
      </BlockWrapper>
      <BlockWrapper>
        <SWR />
      </BlockWrapper>
      <BlockWrapper>
        <SkeletonExample />
      </BlockWrapper>
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
