import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      className="relative pt-24 pb-0 overflow-hidden"
      style={{
        backgroundImage: "url('https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/67396f3a39c97b693278918c_Hero%20Bg.png')",
        backgroundPosition: '50%',
        backgroundSize: 'cover',
      }}
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 items-center">
          <div className="space-y-6 text-center">
            <div 
              className="space-y-2 animate-fade-up"
              style={{ 
                animationDelay: "0.2s", 
                animationFillMode: "both" 
              }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Simplifying <span className="hero-title-mark">payments</span> for growing business
              </h1>
              <p className="text-lg text-foreground/80 md:text-xl max-w-3xl mx-auto">
                Streamlining transactions for expanding enterprises. Our solutions simplify payment processes, empowering businesses to focus on growth and innovation.
              </p>
            </div>
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
              style={{ 
                animationDelay: "0.4s", 
                animationFillMode: "both" 
              }}
            >
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                <Link to="/pricing">
                  Get Started
                  <span className="button-icon ml-2"></span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Contact Us
                  <span className="button-icon ml-2"></span>
                </Link>
              </Button>
            </div>
          </div>
          <div 
            className="animate-fade-up"
            style={{ 
              animationDelay: "0.6s", 
              animationFillMode: "both" 
            }}
          >
            <div className="relative bg-card/50 border border-border/40 rounded-2xl p-4 shadow-2xl -mb-5">
            <div className="aspect-video overflow-hidden w-full h-96">
            <img
                alt="FlexPay Dashboard"
                className="mx-auto rounded-lg shadow-xl "
                src="/images/FlexPay-Dashboard.jpg"
                width={1988}
                height={1080}
              />
            </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-20 pointer-events-none rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 