import { useState } from "react";
import { PRODUCTS } from "../../public/constants/featuredProducts";
import { Heart } from "lucide-react";

const Featured = () => {
  const [category, setCategory] = useState("all");

  const filterProducts = (category: string) => {
    setCategory(category);
  };

  const filteredProducts =
    category === "all"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === category);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-8">
          Featured Pieces
        </h2>
        {/* Category Filters */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-6 overflow-x-auto pb-2">
            <button
              onClick={() => filterProducts("all")}
              className={`px-4 py-2 ${
                category === "all"
                  ? "border-b-2 border-gray-900"
                  : "text-gray-500"
              }`}
            >
              All
            </button>
            <button
              onClick={() => filterProducts("rings")}
              className={`px-4 py-2 ${
                category === "rings"
                  ? "border-b-2 border-gray-900"
                  : "text-gray-500"
              }`}
            >
              Rings
            </button>
            <button
              onClick={() => filterProducts("necklaces")}
              className={`px-4 py-2 ${
                category === "necklaces"
                  ? "border-b-2 border-gray-900"
                  : "text-gray-500"
              }`}
            >
              Necklaces
            </button>
            <button
              onClick={() => filterProducts("earrings")}
              className={`px-4 py-2 ${
                category === "earrings"
                  ? "border-b-2 border-gray-900"
                  : "text-gray-500"
              }`}
            >
              Earrings
            </button>
            <button
              onClick={() => filterProducts("bracelets")}
              className={`px-4 py-2 ${
                category === "bracelets"
                  ? "border-b-2 border-gray-900"
                  : "text-gray-500"
              }`}
            >
              Bracelets
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative mb-4 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-3 right-3 text-gray-600 hover:text-red-500 bg-white rounded-full shadow-sm">
                  <Heart size={24} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-white/70 py-3 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full text-gray-900 text-sm font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-700">${product.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="border border-gray-900 text-gray-900 px-8 py-3 hover:bg-gray-900 hover:text-white transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
