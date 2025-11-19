import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="px-6 py-24 text-center bg-white text-[var(--color-text)]">
      <h1 className="text-6xl font-bold font-[var(--font-heading)] mb-6">404</h1>
      <p className="text-xl mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
      >
        Go Home
      </Link>
    </section>
  );
}
