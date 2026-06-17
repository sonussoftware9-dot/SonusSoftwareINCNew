import Hero from '../components/Hero';
import ClientTicker from '../components/ClientTicker';
import Services from '../components/Services';
import Industries from '../components/Industries';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import GlobalPresence from '../components/GlobalPresence';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <ClientTicker />
      <Services />
      <Industries />
      <About />
      <WhyUs />
      <Process />
      <Testimonials />
      <GlobalPresence />
      <FAQ />
      <Contact />
    </>
  );
}
