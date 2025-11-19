export default function Services() {
  const services = [
    {
      title: 'Haircut & Styling',
      description:
        'From classic cuts to modern styles, our expert stylists deliver precision and flair tailored to your look.',
      icon: '💇‍♀️',
    },
    {
      title: 'Makeup',
      description:
        'Whether it’s bridal glam or editorial chic, our makeup artists enhance your natural beauty with professional finesse.',
      icon: '💄',
    },
    {
      title: 'Manicure & Pedicure',
      description:
        'Relax and rejuvenate with our luxurious nail care treatments — perfect polish, perfect pampering.',
      icon: '💅',
    },
    {
      title: 'Hair Coloring',
      description:
        'Vibrant tones, subtle highlights, or full transformations — we bring your color vision to life.',
      icon: '🎨',
    },
    {
      title: 'Facials & Skin Care',
      description:
        'Glow from within with our customized facials and skin treatments designed for every skin type.',
      icon: '🧖‍♀️',
    },
  ];

  return (
    <section className="px-6 py-16 bg-white text-[var(--color-text)]">
      <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-center mb-12">
        Explore Our Full Range of Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[var(--color-primary)] rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
