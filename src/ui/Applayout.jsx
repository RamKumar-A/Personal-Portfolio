import { Suspense, lazy } from 'react';
import ScrolltoTop from './ScrolltoTop';
import Header from './Header';

const Animation = lazy(() => import('./Animation'));
const Hero = lazy(() => import('./Hero'));
const About = lazy(() => import('./About'));
const Projects = lazy(() => import('./Projects'));
const Skills = lazy(() => import('./Skills'));
const Footer = lazy(() => import('./Footer'));

function Applayout() {
  return (
    <Suspense fallback={<Loader />}>
      <Animation />
      <div className="relative">
        <Header />
        <main className="grid z-10 container mx-auto">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Footer />
        </main>
        <ScrolltoTop />
      </div>
    </Suspense>
  );
}

function Loader() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="loader"></div>
    </div>
  );
}

export default Applayout;
