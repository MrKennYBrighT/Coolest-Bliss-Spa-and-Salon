export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 gap-8 bg-[var(--color-primary)] text-[var(--color-text)]">
      {/* Text Content */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] leading-tight mb-4">
        Step Into Luxury, Step Out Radiant
        </h1>
        <p className="text-lg mb-6">
        Discover the ultimate beauty experience in Akure. 
        From flawless hairstyling to premium makeup and nail care, 
        our expert stylists are trusted by thousands to bring out your best self. 
        Step into our salon and step out feeling radiant, refreshed, and unstoppable.
        </p>
        <button className="bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
          Book Now
        </button>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2">
        <div className="aspect-square rounded-lg shadow-md overflow-hidden">
          <img
            src="/hero.webp"
            alt="Salon hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
