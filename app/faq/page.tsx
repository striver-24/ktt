import { Footer, Header, FaqItem, SectionHeading } from '@/components/site';

const faqItems = [
  {
    question: 'What documents do I need?',
    answer: 'Passport details and traveler information are required. Our team will guide you through the rest.',
  },
  {
    question: 'Can I change my package after inquiry?',
    answer: 'Yes. Speak with the team on WhatsApp and we will help you move to the right package.',
  },
  {
    question: 'Do you help with hotels and transfers?',
    answer: 'Yes, accommodation and transfers are arranged as part of the selected package flow.',
  },
];

export default function FaqPage() {
  return (
    <main className="page">
      <Header />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" copy="Answers to the questions visitors ask most often." />
          <div className="faq-list">
            {faqItems.map((item) => (
              <FaqItem key={item.question} {...item} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}