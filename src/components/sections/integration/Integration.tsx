import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface LogoItemProps {
  src: string;
  index: number;
}

const LogoItem = ({ src, index }: LogoItemProps) => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      if (logoRef.current) {
        observer.unobserve(logoRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={logoRef}
      className="integration-logo-item bg-white/90 backdrop-blur-sm p-6 rounded-xl flex items-center justify-center transition-all duration-700 opacity-0 translate-y-6 shadow-xl hover:bg-white hover:scale-105"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <img src={src} alt="Integration Logo" className="w-auto opacity-80 hover:opacity-100 transition-opacity" />
    </div>
  );
};

const Integration = () => {
  const integrationLogos = [
    "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/67ac673c4566714cca33a027_Frame.png",
    "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/67ac673efba51ad36582bf36_logo-86.png",
    "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/67ac673eb1e4ff190d59d983_logo-82.png",
    "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/67ac673ec2c61bce371f788c_logo-85.png",
    "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/67ac673e7b9859b4e98f9e1c_logo-88.png",
    "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/67ac673c57e9d82f5ce72072_logo-81.png",
    "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/67ac673c135469f32fba0203_logo-73.png",
    "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/67ac673ca5c23560cb56a151_logo-38.png",
    "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/67ac673c2f05489daf73d36a_logo-35.png",
    "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/67ac673cacd413cd979511ee_logo-13.png",
    "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/67ac673c07002b030599e138_logo-15.png",
    "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/67ac673cf1c45e07ffc9eb7c_logo-14.png"
];

  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden" 
      
    >
      {/* 半透明蒙版背景 */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" style={{
        background: `
          radial-gradient(ellipse at 25% 50%, rgba(254, 240, 138, 0.4) 0%, rgba(254, 240, 138, 0.2) 10%, transparent 50%),
          radial-gradient(ellipse at 75% 50%, rgba(196, 181, 253, 0.4) 0%, rgba(196, 181, 253, 0.2) 10%, transparent 50%),
          linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.9) 100%)
        `
      }}></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div 
            ref={titleRef}
            className="lg:w-1/2 transition-all duration-700 opacity-0 translate-y-10"
          >
            <p className="text-sm font-medium tracking-wider text-purple-300 uppercase mb-3">Integration</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              End-to-end <span className="text-purple-300">Billing<br />Software</span>
            </h2>
          </div>
          <div 
            ref={contentRef}
            className="lg:w-1/2 space-y-6 transition-all duration-700 opacity-0 translate-y-10"
            style={{ transitionDelay: "200ms" }}
          >
            <p className="text-gray-200">
              Start accepting recurring payments in minutes. Use Invoicing to collect payments from existing customers or share a payment link to sell a subscription—no code required.
            </p>
            <div>
              <Button asChild className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-3">
                <Link to="/integration">
                  Load More →
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {integrationLogos.map((logo, index) => (
            <LogoItem key={index} src={logo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integration; 