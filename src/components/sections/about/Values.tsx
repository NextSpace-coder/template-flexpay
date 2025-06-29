const Values = () => {
  const values = [
    {
      icon: "👥",
      title: "Focus on customers",
      description: "We understand that sustained growth stems from consistently delivering value to our current customers and ensuring they feel valued.",
      iconBg: "bg-yellow-400"
    },
    {
      icon: "🎯", 
      title: "Care about long-term goals",
      description: "We design products that offer a seamless experience, from elegant design to exceptional customer support, aligning with long-term goals.",
      iconBg: "bg-green-400"
    },
    {
      icon: "⚡",
      title: "As simple as possible", 
      description: "We firmly believe in the power of simplicity. Complex challenges are met with straightforward solutions, as we strive to simplify processes at every turn.",
      iconBg: "bg-blue-400"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className=" space-y-4">
              {/* Icon */}
              <div className={`w-16 h-16 ${value.iconBg} rounded-full flex items-center justify-center text-2xl mb-6`}>
                {value.icon}
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values; 