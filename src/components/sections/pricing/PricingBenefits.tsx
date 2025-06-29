import { Monitor, Zap, Activity, Headphones, BarChart3, Puzzle } from "lucide-react";

const PricingBenefits = () => {
  const benefits = [
    {
      icon: Monitor,
      title: "Intuitive user interface",
      description: "Effortlessly manage tasks with an intuitive SaaS interface designed for streamlined navigation and enhanced user productivity.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Zap,
      title: "Quick and easy setup",
      description: "Effortlessly launch and manage your software with seamless integration, ensuring fast setup and continuous reliability.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Activity,
      title: "Transaction tracking",
      description: "Effortlessly monitor transactions in real-time with seamless SaaS tracking, ensuring accuracy, transparency, and instant insights for growth.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Headphones,
      title: "Customer support",
      description: "Exceptional customer support that's always ready to assist, ensuring smooth, reliable experiences for your SaaS solutions.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: BarChart3,
      title: "Data-driven insights",
      description: "Empower your business with data-driven insights, transforming information into actionable strategies that fuel growth and innovation.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Puzzle,
      title: "API integrations",
      description: "Seamlessly connect your software with powerful APIs, enhancing functionality and streamlining workflows across all your tools.",
      color: "bg-pink-100 text-pink-600"
    }
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm mb-6">
            Benefit
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What's included
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here's what some of our customers say about our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-4">
              <div className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold">
                {benefit.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingBenefits; 