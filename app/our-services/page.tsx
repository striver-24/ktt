import Link from 'next/link';
import { Footer, Header, SectionHeading, ServiceCard } from '@/components/site';
import Image from 'next/image';
import { media } from '@/components/media';

const services = [
  { title: 'Visa Processing', copy: 'Fast, hassle-free Umrah visa handling from start to finish.', icon: '01' },
  { title: 'Luxury Hotels', copy: 'Handpicked stays moments away from the Haram.', icon: '02' },
  { title: 'Air Travel', copy: 'Best fares with trusted airlines and smooth transfers.', icon: '03' },
  { title: 'Ziyarah Tours', copy: 'Guided visits to the blessed historical sites.', icon: '04' },
  { title: 'Scholar Guides', copy: 'Knowledgeable guides for every ritual and step.', icon: '05' },
  { title: '24 / 7 Support', copy: 'Round-the-clock assistance throughout your journey.', icon: '06' },
];

export default function ServicesPage() {
  return (
    <main className="page">
      <Header />
      <section className="section">
        <div className="container">
          <div className="grid split services-top-grid">
            <div className="card content-card page-hero-card">
              <SectionHeading
                eyebrow="Why Choose Kalaam Tours & Travels?"
                title="Why Choose Kalaam Tours & Travels?"
              />
              <ul className="list">
                <li>25+ Years of Legacy: Founded in 2000, our longevity in the travel sector is a testament to our transparent dealings and high customer satisfaction.</li>
                <li>24/7 Customer Support: Our dedicated team is always available around the clock to support you before, during, and after your journey.</li>
                <li>End-to-End Solutions: From visa processing and flight bookings to ground logistics in Saudi Arabia, we handle everything under one roof.</li>
              </ul>
            </div>
            <div className="about-image-card card">
              <Image src={media.royalToursImage} alt="Umrah support" fill sizes="(max-width: 960px) 100vw, 45vw" />
            </div>
          </div>

          <SectionHeading
            eyebrow="Our Services"
            title="Support for every step of the journey"
            copy="A direct recreation of the service section, expanded into its own page so the header navigation matches the source site’s structure."
          />
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="hero__actions" style={{ marginTop: 24 }}>
            <Link className="btn btn--primary" href="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}