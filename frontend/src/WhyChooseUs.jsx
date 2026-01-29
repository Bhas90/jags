import React from "react";
import {
  MapPin,
  Compass,
  Building2,
  Star,
  Battery,
  Users,
  Sun,
  Coffee,
  Trees,
  Wind,
} from "lucide-react";

import towerImg from "./assets/jagsons-pride-land-scape.jpg";

/* ================= FEATURES ================= */

const features = [
  {
    icon: <Building2 className="w-6 h-6 text-[#f97316]" />,
    text: "Premium 2 & 3 BHK residences with contemporary architecture",
  },
  {
    icon: <Sun className="w-6 h-6 text-[#f97316]" />,
    text: "Large landscaped open spaces and pedestrian-friendly layout",
  },
  {
    icon: <Battery className="w-6 h-6 text-[#f97316]" />,
    text: "100% power backup for common areas and essentials",
  },
  {
    icon: <MapPin className="w-6 h-6 text-[#f97316]" />,
    text: "Strategically located at Suraram with easy access to ORR & key hubs",
  },
  {
    icon: <Compass className="w-6 h-6 text-[#f97316]" />,
    text: "Vastu-compliant East & West facing homes",
  },
  {
    icon: <Star className="w-6 h-6 text-[#f97316]" />,
    text: "Grand entrance lobby and thoughtfully curated lifestyle amenities",
  },
  
  /* ✅ NEW POINTS */
  {
    icon: <Trees className="w-6 h-6 text-[#f97316]" />,
    text: "Located next to a reserve forest for serene, green surroundings",
  },
  {
    icon: <Wind className="w-6 h-6 text-[#f97316]" />,
    text: "Pollution-free locality offering healthier everyday living",
  },
];

/* ================= COMPONENT ================= */

const WhyChooseUs = () => {
  return (
    <section
      id="why-jagsons-pride"
      className="py-16 bg-gradient-to-b from-white to-gray-50 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* ---------- LEFT : IMAGE WITH OVERLAY ---------- */}
        <div className="relative group overflow-hidden rounded-3xl shadow-lg">
          <img
            src={towerImg}
            alt="Jagsons Pride Suraram premium apartments by Jagsons Projects"
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-black/80 flex flex-col justify-center px-8 sm:px-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Why <span className="text-[#f97316]">Jagsons Pride</span>
            </h2>

            <div className="w-20 h-1 bg-[#f97316] mt-3 rounded-full"></div>

            <p className="text-gray-200 mt-3 text-base sm:text-lg max-w-md">
              Thoughtfully crafted homes in Suraram that blend comfort,
              connectivity and modern lifestyle.
            </p>
          </div>
        </div>

        {/* ---------- RIGHT : FEATURES GRID ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex-shrink-0">{item.icon}</div>

              <p className="text-gray-800 text-sm sm:text-base font-medium leading-snug">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
