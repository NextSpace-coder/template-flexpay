import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactForm: FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Submitting contact form:", formData);
      
      const { data, error } = await supabase
        .from("b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions")
        .insert([{
          full_name: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }])
        .select();

      if (error) {
        console.error("Contact form submission error:", error);
        toast({
          title: "Submission failed",
          description: "Unable to submit your message. Please try again.",
          variant: "destructive",
        });
      } else {
        console.log("Contact form submission successful:", data);
        toast({
          title: "Message sent!",
          description: "Thank you for your message. We'll get back to you soon.",
          variant: "default",
        });
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
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
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Let's talk</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="fullName" className="text-gray-700 font-medium">
            Full Name
          </Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Name..."
            value={formData.fullName}
            onChange={handleInputChange}
            className="mt-1"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-gray-700 font-medium">
            Email address*
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="info@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <Label htmlFor="subject" className="text-gray-700 font-medium">
            Subject*
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder="Create a subject..."
            value={formData.subject}
            onChange={handleInputChange}
            className="mt-1"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-gray-700 font-medium">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            className="mt-1 min-h-[120px]"
            disabled={isSubmitting}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;