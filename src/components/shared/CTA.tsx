import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 overflow-hidden transition-all duration-700 opacity-0 translate-y-10"
    >
      <div className="container px-4 md:px-6">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-flexpay-purple to-flexpay-pink opacity-20"></div>
          <div className="absolute inset-0 bg-card/80 backdrop-blur-sm"></div>
          
          <div 
            ref={contentRef}
            className="relative p-8 md:p-12 lg:p-16 text-center transition-all duration-700 opacity-0 translate-y-10"
            style={{ transitionDelay: "200ms" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Simplifying Payments for <span className="cta-title-mark">Growing Business</span>
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
              Join over 300+ partners and customers already growing with FlexPay
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-gradient-primary hover:opacity-90">
                <Link to="/contact">
                  Get Started
                  <span className="button-icon ml-2"></span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20 hover:bg-white/10">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 