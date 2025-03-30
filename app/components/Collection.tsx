import { COLLECTIONS } from "../../public/constants/collections";

const Collection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12">
          Our Collections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COLLECTIONS.map((collection) => (
            <div key={collection.id} className="relative overflow-hidden group">
              <div className="h-80 bg-gray-200">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center text-white p-6 transform group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-medium mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-sm mb-4">{collection.description}</p>
                  <button className="border border-white text-white px-6 py-2 text-sm hover:bg-white hover:text-gray-900 transition">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
