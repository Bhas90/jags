import React from "react";
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const advantages = [
  "Personalised Unit Selection Assistance",
  "Loan & Easy Financing Support",
  "Complete Registration & Documentation Help",
  "High Rental Yield & Resale Potential",
  "Assured Timelines & Expert Project Execution",
  "Dedicated Relationship Manager",
  "NRI Purchase Assistance",
  "Transparent Pricing & Process",
  "After-Sales to Possession Support",
];

const AdvantageSection = () => {
  const phoneNumber = "+918886661686";

  const whatsappMessage = encodeURIComponent(
    "Hi, I'm interested in Jagsons Pride by Jagsons Projects in Suraram. Please share more details."
  );

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section className="bg-gradient-to-r from-gray-50 via-white to-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* ---------- Heading ---------- */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-12">
          Why Homebuyers Choose <br />
          <span className="text-[#f97316]">Jagsons Pride</span>
        </h2>
        <hr className="border-t border-gray-300 w-20 mx-auto mb-12" />

        {/* ---------- Advantages Grid ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">

          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-white/70 backdrop-blur-md p-5 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <FaCheckCircle className="text-[#f97316] mt-1" />
              <p className="text-gray-800 text-sm sm:text-base font-medium">
                {item}
              </p>
            </div>
          ))}

        </div>

        {/* ---------- CTA Buttons ---------- */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">

          <button
            onClick={handleCallClick}
            className="bg-[#1c4280] hover:bg-[#163464] text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-md transition-all"
          >
            <FaPhoneAlt /> Call Us
          </button>

          <a
            href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-md transition-all"
          >
            <FaWhatsapp /> WhatsApp Us
          </a>

        </div>

        <p className="text-xs text-gray-500 mt-8">
          *Terms & Conditions apply
        </p>

      </div>
    </section>
  );
};

export default AdvantageSection;
