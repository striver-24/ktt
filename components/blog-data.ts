import { media } from './media';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: typeof media.kaabaHero;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-prepare-for-umrah',
    title: 'How to Prepare for Umrah: A Practical Pilgrim Checklist',
    excerpt: 'A simple guide to documents, packing, and spiritual preparation before departure.',
    date: 'June 2026',
    image: media.kaabaHero,
    body: [
      'Start with the essentials: passport, photo, PAN card, and a clear travel timeline.',
      'Keep your packing light but purposeful. Ihram, comfortable footwear, prayer essentials, and basic medicines matter more than excess luggage.',
      'Prepare spiritually as well as logistically. Knowing the rites and itinerary in advance makes the journey calmer and more meaningful.',
    ],
  },
  {
    slug: 'hajj-and-umrah-difference',
    title: 'Hajj vs Umrah: Understanding the Difference Before You Travel',
    excerpt: 'A concise comparison for families deciding between Hajj and Umrah support.',
    date: 'May 2026',
    image: media.madinahImage,
    body: [
      'Hajj is an annual pilgrimage with fixed dates and specific rites, while Umrah can be performed throughout the year.',
      'Both journeys deserve thoughtful planning, but Hajj often requires more layered coordination because of the pilgrimage calendar.',
      'Whether your trip is for Hajj or Umrah, working with an experienced travel partner reduces uncertainty and improves peace of mind.',
    ],
  },
  {
    slug: 'best-travel-tips-for-pilgrims',
    title: 'Best Travel Tips for Pilgrims Visiting Makkah and Madinah',
    excerpt: 'Travel advice focused on comfort, safety, and staying present in worship.',
    date: 'April 2026',
    image: media.meccaImage,
    body: [
      'Stay hydrated, rest when needed, and build buffer time into every movement between the hotel and the Haram.',
      'Keep a small daily kit with prayer items, power bank, water, tissue, and any personal medication.',
      'Most importantly, avoid over-scheduling. A quieter itinerary often creates a more worship-focused journey.',
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}