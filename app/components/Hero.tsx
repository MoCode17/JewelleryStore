const Hero = () => {
  return (
    <>
      <section className="relative h-96 md:h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="bg-gray-300 h-full w-full">
          <img
            src={"./images/hero.png"}
            alt="Elegant Jewlery Collection"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">
              Celestial Collection
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Inspired by the cosmos, crafted for eternity.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 font-light tracking-wide hover:opacity-90 transition">
              Explore Collection
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
