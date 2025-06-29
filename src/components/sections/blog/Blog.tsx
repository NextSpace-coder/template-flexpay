import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  author: string;
  imageSrc: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
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
      className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-700 opacity-0 translate-y-10"
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={post.imageSrc} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-primary font-medium">{post.category}</span>
          <div className="flex items-center text-foreground/60">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold line-clamp-2">{post.title}</h3>
        <p className="text-foreground/70 line-clamp-2">{post.summary}</p>
        <div className="pt-2">
          <Button asChild variant="outline" className="group">
            <Link to={`/blog/${post.id}`}>
              Read more
              <span className="button-icon ml-2 group-hover:translate-x-1 transition-transform"></span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Unforeseen Positive Impacts AI",
      summary: "Benefits of social media integration.",
      category: "Management",
      date: "1/1/23",
      author: "Anna White",
      imageSrc: "https://cdn.prod.website-files.com/673ac56b342deb5c46fc867f/673ad10db6fa21a6de6a7acf_Card%20Image-10.png"
    },
    {
      id: 2,
      title: "AI Transforming Lives for the Better",
      summary: "Supports e-commerce businesses.",
      category: "Design",
      date: "8/10/23",
      author: "Chris Black",
      imageSrc: "https://cdn.prod.website-files.com/673ac56b342deb5c46fc867f/673ad0c6100b1ef611938eb0_Card%20Image-11.png"
    },
    {
      id: 3,
      title: "Hide Advantage Artificial Intelligence",
      summary: "Benefits of social media integration.",
      category: "Management",
      date: "9/10/23",
      author: "Anna White",
      imageSrc: "https://cdn.prod.website-files.com/673ac56b342deb5c46fc867f/673ad0a4a25b9d3ebc7124d3_Card%20Image-12.png"
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
          <p className="text-sm font-medium tracking-wider text-primary uppercase mb-3">For Business Team</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Checkout our<br />
            <span className="blog-title-mark">blog</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <div 
          className="flex justify-center mt-12 transition-all duration-700 opacity-0 translate-y-10"
          style={{ transitionDelay: "600ms" }}
          ref={(el) => {
            if (el && sectionRef.current) {
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
              observer.observe(el);
              return () => observer.disconnect();
            }
          }}
        >
          <Button asChild className="bg-gradient-primary hover:opacity-90">
            <Link to="/blog">
              Read All Customer Story
              <span className="button-icon ml-2"></span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog; 