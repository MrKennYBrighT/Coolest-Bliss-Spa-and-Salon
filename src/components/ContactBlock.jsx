export default function ContactBlock() {
  return (
    <section className="px-6 py-12 bg-gray-50 text-[var(--color-text)] text-center">
      <h2 className="text-2xl md:text-3xl font-bold font-[var(--font-heading)] mb-4">
        Get In Touch
      </h2>
      <p className="text-gray-600 mb-6">
        Have questions or ready to book? Reach us quickly through any of these channels.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <a
          href="tel:+2349162036246"
          className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg shadow hover:opacity-90 transition"
        >
          📞 Call Us
        </a>
        <a
          href="mailto:info@coolestblissspa.com"
          className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg shadow hover:opacity-90 transition"
        >
          📧 Email Us
        </a>
        <a
          href="https://wa.me/2348007654321"
          target="_blank"
          className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg shadow hover:opacity-90 transition"
        >
          💬 WhatsApp
        </a>
      </div>
    </section>
  );
}
