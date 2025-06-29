import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactForm: FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
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
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm; 