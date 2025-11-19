export default function WhatSetsUsApart() {
  const highlights = [
    {
      title: 'Inclusive Beauty for Everyone',
      description: 'We celebrate diversity with styles and treatments tailored for all genders, ages, and hair types.',
    },
    {
      title: 'Eco‑Friendly Products',
      description: 'Our salon uses sustainable, cruelty‑free products that care for you and the planet.',
    },
    {
      title: 'Expert Stylists',
      description: 'Certified professionals with years of experience in hair, makeup, and spa therapies.',
    },
    {
      title: 'Relaxation‑Focused Design',
      description: 'A calming environment with modern interiors designed to help you unwind and recharge.',
    },
  ];

  return (
    <section className="px-6 py-16 bg-gray-50 text-[var(--color-text)]">
      <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-center mb-12">
        What Sets Us Apart
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
