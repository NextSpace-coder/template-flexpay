import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { useNewsletterSubscribe } from "@/hooks/useNewsletter";

const NewsletterSignup = () => {
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
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                required
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !email.trim()}
                className="bg-black text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup; 