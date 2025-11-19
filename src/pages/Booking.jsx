import { useState } from 'react';

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    service: '',
    date: '',
    time: '',
  });

  const services = ['Haircut & Styling', 'Makeup', 'Manicure & Pedicure'];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', form);
    // Future: Send to Firebase
  };

  return (
    <section className="bg-[var(--color-primary)] text-[var(--color-text)]">
      <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-center mb-12">
        Book an Appointment
      </h2>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md space-y-6 w-full max-w-xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          >
            <option value="">Select a Service</option>
            {services.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />

          <button
            type="submit"
            className="bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
}
