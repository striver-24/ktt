import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Footer, Header, SectionHeading, whatsappLinks } from '@/components/site';
import { blogPosts, getBlogPost } from '@/components/blog-data';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: Props) {
  const { slug } = params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const currentPost = post;

  return (
    <main className="page">
      <Header />
      <section className="section">
        <div className="container">
          <article className="card blog-article">
            <div className="blog-article__image">
              <Image src={currentPost.image} alt={currentPost.title} fill sizes="100vw" priority />
            </div>
            <div className="blog-article__content">
              <SectionHeading eyebrow={currentPost.date} title={currentPost.title} copy={currentPost.excerpt} />
              <div className="blog-prose">
                {currentPost.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="hero__actions">
                <a className="btn btn--primary" href={whatsappLinks.general} target="_blank" rel="noreferrer">
                  Enquire Now
                </a>
                <Link className="btn btn--ghost" href="/blog">
                  Back to Blog
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
}