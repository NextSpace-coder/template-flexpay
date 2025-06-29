import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Loader2
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNewsletterSubscribe } from "@/hooks/useNewsletter";
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const newsletterSubscribe = useNewsletterSubscribe();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      return;
    }

    console.log("正在订阅邮件列表:", email);

    try {
      await newsletterSubscribe.mutateAsync({ email: email.trim() });
      setEmail(""); // 成功后清空输入框
    } catch (error) {
      // 错误处理已在hook中完成
      console.error("邮件订阅失败:", error);
    }
  };

  const isLoading = newsletterSubscribe.isPending;

  return (
    <footer className="bg-card border-t border-border/40 pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img
                src="/images/logo.png"
                alt="FlexPay Logo"
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-foreground/70 mb-6 max-w-md">
              FlexPay is a comprehensive payment platform that helps businesses streamline their payment processes with secure, easy-to-use solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="h-5 w-5 text-foreground/70" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Twitter className="h-5 w-5 text-foreground/70" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-foreground/70" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-foreground/70" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground/70 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-foreground/70 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground/70 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/documentation" className="text-foreground/70 hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-foreground/70 hover:text-primary transition-colors">
                  Support Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-foreground/70 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/developers" className="text-foreground/70 hover:text-primary transition-colors">
                  Developers
                </Link>
              </li>
              <li>
                <Link to="/status" className="text-foreground/70 hover:text-primary transition-colors">
                  System Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-foreground/70 mb-4">
              Subscribe to our newsletter to get the latest updates.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <div className="flex flex-col space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/50" />
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="pl-10 bg-background border-border/40 focus:border-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isLoading || !email.trim()}
                  className="bg-gradient-primary hover:opacity-90 w-full"
                >
                  {isLoading ? (  
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Subscribe
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-border/40 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {currentYear} FlexPay. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-foreground/60 text-sm hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-foreground/60 text-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-foreground/60 text-sm hover:text-primary transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 