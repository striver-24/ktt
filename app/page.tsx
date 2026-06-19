"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { Footer, Header, SectionHeading, ServiceCard, TestimonialCard, whatsappLinks } from '@/components/site';
import { media } from '@/components/media';

const services = [
  { title: 'Visa Processing', copy: 'Fast, hassle-free Umrah visa handling from start to finish.', icon: '01' },
  { title: 'Luxury Hotels', copy: 'Handpicked stays moments away from the Haram.', icon: '02' },
  { title: 'Air Travel', copy: 'Best fares with trusted airlines and smooth transfers.', icon: '03' },
  { title: 'Ziyarah Tours', copy: 'Guided visits to the blessed historical sites.', icon: '04' },
  { title: 'Scholar Guides', copy: 'Knowledgeable guides for every ritual and step.', icon: '05' },
  { title: '24 / 7 Support', copy: 'Round-the-clock assistance throughout your journey.', icon: '06' },
];

const testimonials = [
  {
    quote:
      'An impeccably organised journey. Every detail was handled with care and respect. May Allah reward this team.',
    name: 'Imran Ahmed',
  },
  {
    quote:
      'The hotels were so close to the Haram and the guides were truly knowledgeable. A spiritual experience to remember.',
    name: 'Fatima Khan',
  },
  {
    quote: 'From visa to return, everything was seamless. The royal package felt truly premium yet affordable.',
    name: 'Yusuf Sheikh',
  },
];

const packages = [
  {
    title: 'Semi Deluxe Umrah Package',
    image: media.madinahImage,
  },
  {
    title: 'Deluxe Umrah Package',
    image: media.meccaImage,
  },
];

const faqItems = [
  {
    question: 'What is included in the package?',
    answer: 'Visa assistance, hotel coordination, transfers, and guided support are arranged according to the selected package.',
  },
  {
    question: 'How do I book?',
    answer: 'Use the Enquire Now button or the WhatsApp contact in the header to speak with the team directly.',
  },
  {
    question: 'Do you provide pilgrimage support after booking?',
    answer: 'Yes. 24 / 7 support is available before departure and throughout the journey.',
  },
];

