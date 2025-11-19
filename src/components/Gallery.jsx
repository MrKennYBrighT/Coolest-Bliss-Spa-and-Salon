import gall1 from '../assets/gallery/gall1.webp';
import gall2 from '../assets/gallery/gall2.webp';
import gall3 from '../assets/gallery/gall3.webp';
import gall4 from '../assets/gallery/gall4.webp';
import gall5 from '../assets/gallery/gall5.webp';
import gall6 from '../assets/gallery/gall6.webp';

export default function Gallery() {
  const galleryImages = [gall1, gall2, gall3, gall4, gall5, gall6];

  return (
    <section className="px-6 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg shadow-md"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
