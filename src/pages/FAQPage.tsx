import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import PageHero from '../components/PageHero';

export default function FAQPage() {
  return (
    <>
      <PageHero
        tag="FAQ"
        title="Answers to Your Most Common Questions"
        subtitle="Everything you need to know about working with Sonus — from how we engage to how we deliver."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
      />
      <FAQ />
      <Contact />
    </>
  );
}
