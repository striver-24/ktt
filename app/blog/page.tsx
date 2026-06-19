import Image from 'next/image';
import Link from 'next/link';
import { Footer, Header, SectionHeading } from '@/components/site';
import { blogPosts } from '@/components/blog-data';

export default function BlogPage() {
  return (
    <main className="page">
      <Header />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Blog"
            title="Umrah and Hajj travel notes"
            copy="Short articles to support pilgrims with practical planning, spiritual preparation, and travel awareness."
          />
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card blog-card">
                <div className="blog-card__image">
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 960px) 100vw, 33vw" />
                </div>
                <div className="blog-card__body">
                  <div className="eyebrow">{post.date}</div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link className="btn btn--primary" href={`/blog/${post.slug}`}>
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}