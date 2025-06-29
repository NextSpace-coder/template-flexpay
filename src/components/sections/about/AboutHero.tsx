const AboutHero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0"></div>
      
      <div className="container relative z-10 px-4">
        <div className="mb-12">
          <p className="text-white/80 text-sm font-medium mb-4 tracking-wider uppercase text-yellow-400">About us</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            We make easy<br />
            <span className="text-purple-400">10x fast payment <span className="text-neutral-50">systems</span></span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris. 
            Auctor vitae neque urna nam nunc pellentesque.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Team meeting"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero; 