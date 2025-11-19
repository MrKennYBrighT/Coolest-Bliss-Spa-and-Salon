const blogPosts = [
  {
    title: 'Top 5 Hair Trends for 2025',
    excerpt: 'Discover the latest styles that are dominating salons this year — from textured bobs to glossy waves.',
    slug: 'hair-trends-2025',
  },
  {
    title: 'Skincare Tips Before Your Makeup Session',
    excerpt: 'Prep your skin like a pro with these essential steps for a flawless finish.',
    slug: 'skincare-before-makeup',
  },
  {
    title: 'How to Choose the Right Nail Shape',
    excerpt: 'Square, almond, stiletto — find out which nail shape suits your style and lifestyle.',
    slug: 'nail-shape-guide',
  },
];

export default function Blog() {
  return (
    <section className="px-6 py-16 bg-[var(--color-primary)] text-[var(--color-text)]">
      <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-center mb-12">
        From the Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
            <a
              href={`/blog/${post.slug}`}
              className="text-[var(--color-accent)] font-medium hover:underline"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
