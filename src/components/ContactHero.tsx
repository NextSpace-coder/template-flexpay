import { FC } from "react";

const ContactHero: FC = () => {
  return (
    <div className="text-center py-16">
      <p className="text-purple-400 mb-4 text-sm uppercase tracking-wide">
        Contact Us
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
        Send us a <span className="text-purple-400">message</span>. We'd
        <br />
        love to chat
      </h1>
    </div>
  );
};

export default ContactHero; 