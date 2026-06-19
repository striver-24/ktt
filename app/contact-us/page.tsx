import { Footer, Header, SectionHeading, whatsappLinks } from '@/components/site';

export default function ContactUsPage() {
  return (
    <main className="page">
      <Header />
      <section className="section">
        <div className="container">
          <div className="panel content-card page-hero-card">
            <SectionHeading
              eyebrow="Contact Us"
              title="Speak with our team on WhatsApp"
              copy="Use the button below for direct support. The same phone number is shown in the header and footer for quick access."
            />
            <div className="hero__actions">
              <a className="btn btn--primary" href={whatsappLinks.general} target="_blank" rel="noreferrer">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}