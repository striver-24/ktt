import Image from 'next/image';
import Link from 'next/link';
import { media } from './media';

export const whatsappLinks = {
  general: 'https://wa.me/7737826639?text=%22Hi!%20I%20want%20to%20enquire%20about%20KTT.%22',
  visa: 'https://wa.me/7737826639?text=%22Hi!%20I%20want%20to%20connect%20with%20a%20Visa%20Expert.%22',
};

function IconLink({ href, src, alt, label }: { href: string; src: string; alt: string; label: string }) {
  return (
    <a className="icon-link" href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
      <Image src={src} alt={alt} width={22} height={22} unoptimized />
    </a>
  );
}

export function FloatingChatButton() {
  return (
    <a className="floating-chat" href={whatsappLinks.general} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp" title="Chat with us">
      <Image src={media.whatsappIcon} alt="WhatsApp" width={28} height={28} unoptimized />
    </a>
  );
}

export function Header() {
  return (
    <header className="topbar">
      <div className="container topbar__inner">
        <Link href="/" className="brand" aria-label="Kalaam Tours & Travels home">
          <Image className="brand__logo" src={media.kttLogo} alt="Kalaam Tours & Travels logo" width={64} height={64} priority />
          <span className="brand__copy">
            <span className="brand__name">Kalaam Tours & Travels</span>
            <span className="brand__tag">Umrah journeys, crafted with care</span>
          </span>
        </Link>

        <div className="topbar__contact">
          <span>Call / WhatsApp: +91 77378 26639</span>
        </div>

        <nav className="nav" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/packages">Packages</Link>
          <Link href="/our-services">Our Services</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/blog">Blog</Link>
          <IconLink href={whatsappLinks.general} src={media.whatsappIcon.src} alt="WhatsApp" label="WhatsApp" />
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container panel footer__panel">
        <Link href="/" className="brand footer__brand" aria-label="Kalaam Tours & Travels home">
          <Image className="brand__logo" src={media.kttLogo} alt="Kalaam Tours & Travels logo" width={56} height={56} />
          <span className="brand__copy">
            <strong>Kalaam Tours & Travels</strong>
            <span className="brand__tag">Umrah journeys, crafted with care</span>
          </span>
        </Link>

        <div className="footer__links">
          <Link href="/about-us">About Us</Link>
          <Link href="/packages">Packages</Link>
          <Link href="/our-services">Our Services</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/blog">Blog</Link>
          <IconLink href={whatsappLinks.general} src={media.whatsappIcon.src} alt="WhatsApp" label="WhatsApp" />
          <IconLink href="https://www.instagram.com/kalaamtoursandtravels/" src={media.instagramIcon.src} alt="Instagram" label="Instagram" />
          <IconLink href="https://www.facebook.com/KalaamToursAndTravels?rdid=FSIVketoo56Hfa1u&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HSDM4rasz%2F%3Fref%3D1" src={media.facebookIcon.src} alt="Facebook" label="Facebook" />
        </div>
      </div>
      <div className="container" style={{ paddingTop: 14, color: 'var(--muted)', textAlign: 'center' }}>
        <div>Phone: +91 77378 26639</div>
        <div style={{ marginTop: 6 }}>Built with love and caffeine by BlinkNext. © 2025 by KTT.</div>
      </div>
    </footer>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  center = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  center?: boolean;
}) {
  return (
    <div className="section__intro" style={center ? { textAlign: 'center', justifyItems: 'center' } : undefined}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section__title">{title}</h2>
      {copy ? <p className="section__lede">{copy}</p> : null}
    </div>
  );
}

export function ServiceCard({ icon, title, copy }: { icon: string; title: string; copy: string }) {
  return (
    <article className="service-card">
      <div className="service-card__icon">{icon}</div>
      <h3>{title}</h3>
      <p>{copy}</p>
    </article>
  );
}

export function TestimonialCard({ quote, name }: { quote: string; name: string }) {
  return (
    <article className="testimonial-card">
      <blockquote>“{quote}”</blockquote>
      <footer>{name}</footer>
    </article>
  );
}

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="faq-item">
      <summary>{question}</summary>
      <p>{answer}</p>
    </details>
  );
}
