const Team = () => {
  const teamMembers = [
    {
      image: "/images/team-member-1.jpg"
    },
    {
      image: "/images/team-member-2.jpg"
    },
    {
      image: "/images/team-member-3.jpg"
    },
    {
      image: "/images/team-member-4.jpg"
    },
    {
      image: "/images/team-member-5.jpg"
    },
    {
      image: "/images/team-member-6.jpg"
    },
    {
      image: "/images/team-member-7.jpg"
    },
    {
      image: "/images/team-member-8.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-white/60 text-sm font-medium mb-4 tracking-wider uppercase">Our team</p>
          <h2 className="text-3xl md:text-4xl font-bold">Meet our awesome team</h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img 
                  src={member.image}
                  alt={`Team member ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 