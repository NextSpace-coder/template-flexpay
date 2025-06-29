const StatsCards = () => {
  const cards = [
    {
      year: "2023",
      label: "Launched",
      bgColor: "bg-white",
      textColor: "text-gray-900"
    },
    {
      year: "2023", 
      label: "Launched",
      bgColor: "bg-yellow-400",
      textColor: "text-gray-900"
    },
    {
      year: "2023",
      label: "Launched", 
      bgColor: "bg-pink-400",
      textColor: "text-gray-900"
    }
  ];

  return (
    <section className="py-16 relative -mt-16 z-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} ${card.textColor} rounded-2xl p-8 text-center shadow-lg transform transition-all duration-300 hover:scale-105`}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-2">{card.year}</h3>
              <p className="text-lg font-medium opacity-80">{card.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCards; 