import { lazy, Suspense } from 'react';

const Blog = lazy(() => import('@/components/Blog/Blog'));
const Hero = lazy(() => import('@/components/Hero/Hero'));

export default function BlogLayout() {
  return (
    <div className="blog-layout">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Blog />
      </Suspense>
    </div>
  );
}
