const AboutContent = () => {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <p className="text-white/60 text-sm font-medium mb-4 tracking-wider uppercase text-purple-300">
                Metafi Through The Years
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We're here to make everything easier for you
              </h2>
            </div>
            
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                Over the years, Metafi has evolved into a leading provider of financial solutions, constantly adapting to meet the ever-changing needs of businesses worldwide. Our success is not just measured in years but in the tangible impact we've made, backed by concrete data and statistics that validate our journey.
              </p>
              
              <p>
                Our growth trajectory is marked by milestones, each supported by solid numbers that underscore our achievements and validate our position as a trusted partner in the financial industry. As we look back on our journey, "The Number to Back It Up" serves as a reminder of our resilience, innovation, and unwavering dedication to our mission of empowering businesses to thrive in a dynamic and competitive landscape.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="Team working together"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent; 