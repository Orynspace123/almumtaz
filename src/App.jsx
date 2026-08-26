import { LangProvider, useLang } from './i18n/LangContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import PartBrands from './components/PartBrands';
import Finder from './components/Finder';
import Services from './components/Services';
import Why from './components/Why';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FindUs from './components/FindUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileBar from './components/MobileBar';

function Site() {
  const { t } = useLang();
  return (
    <>
      <a className="skip-link" href="#main">{t('skip')}</a>
      <Navbar />
      <main id="main">
        <Hero />
        <BrandMarquee />
        <Finder />
        <Services />
        <Why />
        <PartBrands />
        <Gallery />
        <Testimonials />
        <About />
        <FindUs />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBar />
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Site />
    </LangProvider>
  );
}
