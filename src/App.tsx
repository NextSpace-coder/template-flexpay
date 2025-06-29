import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import NewsletterSignup from "@/components/forms/NewsletterSignup";
import ContactForm from "@/components/sections/contact/ContactForm";

function App() {
  const [activeTab, setActiveTab] = useState<"newsletter" | "contact">("newsletter");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">FlexPay Demo</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-sm border p-1">
            <button
              onClick={() => setActiveTab("newsletter")}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === "newsletter"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Newsletter Demo
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === "contact"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Contact Demo
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "newsletter" && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Newsletter Subscription Demo
              </h2>
              <p className="text-gray-600">
                Test the newsletter subscription functionality with Supabase integration
              </p>
            </div>
            <NewsletterSignup />
          </div>
        )}

        {activeTab === "contact" && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Contact Form Demo
              </h2>
              <p className="text-gray-600">
                Test the contact form functionality with Supabase integration
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        )}
      </main>

      {/* Toast Provider */}
      <Toaster />
    </div>
  );
}

export default App;