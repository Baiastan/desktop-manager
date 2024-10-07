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
import Accordion from '../../gfe-practice/Accordion';
import AnalogClock from '../../gfe-practice/analog-clock/AnalogClock';
import DataTable from '../../gfe-practice/data-table/DataTable';
import RollDice from '../../gfe-practice/roll-dice/RollDice';
import GridLightsUber from '../../gfe-practice/grid-lights-uber/GridLightsUber';

import usersData from '../../gfe-practice/data-table/users.json';
import houses from '../../gfe-practice/data-table/houses.json';
import Header from '../../components/Header';

const Practice = () => {
  return (
    <LayoutWrapper>
      <BlockWrapper>
        <GridLightsUber />
      </BlockWrapper>
      <BlockWrapper>
        <RollDice />
      </BlockWrapper>
      <BlockWrapper>
        <DataTable usersData={usersData} />
        <Header>Houses</Header>
        <DataTable usersData={houses} />
      </BlockWrapper>
      <BlockWrapper>
        <AnalogClock />
      </BlockWrapper>
      <BlockWrapper>
        <Accordion />
      </BlockWrapper>
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
