import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-primary)] text-[var(--color-text)] font-[var(--font-body)]">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white relative">
        <h1 className="text-2xl font-bold font-[var(--font-heading)] text-[var(--color-text)]">
          Coolest
        </h1>

        {/* ✅ Styled Hamburger Button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded border-2 border-blue-700 bg-white focus:outline-none hover:bg-blue-50 transition"
          style={{ backgroundColor: '#ffffff' }}
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ backgroundColor: 'transparent' }}
          >
            <path
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Nav links */}
<nav
  className={`${
    isOpen ? 'flex' : 'hidden'
  } flex-col absolute top-full left-0 w-full bg-white shadow-md z-50 md:static md:flex md:flex-row md:space-x-6 md:w-auto md:bg-transparent md:shadow-none`}
>
  <Link
    to="/"
    className="px-6 py-3 md:px-0 md:py-0 text-green-600 visited:text-green-600 hover:text-[var(--color-accent)] no-underline"
  >
    Home
  </Link>
  <Link
    to="/services"
    className="px-6 py-3 md:px-0 md:py-0 text-green-600 visited:text-green-600 hover:text-[var(--color-accent)] no-underline"
  >
    Services
  </Link>
  <Link
    to="/booking"
    className="px-6 py-3 md:px-0 md:py-0 text-green-600 visited:text-green-600 hover:text-[var(--color-accent)] no-underline"
  >
    Book Now
  </Link>
  <Link
    to="/contact"
    className="px-6 py-3 md:px-0 md:py-0 text-green-600 visited:text-green-600 hover:text-[var(--color-accent)] no-underline"
  >
    Contact
  </Link>
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
