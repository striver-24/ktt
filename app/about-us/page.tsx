import Image from 'next/image';
import Link from 'next/link';
import { Footer, Header, SectionHeading } from '@/components/site';
import { media } from '@/components/media';

export default function AboutUsPage() {
  return (
    <main className="page">
      <Header />
      <section className="section">
        <div className="container">
          <div className="grid split about-hero-grid">
            <div className="panel content-card page-hero-card">
              <SectionHeading
                eyebrow="About Us"
                title="About Kalaam Tours & Travels (KTT)"
                copy="Welcome to Kalaam Tours & Travels (KTT), your premier and most trusted partner for spiritual and international travel. Founded in 2000, we have spent over two decades dedicating our services to making sacred journeys seamless, comfortable, and deeply rewarding for thousands of pilgrims and travelers across India."
              />
              <p className="about-copy">
                Based in the historic city of Lucknow, Uttar Pradesh, KTT has built an unshakeable reputation for excellence, reliability, and unparalleled hospitality. As detailed in our official company profiles, we specialize primarily in providing comprehensive Haj and Umrah services, ensuring that your spiritual obligations are fulfilled with the utmost peace of mind.
              </p>
              <div className="hero__actions">
                <Link className="btn btn--primary" href="/packages">
                  View Packages
                </Link>
                <Link className="btn btn--ghost" href="/contact-us">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="about-image-card card">
              <Image src={media.whatsappImage} alt="Kalaam Tours & Travels" fill sizes="(max-width: 960px) 100vw, 45vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--band">
        <div className="container grid split about-grid-two">
          <article className="card about-feature-card">
            <SectionHeading eyebrow="Our Accreditations & Expertise" title="Professional standards that support every journey" />
            <ul className="list">
              <li>IATA (International Air Transport Association) standards</li>
              <li>Nusuk Haj and the Ministry of Hajj and Umrah guidelines</li>
            </ul>
          </article>
          <article className="card about-feature-card">
            <SectionHeading eyebrow="Comprehensive Umrah & Visa Services" title="Streamlined support across every requirement" />
            <ul className="list">
              <li>Fast & Hassle-Free Processing: Quick turnarounds to keep your travel plans on track.</li>
              <li>Visa Within 24 Hours: Efficient processing pipelines to assist with urgent travel requirements.</li>
              <li>Unbeatable Visa Rates: Premium services offered at competitive and affordable prices.</li>
              <li>Group & Individual Packages: Custom arrangements tailored to your specific group size or individual preferences.</li>
            </ul>
            <p className="about-copy">
              To apply for an Umrah visa with us, the standard documents required include a scanned copy of your passport, a passport-sized photo with a white background, and your PAN card.
            </p>
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
}