function useLiveReviews() {
  const [reviews, setReviews] = useState(testimonials);

  useEffect(() => {
    const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!placeId || !apiKey) {
      return;
    }

    const controller = new AbortController();

    fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=displayName,reviews,googleMapsUri&languageCode=en`,
      {
        method: 'GET',
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'reviews,displayName,googleMapsUri',
        },
        signal: controller.signal,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data?.reviews) && data.reviews.length > 0) {
          setReviews(
            data.reviews.slice(0, 3).map((review: { text?: { text?: string }; authorAttribution?: { displayName?: string } }) => ({
              quote: review.text?.text ?? 'Google review unavailable.',
              name: review.authorAttribution?.displayName ?? 'Google Maps Review',
            }))
          );
        }
      })
      .catch(() => null);

    return () => controller.abort();
  }, []);

  return reviews;
}

export default function HomePage() {
  const reviews = useLiveReviews();
  const [showPopup, setShowPopup] = useState(true);

  const popupActions = useMemo(
    () => ({
      contact: whatsappLinks.visa,
    }),
    []
  );

  return (
    <main className="page">
      <Header />

      {showPopup ? (
        <div className="popup-backdrop" role="dialog" aria-modal="true" aria-label="Contact popup">
          <div className="popup-card panel">
            <button className="popup-close" type="button" onClick={() => setShowPopup(false)} aria-label="Close popup">
              ×
            </button>
            <div className="eyebrow">A Journey for Faith & Devotion</div>
            <h2 className="section__title" style={{ marginTop: 10 }}>
              Want Assistance with Visa Application? Connect with Our Experts!
            </h2>
            <p className="section__lede" style={{ marginTop: 10 }}>
              Speak with our team right away for visa help, package guidance, and booking support.
            </p>
            <div className="hero__actions" style={{ marginTop: 22 }}>
              <a className="btn btn--primary" href={popupActions.contact} target="_blank" rel="noreferrer">
                Contact Us
              </a>
              <button className="btn btn--ghost" type="button" onClick={() => setShowPopup(false)}>
                Maybe later
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <section className="hero">
        <div className="container hero__grid">
          <div>
            <div className="eyebrow">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
            <h1 className="headline">Blessed Umrah Journeys, Crafted With Care</h1>
            <p className="subcopy">
              Experience the spiritual journey of a lifetime with premium Umrah packages, comfortable stays,
              expert guidance and complete peace of mind.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary" href="/packages">
                Explore Packages
              </Link>
              <a className="btn btn--ghost" href="#story">
                Read More
              </a>
            </div>
          </div>

          <div className="hero__aside">
            <div className="hero-card">
              <div className="hero-card__image">
                <Image src={media.kaabaHero} alt="Kaaba at sunset" fill priority sizes="(max-width: 960px) 100vw, 45vw" />
                <div className="hero-card__badge">لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="story">
        <div className="container split">
          <article className="content-card">
            <SectionHeading
              eyebrow="A Journey for Faith & Devotion"
              title="We accompany you every step of the way"
              copy="From visa to ziyarah, we handle the details with the reverence this sacred journey deserves so you can focus entirely on your worship."
            />
            <div className="hero__actions" style={{ marginTop: 22 }}>
              <Link className="btn btn--primary" href="/packages">
                Our Umrah Pakages
              </Link>
              <a className="btn btn--ghost" href={whatsappLinks.visa} target="_blank" rel="noreferrer">
                Connect With Us
              </a>
            </div>
          </article>

          <div className="image-stack" aria-hidden="true">
            <div className="image-stack__large">
              <Image src={media.meccaImage} alt="Mecca scene" fill sizes="(max-width: 960px) 100vw, 40vw" />
            </div>
            <div className="image-stack__small">
              <Image src={media.madinahImage} alt="Madinah scene" fill sizes="(max-width: 960px) 100vw, 40vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--band">
        <div className="container">
          <div className="band-card panel">
            <div>
              <div className="eyebrow">A Journey for Faith & Devotion</div>
              <h2 className="section__title" style={{ marginTop: 10 }}>
                Packages shaped for comfort, guidance and peace of mind
              </h2>
              <p className="section__lede" style={{ marginTop: 10 }}>
                Select a package tier, then connect with our team for the final itinerary and visa support.
              </p>
            </div>
            <div className="band-card__actions">
              <Link className="btn btn--primary" href="/packages">
                Explore Packages
              </Link>
              <a className="btn btn--ghost" href={whatsappLinks.general} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="packages-preview">
            {packages.map((pkg) => (
              <article key={pkg.title} className="package-preview card">
                <div className="package-preview__image">
                  <Image src={pkg.image} alt={pkg.title} fill sizes="(max-width: 960px) 100vw, 33vw" />
                </div>
                <div className="package-preview__body">
                  <div className="eyebrow">Packages</div>
                  <h3>{pkg.title}</h3>
                  <a className="btn btn--primary package-preview__btn" href={whatsappLinks.general} target="_blank" rel="noreferrer">
                    Enquire Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <SectionHeading
            eyebrow="A Journey for Faith & Devotion"
            title="Our Services"
            copy="Premium support built around the needs of pilgrims, from the first inquiry to the final return."
            center
          />

          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="testimonials">
        <div className="container">
          <SectionHeading
            eyebrow="A Journey for Faith & Devotion"
            title="Words from our Pilgrims"
            center
          />

          <div className="testimonials-grid">
            {reviews.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container split">
          <article className="assist-card">
            <SectionHeading
              eyebrow="A Journey for Faith & Devotion"
              title="Want Assistance with Visa Application? Connect with Our Experts!"
            />
            <p>
              Our team is available to guide you through package selection, visa application, travel planning, and
              every detail needed for a smooth Umrah experience.
            </p>
            <div className="hero__actions" style={{ marginTop: 22 }}>
              <a
                className="btn btn--primary"
                href={whatsappLinks.visa}
                target="_blank"
                rel="noreferrer"
              >
                Connect With Us
              </a>
            </div>
          </article>

          <form className="form-card">
            <SectionHeading
              eyebrow="A Journey for Faith & Devotion"
              title="Begin Your Sacred Journey With Us."
            />

            <div className="form-grid">
              <input className="field" type="text" placeholder="First name" aria-label="First name" />
              <input className="field" type="text" placeholder="Last name" aria-label="Last name" />
              <input className="field" type="tel" placeholder="Phone" aria-label="Phone" />
              <div className="field field--ghost" aria-hidden="true" />
            </div>

            <div style={{ marginTop: 14 }}>
              <textarea className="message" placeholder="Your Message" aria-label="Your Message" defaultValue="I want to enquire about the packages." />
            </div>

            <div className="hero__actions" style={{ marginTop: 18 }}>
              <button className="btn btn--primary" type="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="section section--footer-extras">
        <div className="container split">
          <article className="map-card card">
            <SectionHeading eyebrow="Location" title="Find us on the map" copy="Use the map below to view our business location and plan your visit." />
            <div className="map-embed">
              <iframe
                title="Kalaam Tours & Travels location"
                src="https://www.google.com/maps?q=Kalaam%20Tours%20and%20Travels&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </article>
          <article className="faq-card card">
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" copy="Quick answers to common booking and support questions." />
            <div className="faq-list">
              {faqItems.map((item) => (
                <div key={item.question} className="faq-static">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}