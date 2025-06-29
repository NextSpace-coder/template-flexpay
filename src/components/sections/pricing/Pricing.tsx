import { useState, useEffect, useRef } from "react";
import { ArrowRight, Check } from "lucide-react";

interface PricingPlan {
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
}

const PricingCard = ({ 
  plan, 
  isHighlighted = false 
}: { 
  plan: PricingPlan; 
  isHighlighted?: boolean;
}) => {
  return (
    <div className="bg-white rounded-2xl p-8 flex flex-col h-full">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-black">{plan.title}</h3>
        <p className="text-black/70 mt-1">{plan.description}</p>
      </div>
      
      <div className="mb-8">
        <div className="flex items-baseline">
          <span className="text-5xl font-bold text-black">{plan.price}</span>
        </div>
        <div className="text-black/70 mt-1">{plan.duration}</div>
      </div>
      
      <div className="space-y-5 mb-8 flex-grow">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-start">
            <img 
              src="https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/6739e3796d29e80b74d8ee48_Check.png"
              alt="Check" 
              className="mr-3 h-5 w-5"
            />
            <span className="text-black">{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-auto">
        <button className="w-full py-4 px-6 bg-[#e4ff00] text-black font-medium rounded-md flex items-center justify-center">
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const sectionRef = useRef<HTMLDivElement>(null);

  const monthlyPlans: PricingPlan[] = [
    {
      title: "Starter",
      description: "All you need to get started",
      price: "$49",
      duration: "Per user / Monthly",
      features: [
        "All features from the Personal package",
        "All features from the Personal package",
        "All features from the Personal package"
      ]
    },
    {
      title: "Starter",
      description: "All you need to get started",
      price: "$60",
      duration: "Per user / Yearly",
      features: [
        "All features from the Personal package",
        "All features from the Personal package",
        "All features from the Personal package"
      ]
    },
    {
      title: "Enterprise",
      description: "All you need to get started",
      price: "$80",
      duration: "Per user / Lifetime",
      features: [
        "All features from the Personal package",
        "All features from the Personal package",
        "All features from the Personal package"
      ]
    }
  ];

  const yearlyPlans: PricingPlan[] = [
    {
      title: "Starter",
      description: "All you need to get started",
      price: "$44",
      duration: "Per user / Monthly",
      features: [
        "All features from the Personal package",
        "All features from the Personal package",
        "All features from the Personal package"
      ]
    },
    {
      title: "Starter",
      description: "All you need to get started",
      price: "$39",
      duration: "Per user / Yearly",
      features: [
        "All features from the Personal package",
        "All features from the Personal package",
        "All features from the Personal package"
      ]
    },
    {
      title: "Enterprise",
      description: "All you need to get started",
      price: "$59",
      duration: "Per user / Lifetime",
      features: [
        "All features from the Personal package",
        "All features from the Personal package",
        "All features from the Personal package"
      ]
    }
  ];

  const plans = billingPeriod === "monthly" ? monthlyPlans : yearlyPlans;

  return (
    <section className="py-20 bg-gradient-to-br from-black via-purple-950/90 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/FlexPay-Dashboard.jpg')] opacity-5 bg-cover bg-center"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div 
          ref={sectionRef}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Simple and affordable<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">pricing plans</span> for everyone
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center p-1 bg-black/30 backdrop-blur-sm rounded-full border border-white/10">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-8 py-3 rounded-full text-base font-medium transition-all ${
                billingPeriod === "monthly"
                  ? "bg-[#e4ff00] text-black"
                  : "text-white hover:text-white/80"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-8 py-3 rounded-full text-base font-medium transition-all ${
                billingPeriod === "yearly"
                  ? "bg-[#e4ff00] text-black"
                  : "text-white hover:text-white/80"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index} 
              plan={plan} 
              isHighlighted={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 