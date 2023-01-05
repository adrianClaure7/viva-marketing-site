import React, { lazy, Suspense } from 'react';

const LazyReactSpringParallax = lazy(() => import('./ReactSpringParallax'));

const ReactSpringParallax = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyReactSpringParallax {...props} />
  </Suspense>
);

export default ReactSpringParallax;
