import serv1 from '../assets/services/serv1.webp';
import serv2 from '../assets/services/serv2.webp';
import serv3 from '../assets/services/serv3.webp';
import serv4 from '../assets/services/serv4.webp';

export default function ServicesPreview() {
  const services = [
    {
      title: 'Haircut & Styling',
      description: 'Precision cuts, blowouts, and styling for all hair types.',
      image: serv1,
    },
    {
      title: 'Makeup',
      description: 'Professional makeup for events, photoshoots, or everyday glam.',
      image: serv2,
    },
    {
      title: 'Manicure & Pedicure',
      description: 'Nail care, polish, and spa treatments for hands and feet.',
      image: serv3,
    },
    {
      title: 'Spa & Relaxation',
      description: 'Luxurious treatments to refresh and rejuvenate your body and mind.',
      image: serv4,
    },
  ];

  return (
    <section className="relative bg-[var(--color-primary)] text-[var(--color-text)] clip-shape">
      <div className="px-6 py-16">
        <h2 className="text-3xl font-bold font-[var(--font-heading)] text-center mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-md"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
