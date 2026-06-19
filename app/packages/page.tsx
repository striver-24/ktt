import Image from 'next/image';
import Link from 'next/link';
import { Footer, Header, SectionHeading, whatsappLinks } from '@/components/site';
import { media } from '@/components/media';

const packages = [
  {
    title: 'Semi Deluxe Umrah Package',
    points: ['Visa support', 'Selected hotel options', 'Transfer coordination', 'Pilgrim guidance'],
    image: media.madinahImage,
  },
  {
    title: 'Deluxe Umrah Package',
    points: ['Priority visa handling', 'Closer hotel placements', 'Dedicated support', 'Ziyarah coordination'],
    image: media.meccaImage,
  },
];

export default function PackagesPage() {
  return (
    <main className="page">
      <Header />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Packages"
            title="Choose a package and enquire instantly"
            copy="Both packages are connected directly to WhatsApp, with no prices shown on page."
          />
          <div className="packages-grid two-up">
            {packages.map((item) => (
              <article key={item.title} className="card package-card-v2">
                <div className="package-card-v2__image">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 960px) 100vw, 50vw" />
                </div>
                <h3>{item.title}</h3>
                <ul className="list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <a className="btn btn--primary" href={whatsappLinks.general} target="_blank" rel="noreferrer" style={{ marginTop: 18 }}>
                  Enquire Now
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}