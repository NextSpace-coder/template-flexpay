import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useContactSubmit } from "@/hooks/useContact";

const ContactForm: FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactSubmit = useContactSubmit();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("正在提交联系表单:", formData);
    
    try {
      await contactSubmit.mutateAsync({
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });
      
      // 成功后重置表单
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      // 错误处理已在hook中完成
      console.error("联系表单提交失败:", error);
    }
  };

  const isLoading = contactSubmit.isPending;
  const isFormValid = formData.fullName.trim() && formData.email.trim() && formData.subject.trim();

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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
          />
        </div>

        <Button 
          type="submit" 
          disabled={isLoading || !isFormValid}
          className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              发送中...
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm; 