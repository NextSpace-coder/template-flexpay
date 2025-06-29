import { FC } from "react";
import { Phone, MapPin } from "lucide-react";

const ContactInfo: FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white">
      <h3 className="text-lg font-semibold mb-2">
        Tell us how can we help out and we'll respond as soon as we can.
      </h3>
      
      <div className="space-y-6 mt-8">
        {/* Call Us Section */}
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center mb-3">
            <Phone className="w-6 h-6 mr-3" />
            <h4 className="text-lg font-semibold">Call Us Anytime</h4>
          </div>
          <p className="text-gray-300 text-sm mb-3">
            Excepteur sint occaecat cupidat non proident sunt in culpam qui
          </p>
          <p className="text-white font-mono">+00 12312312</p>
        </div>

        {/* Address Section */}
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center mb-3">
            <MapPin className="w-6 h-6 mr-3" />
            <h4 className="text-lg font-semibold">78/7 Covet garden, London</h4>
          </div>
          <p className="text-gray-300 text-sm mb-2">
            Covent Garden is a district in London
          </p>
          <p className="text-purple-300 text-sm">Headquarter</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 