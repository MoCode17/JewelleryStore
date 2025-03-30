const Newsletter = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-2xl font-serif mb-4">Stay connected</h2>
        <p className="text-gray-700 mb-6">
          Subscribe to our newsletter for new collections, events, and exclusive
          offers.
        </p>
        <form className="flex items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="flex-grow p-3 border border-gray-300 focus:outline-none focus:border-gray-600"
          />
          <button className="bg-gray-900 text-white px-6 py-3 whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
