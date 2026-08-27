import { useState } from 'react';
import { LangProvider, useLang } from './i18n/LangContext';
import { TESTIMONIALS } from './data/content';
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
  // Gallery only renders once it finds at least one photo on disk, so it
  // reports back here. Section numbers are then assigned over the
  // sections that actually render — otherwise hiding one leaves a
  // visible gap in the SEC.01…SEC.08 sequence.
  const [hasPhotos, setHasPhotos] = useState(false);
  const hasReviews = TESTIMONIALS.length > 0;

  let n = 0;
  const num = () => String(++n).padStart(2, '0');
  const finderNo = num();
  const servicesNo = num();
  const whyNo = num();
  const shopNo = hasPhotos ? num() : null;
  const reviewsNo = hasReviews ? num() : null;
  const companyNo = num();
  const findusNo = num();
  const contactNo = num();

  return (
    <>
      <a className="skip-link" href="#main">{t('skip')}</a>
      <Navbar showShopLink={hasPhotos} showReviewsLink={hasReviews} />
      <main id="main">
        <Hero />
        <BrandMarquee />
        <Finder index={finderNo} />
        <Services index={servicesNo} />
        <Why index={whyNo} />
        <PartBrands />
        <Gallery index={shopNo} onPhotos={setHasPhotos} />
        <Testimonials index={reviewsNo} />
        <About index={companyNo} />
        <FindUs index={findusNo} />
        <Contact index={contactNo} />
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
