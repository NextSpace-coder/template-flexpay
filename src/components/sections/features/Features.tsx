import { useEffect, useRef } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  index: number;
}

const FeatureCard = ({ title, description, imageSrc, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-700 opacity-0 translate-y-10 h-full flex flex-col`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        minHeight: '500px' // 确保所有卡片有统一的最小高度
      }}
    >
      {/* 固定高度的标题区域 */}
      <div className="p-6 space-y-4" style={{ minHeight: '180px' }}>
        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
          <img src="https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/6739963d7161e07a6b9dfc4f_Indicator.png" alt="Indicator" className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-bold leading-tight">{title}</h3>
        <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>
      </div>
      
      {/* 固定高度的图片区域 */}
      <div className="relative flex-1 p-6 pt-0" style={{ minHeight: '280px' }}>
        <div className="relative h-full">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-10 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const featureCards = [
    {
      title: "Quick money transaction",
      description: "Embed checkout into your website or direct customers to a page to easily and securely accept one-time payments or subscriptions.",
      imageSrc: "/images/feature-payment-wide.jpg",
      size: "large"
    },
    {
      title: "Easy money transaction",
      description: "Ensure compliance with tax regulations and stay up-to-date with changing laws effortlessly.",
      imageSrc: "/images/feature-dashboard-wide.jpg",
      size: "small"
    },
    {
      title: "Quick money transaction",
      description: "Ensure compliance with tax regulations and stay up-to-date with changing laws effortlessly.",
      imageSrc: "/images/feature-fintech-wide.jpg",
      size: "small"
    },
    {
      title: "Accurate pay for employees",
      description: "Embed checkout into your website or direct customers to a page to easily and securely accept one-time payments or subscriptions.",
      imageSrc: "/images/feature-analytics-wide.jpg",
      size: "large"
    },
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

  // 将卡片按行分组，每行两个
  const groupedCards = [];
  for (let i = 0; i < featureCards.length; i += 2) {
    groupedCards.push(featureCards.slice(i, i + 2));
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div 
          ref={sectionRef}
          className="text-center space-y-4 mb-12 transition-all duration-700 opacity-0 translate-y-10"
        >
          <p className="text-sm font-medium tracking-wider text-primary uppercase">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything you need to run &amp; <span className="feature-title-mark">grow your business</span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            All the tools and resources necessary for managing and expanding your business, conveniently accessible in one place. Take control of your journey to success with our comprehensive solutions.
          </p>
        </div>

        {/* 通用的不规则布局 */}
        <div className="flex flex-col gap-6">
          {groupedCards.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col md:flex-row gap-6 md:h-auto">
              {row.map((card, cardIndex) => {
                const globalIndex = rowIndex * 2 + cardIndex;
                // 调整比例：大卡片从 2 改为 1.6，小卡片保持 1
                const flexValue = card.size === 'large' ? 1.6 : 1;
                
                return (
                  <div key={globalIndex} className={`md:flex-[${flexValue}] flex`}>
                    <FeatureCard
                      title={card.title}
                      description={card.description}
                      imageSrc={card.imageSrc}
                      index={globalIndex}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 