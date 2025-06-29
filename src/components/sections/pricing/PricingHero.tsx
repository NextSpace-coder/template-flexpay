const PricingHero = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
            Pricing Plan
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Simple and affordable{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              pricing plans for everyone
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PricingHero; 