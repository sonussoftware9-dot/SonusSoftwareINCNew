import Contact from '../components/Contact';
import GlobalPresence from '../components/GlobalPresence';
import PageHero from '../components/PageHero';

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="Contact"
        title="Let's Build Something Together"
        subtitle="Whether you have a defined project or just an idea, we're ready to listen. Reach out and we'll respond within 4 business hours."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />
      <GlobalPresence />
      <Contact />
    </>
  );
}
