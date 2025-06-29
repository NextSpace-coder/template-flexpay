import { useState } from "react";
import { Check } from "lucide-react";

const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "All you need to get started",
      monthlyPrice: 49,
      yearlyPrice: 60,
      features: [
        "All features from the Personal package",
        "All features from the Personal package", 
        "All features from the Personal package"
      ]
    },
    {
      name: "Starter",
      description: "All you need to get started",
      monthlyPrice: 60,
      yearlyPrice: 39,
      features: [
        "All features from the Personal package",
        "All features from the Personal package",
        "All features from the Personal package"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "All you need to get started",
      monthlyPrice: 80,
      yearlyPrice: 59,
      lifetime: true,
      features: [
        "All features from the Personal package",
        "All features from the Personal package",
        "All features from the Personal package"
      ]
    }
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Pricing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 flex">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                !isYearly 
                  ? "bg-yellow-400 text-black" 
                  : "text-white hover:text-yellow-400"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                isYearly 
                  ? "bg-yellow-400 text-black" 
                  : "text-white hover:text-yellow-400"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white text-black rounded-2xl p-8 relative ${
                plan.popular ? "ring-2 ring-yellow-400" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-1">
                  Per user / {plan.lifetime ? "Lifetime" : isYearly ? "Yearly" : "Monthly"}
                </p>
              </div>

              <div className="mb-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Get Started →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans; 