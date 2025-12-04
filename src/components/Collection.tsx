import React from 'react';

const Collection = () => {
  const collections = [
    {
      id: 1,
      name: 'Essential Series',
      description: 'Core products designed for everyday use',
      image: 'https://picsum.photos/seed/collection1/600/400.jpg',
      itemCount: 12,
    },
    {
      id: 2,
      name: 'Premium Line',
      description: 'Luxury editions with premium materials',
      image: 'https://picsum.photos/seed/collection2/600/400.jpg',
      itemCount: 8,
    },
    {
      id: 3,
      name: 'Limited Edition',
      description: 'Exclusive releases with unique designs',
      image: 'https://picsum.photos/seed/collection3/600/400.jpg',
      itemCount: 5,
    },
  ];

  return (
    <section id="collection" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully curated collections, each with its own story and purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
                  <p className="text-sm text-gray-200 mb-3">{collection.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-300">{collection.itemCount} items</span>
                    <button className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                      View Collection
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
