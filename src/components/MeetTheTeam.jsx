export default function MeetTheTeam() {
  const team = [
    {
      name: 'Jane Doe',
      role: 'Senior Stylist',
      bio: 'With over 10 years of experience, Jane specializes in precision cuts and bridal styling.',
      image: '/team1.webp', // replace with actual image path
    },
    {
      name: 'Michael A.',
      role: 'Spa Therapist',
      bio: 'Michael brings relaxation to life with expert massage and spa therapies tailored for everyone.',
      image: '/team2.webp',
    },
    {
      name: 'Chioma B.',
      role: 'Makeup Artist',
      bio: 'Chioma creates flawless looks for weddings, photoshoots, and everyday glam.',
      image: '/team3.webp',
    },
  ];

  return (
    <section className="px-6 py-16 bg-white text-[var(--color-text)]">
      <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-center mb-12">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <div className="mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover rounded-md"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-[var(--color-accent)] mb-2">{member.role}</p>
            <p className="text-gray-600 text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
