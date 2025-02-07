import { lazy, Suspense } from 'react';

const FeatureArticles = lazy(
  () => import('@/components/FeatureArticles/FeatureArticles')
);
const Hero = lazy(() => import('@/components/Hero/Hero'));

export default function BlogLayout() {
  return (
    <div className="blog-layout">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <FeatureArticles />
      </Suspense>
    </div>
  );
}
