import { Suspense, lazy, useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from '../Context/Modal';
import { HiArrowUp } from 'react-icons/hi';

// import Hero from './Hero';
// import Header from './Header';
// import About from './About';
// import Skills from './Skills';
// import Projects from './Projects';
// import Animation from './Animation';
// import Footer from './Footer';

const Hero = lazy(() => import('./Hero'));
const Header = lazy(() => import('./Header'));
const About = lazy(() => import('./About'));
const Skills = lazy(() => import('./Skills'));
const Projects = lazy(() => import('./Projects'));
const Animation = lazy(() => import('./Animation'));
const Footer = lazy(() => import('./Footer'));

function Applayout() {
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let foundSection = '';
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom > 0) {
          foundSection = section.id;
        }
        if (
          rect.top <= window.innerHeight / 1.5 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          foundSection = section.id;
        }
      });

      if (foundSection && foundSection !== activeSection) {
        setActiveSection(foundSection);
        navigate(`#${foundSection}`);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, location, navigate]);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Modal>
      <Suspense fallback={<Loader />}>
        <Animation />
        <div className="relative lg:grid lg:grid-cols-[10rem_1fr] lg:px-3  ">
          <Header />
          <div className="grid mx-2 md:mx-5 z-10">
            <Fade>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Footer />
            </Fade>
          </div>
          <div
            onClick={scrollToTop}
            className="fixed bottom-2 right-2 xl:bottom-5 xl:right-5 bg-blue-600 p-2 lg:p-3 hover:outline outline-4 outline-blue-600 z-10 rounded-lg lg:text-2xl border-4 border-gray-100 text-gray-50 cursor-pointer"
          >
            <HiArrowUp />
          </div>
        </div>
      </Suspense>
    </Modal>
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
