import { useEffect, useRef } from "react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  imageSrc: string;
  index: number;
  variant?: "left" | "right" | "center";
}

const TestimonialCard = ({ quote, name, role, imageSrc, index, variant = "left" }: TestimonialCardProps) => {
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
      className={`bg-card rounded-xl p-6 shadow-lg transition-all duration-700 opacity-0 translate-y-10 flex flex-col ${
        variant === "right" ? "items-start" : variant === "center" ? "items-center text-center" : ""
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {variant !== "right" && (
        <div className="mb-6 flex items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
            <img src={imageSrc} alt={name} className="h-full w-full object-cover" />
          </div>
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-sm text-foreground/70">{role}</p>
          </div>
        </div>
      )}
      
      <blockquote className="text-foreground/90 mb-6">
        "{quote}"
      </blockquote>
      
      {variant === "right" && (
        <div className="mt-auto flex items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
            <img src={imageSrc} alt={name} className="h-full w-full object-cover" />
          </div>
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-sm text-foreground/70">{role}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "After setting the custom logic for each of my webhook connection, I felt at ease knowing that everything was handled the way I wanted and if there was an error, I would be notified in a very timely manner.",
      name: "Phillip Malboeuf",
      role: "Developer, Dispatch Coffee",
      imageSrc: "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/6739cfe34f7784694020bae7_User%20Image.png",
      variant: "left" as const
    },
    {
      quote: "Once I configured the custom logic for each webhook connection, I felt confident that everything was functioning as expected. The timely error notifications added an extra layer of assurance, keeping me informed right away.",
      name: "Sarah Bennett",
      role: "Lead Developer, Dispatch Coffee",
      imageSrc: "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/673ea8332dfff7a3daae6bc4_User%20Image.png",
      variant: "right" as const
    },
    {
      quote: "After configuring the custom logic for my webhook connections, I was relieved to know everything was set up exactly how I wanted. Any potential errors were quickly flagged, so I always stayed informed without delay.",
      name: "James McAllister",
      role: "Software Engineer, Dispatch Coffee",
      imageSrc: "https://cdn.prod.website-files.com/672b5da88039ed28065fa7c1/673ea833a21197552dad83fc_User%20Image-1.png",
      variant: "left" as const
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
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div 
          ref={sectionRef}
          className="text-center mb-16 transition-all duration-700 opacity-0 translate-y-10"
        >
          <p className="text-sm font-medium tracking-wider text-primary uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See what our <span className="testimonial-title-mark">customers</span><br />are saying
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Here's what some of our customers say about our platform.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              imageSrc={testimonial.imageSrc}
              index={index}
              variant={testimonial.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 