import { useState } from "react";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Submitting newsletter subscription:", email);
      
      const { data, error } = await supabase
        .from("b0b237ee-54c0-4581-9b81-d9e7327dfe6c_newsletter_subscriptions")
        .insert([{ email }])
        .select();

      if (error) {
        console.error("Newsletter subscription error:", error);
        if (error.code === "23505") {
          toast({
            title: "Already subscribed",
            description: "This email is already subscribed to our newsletter.",
            variant: "default",
          });
        } else {
          toast({
            title: "Subscription failed",
            description: "Unable to subscribe. Please try again.",
            variant: "destructive",
          });
        }
      } else {
        console.log("Newsletter subscription successful:", data);
        toast({
          title: "Successfully subscribed!",
          description: "Thank you for subscribing to our newsletter.",
          variant: "default",
        });
        setEmail("");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div className="lg:flex-1 mb-8 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Get exclusive content right in your inbox.
            </h2>
            <p className="text-pink-100 text-lg">
              No spam. Only the good stuff.
            </p>
          </div>
          
          <div className="lg:flex-1 lg:max-w-md lg:ml-12">
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email..."
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                required
                disabled={isSubmitting}
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;