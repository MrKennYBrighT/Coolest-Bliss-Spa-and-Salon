import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ozone A.',
      feedback:
        'Coolest Bliss Spa gave me the best haircut I’ve ever had. The team is professional and welcoming!',
      rating: 5,
    },
    {
      name: 'Sandra B.',
      feedback:
        'I booked a spa package and left feeling completely refreshed. Truly a unisex salon that understands everyone’s needs.',
      rating: 5,
    },
    {
      name: 'Amaka T.',
      feedback:
        'Their makeup artists are amazing — flawless look for my wedding day. Highly recommend!',
      rating: 4,
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="px-6 py-16 bg-gray-50 text-[var(--color-text)]">
      <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-center mb-12">
        Testimonials & Reviews
      </h2>
      <div className="relative max-w-xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-gray-700 mb-4">
            “{testimonials[current].feedback}”
          </p>
          <div className="flex items-center justify-center mb-2">
            {Array.from({ length: testimonials[current].rating }).map((_, i) => (
              <span key={i} className="text-yellow-400">★</span>
            ))}
          </div>
          <h3 className="text-sm font-semibold text-[var(--color-accent)]">
            — {testimonials[current].name}
          </h3>
        </div>

        {/* Controls */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevSlide}
            className="px-4 py-2 bg-[var(--color-accent)] text-white rounded-lg hover:opacity-90 transition"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 bg-[var(--color-accent)] text-white rounded-lg hover:opacity-90 transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
