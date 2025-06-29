const AllIntegrations = () => {
  const integrations = [
    {
      name: "Zapier",
      description: "Take control of your email design by using your own custom CSS.",
      icon: "🔄",
      color: "bg-orange-100"
    },
    {
      name: "Zapier",
      description: "Take control of your email design by using your own custom CSS.",
      icon: "🍀",
      color: "bg-green-100"
    },
    {
      name: "Amd",
      description: "Take control of your email design by using your own custom CSS.",
      icon: "💎",
      color: "bg-blue-100"
    },
    {
      name: "Confluence",
      description: "Take control of your email design by using your own custom CSS.",
      icon: "🏠",
      color: "bg-orange-100"
    },
    {
      name: "Webmoney",
      description: "Take control of your email design by using your own custom CSS.",
      icon: "💰",
      color: "bg-purple-100"
    },
    {
      name: "Worldpay",
      description: "Take control of your email design by using your own custom CSS.",
      icon: "⚡",
      color: "bg-blue-100"
    },
    {
      name: "Western Union",
      description: "Take control of your email design by using your own custom CSS.",
      icon: "💳",
      color: "bg-yellow-100"
    },
    {
      name: "Visa",
      description: "Take control of your email design by using your own custom CSS.",
      icon: "🔒",
      color: "bg-gray-100"
    }
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            All Integrations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 ${integration.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {integration.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">
                {integration.name}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {integration.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllIntegrations; 