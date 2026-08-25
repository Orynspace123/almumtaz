import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import Finder from './components/Finder';
import Services from './components/Services';
import Why from './components/Why';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <a className="skip-link" href="#main">Skip to content</a>

      <Navbar />

      <main id="main">
        <Hero />
        <BrandMarquee />
        <Finder />
        <Services />
        <Why />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
