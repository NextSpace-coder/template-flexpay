import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "../components/shared";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container withGradient>
        <div className="text-center py-20">
          <h1 className="text-6xl font-bold mb-4 text-foreground">404</h1>
          <p className="text-xl text-foreground/70 mb-8">Oops! Page not found</p>
          <p className="text-foreground/60 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-gradient-primary hover:opacity-90">
            <Link to="/">
              Return to Home
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
