export default function SpecialOffers() {
  const offers = [
    {
      title: 'Holiday Glow Package',
      description: '20% off spa + nails combo. Perfect for festive season pampering.',
      image: '/offer1.webp', // replace with actual promo image
    },
    {
      title: 'Loyalty Membership',
      description: 'Exclusive discounts and priority booking for our regular clients.',
      image: '/offer2.webp',
    },
    {
      title: 'Bridal Bliss Deal',
      description: 'Complete bridal hair & makeup package with complimentary trial session.',
      image: '/offer3.webp',
    },
  ];

  return (
    <section className="px-6 py-16 bg-[var(--color-primary)] text-[var(--color-text)]">
      <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-center mb-12">
        Special Offers & Memberships
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
              <p className="text-gray-600 text-sm">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
