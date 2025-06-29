import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="top-0 z-50 w-full border-b border-border/40 bg-transparent backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <img 
              src="/images/logo.png" 
              alt="FlexPay Logo" 
              className="h-16 w-auto" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/features" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Features
          </Link>
          <Link to="/integration" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Integration
          </Link>
          <Link to="/blog" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Blog
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Pricing
          </Link>
        </nav>

        {/* Get Started Button - Desktop */}
        <div className="hidden md:block">
          <Button asChild className="bg-gradient-primary hover:opacity-90">
            <Link to="/pricing">
              Get Started
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="container py-4 space-y-3">
            <Link 
              to="/" 
              className="block py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-base font-medium text-foreground/80 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/features" 
              className="block py-2 text-base font-medium text-foreground/80 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/integration" 
              className="block py-2 text-base font-medium text-foreground/80 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Integration
            </Link>
            <Link 
              to="/blog" 
              className="block py-2 text-base font-medium text-foreground/80 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/pricing" 
              className="block py-2 text-base font-medium text-foreground/80 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <div className="pt-2">
              <Button asChild className="w-full bg-gradient-primary hover:opacity-90">
                <Link to="/pricing" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar; 