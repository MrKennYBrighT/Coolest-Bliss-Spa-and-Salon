import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-primary)] text-[var(--color-text)] font-[var(--font-body)]">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
        <h1 className="text-2xl font-bold font-[var(--font-heading)] text-[var(--color-text)]">
          Coolest
        </h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-[var(--color-accent)]">Home</Link>
          <Link to="/services" className="hover:text-[var(--color-accent)]">Services</Link>
          <Link to="/booking" className="hover:text-[var(--color-accent)]">Book Now</Link>
          <Link to="/contact" className="hover:text-[var(--color-accent)]">Contact</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="w-full max-w-7xl mx-auto px-6 py-12">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 bg-white text-sm text-gray-500">
        © 2025 Colest Unisex Salon & Spa. All rights reserved.
      </footer>
    </div>
  );
}
