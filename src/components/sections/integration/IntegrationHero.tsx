const IntegrationHero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
            Integration
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Integrations tool you use to run{" "}
            <span className="text-yellow-400">your business</span>
          </h1>
          
          <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Effortlessly integrate essential tools into your business operations, ensuring seamless functionality 
            and enhanced efficiency
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Get Started →
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Contact Us →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationHero; 