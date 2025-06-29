import { FC } from "react";
import { Navbar, Footer } from "../components/layout";
import { ContactHero, ContactForm, ContactInfo } from "../components/sections/contact";
import { CTA, Container } from "../components/shared";

const ContactPage: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="bg-black">
        <Container withGradient>
          <ContactHero />
          
          {/* Contact Form and Info Grid */}
          <div className="grid lg:grid-cols-2 gap-8 pb-20">
            <ContactForm />
            <ContactInfo />
          </div>
        </Container>
        
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage; 