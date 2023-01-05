import React, { lazy, Suspense } from 'react';

const LazyMainNavBar = lazy(() => import('./MainNavBar'));

const MainNavBar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMainNavBar {...props} />
  </Suspense>
);

export default MainNavBar;
