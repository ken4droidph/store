import React from 'react';

const Gallery = () => {
  // Placeholder images using picsum.photos with different seeds
  const images = [
    { id: 1, src: 'https://picsum.photos/seed/gallery1/800/600.jpg', alt: 'Gallery Image 1' },
    { id: 2, src: 'https://picsum.photos/seed/gallery2/800/600.jpg', alt: 'Gallery Image 2' },
    { id: 3, src: 'https://picsum.photos/seed/gallery3/800/600.jpg', alt: 'Gallery Image 3' },
    { id: 4, src: 'https://picsum.photos/seed/gallery4/800/600.jpg', alt: 'Gallery Image 4' },
    { id: 5, src: 'https://picsum.photos/seed/gallery5/800/600.jpg', alt: 'Gallery Image 5' },
    { id: 6, src: 'https://picsum.photos/seed/gallery6/800/600.jpg', alt: 'Gallery Image 6' },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our visual journey through carefully curated moments and product highlights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
