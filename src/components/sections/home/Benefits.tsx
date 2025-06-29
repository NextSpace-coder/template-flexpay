import { useEffect, useRef } from "react";

interface BenefitItemProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

const BenefitItem = ({ icon, title, description, index }: BenefitItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef}
      className="flex gap-4 transition-all duration-700 opacity-0 translate-y-8"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-card flex items-center justify-center bg-yellow-300 ">
        <img src={icon} alt={title} className="h-6 w-6" />
      </div>
      <div className="space-y-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </div>
    </div>
  );
};

const Benefits = () => {
  const benefitItems = [
    {
      icon: "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/6739b8ceb0f7e2eae3d7a92a_Icon.png",
      title: "Intuitive user interface",
      description: "Effortlessly manage tasks with an intuitive SaaS interface designed for streamlined navigation and enhanced user productivity."
    },
    {
      icon: "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/6739b8cea94458bd37a1a100_Icon-1.png",
      title: "Quick and easy setup",
      description: "Effortlessly launch and manage your software with seamless integration, ensuring fast setup and continuous reliability."
    },
    {
      icon: "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/6739b8cec1d3616750b6975d_Icon-2.png",
      title: "Transaction tracking",
      description: "Effortlessly monitor transactions in real-time with seamless SaaS tracking, ensuring accuracy, transparency, and instant insights for growth."
    },
    {
      icon: "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/6739b8ce264a049df93e40e8_Icon-3.png",
      title: "Customer support",
      description: "Exceptional customer support that's always ready to assist, ensuring smooth, reliable experiences for your SaaS solutions."
    },
    {
      icon: "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/6739b8cf04cea24f60a4cbdd_Icon-4.png",
      title: "Data-driven insights",
      description: "Empower your business with data-driven insights, transforming information into actionable strategies that fuel growth and innovation."
    },
    {
      icon: "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/6739b8cf04145bfa7ed99ed5_Icon-5.png",
      title: "API integrations",
      description: "Seamlessly connect your software with powerful APIs, enhancing functionality and streamlining workflows across all your tools."
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-background/50">
      <div className="container px-4 md:px-6">
        <div 
          ref={sectionRef}
          className="text-center mb-16 transition-all duration-700 opacity-0 translate-y-10"
        >
          <p className="text-sm font-medium tracking-wider text-primary uppercase mb-3">Benefit</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What's included</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Here's what some of our customers say about our platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefitItems.map((item, index) => (
            <BenefitItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits; 