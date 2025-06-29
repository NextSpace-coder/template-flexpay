const Partners = () => {
  // Partner logos array with CDN URLs
  const partnerLogos = [
    "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/6739829ac37634f53fa87579_Company%20Logo-1.png",
    "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/6739829ae3d20c0de4fc637d_Company%20Logo-2.png",
    "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/6739829a81d888807b3cb422_Company%20Logo-3.png",
    "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/6739829a8a328ca11f67775d_Company%20Logo-4.png",
    "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/6739829aeec8342a65db9b96_Company%20Logo-5.png",
    "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/6739829ad2d3bd0a462f45d1_Company%20Logo.png",
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">We've helped their SaaS applications</h2>
        </div>
        
        {/* Partner Logos */}
        <div className="partner-ticker-wrapper">
          {/* First ticker */}
          <div className="single-partner-ticker animate-ticker">
            {partnerLogos.map((logo, index) => (
              <img
                key={`logo-1-${index}`}
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                className="h-8 md:h-10 mx-8 opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners; 