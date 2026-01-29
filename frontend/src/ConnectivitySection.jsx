import React, { useState } from "react";
import {
  GraduationCap,
  Hospital,
  Network,
  MapPin,
  Plus,
  Minus,
} from "lucide-react";

import map from "./assets/jagsons-pride-location.png";

/* ================= LOCATION DATA ================= */

const connectivityItems = [
  {
    title: "Education Zones",
    short: "Top schools & engineering colleges in the vicinity.",
    icon: <GraduationCap className="w-5 h-5 text-[#1c4280]" />,
    details: [
      "Oakridge International School",
      "Creek Planet School",
      "St. Martin’s Engineering College",
      "Vignan Jyothi Engineering College",
      "Delhi Public School (Bachupally)",
    ],
  },
  {
    title: "Healthcare Access",
    short: "Major hospitals and cardiac care close by.",
    icon: <Hospital className="w-5 h-5 text-[#1c4280]" />,
    details: [
      "Usha Mullapudi Cardiac Centre",
      "Hospitals in Jeedimetla",
      "Multi-speciality hospitals at Kukatpally",
    ],
  },
  {
    title: "Employment & IT Corridors",
    short: "Smooth access to IT parks and industrial zones.",
    icon: <Network className="w-5 h-5 text-[#1c4280]" />,
    details: [
      "Hitech City",
      "Gachibowli",
      "Jeedimetla Industrial Area",
      "Cyber Towers",
    ],
  },
  {
    title: "Road & ORR Connectivity",
    short: "Direct access to ORR exits and arterial roads.",
    icon: <MapPin className="w-5 h-5 text-[#1c4280]" />,
    details: [
      "ORR Exit No. 4A – Mallampet",
      "ORR Exit No. 5 – Gandimaisamma",
      "Suraram Road",
      "Bachupally Road",
      "Kukatpally Road",
    ],
  },
  {
    title: "Surrounding Neighbourhoods",
    short: "Key residential & commercial hubs nearby.",
    icon: <MapPin className="w-5 h-5 text-[#1c4280]" />,
    details: [
      "Bachupally",
      "Pragathi Nagar",
      "Kompally",
      "Kukatpally",
      "Miyapur",
      "Quthbullapur",
    ],
  },
];

/* ================= COMPONENT ================= */

const ConnectivitySection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-16 px-4 md:px-16 lg:px-24">

      {/* ---------- Heading ---------- */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-12">
          Seamlessly Connected for <br />
          <span className="text-[#f97316]">Everyday Convenience</span>
        </h2>
      </div>

      {/* ---------- Two Column Layout ---------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* ---------- LEFT : ACCORDION ROWS ---------- */}
        <div className="space-y-4">

          {connectivityItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border rounded-xl bg-white shadow-sm hover:shadow-md transition"
              >
                {/* Row Header */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-start justify-between gap-4 p-5 text-left"
                >
                  <div className="flex gap-4">
                    {item.icon}
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {item.short}
                      </p>
                    </div>
                  </div>

                  {isOpen ? (
                    <Minus className="w-5 h-5 mt-1 text-gray-600" />
                  ) : (
                    <Plus className="w-5 h-5 mt-1 text-gray-600" />
                  )}
                </button>

                {/* Expanded Content */}
                {isOpen && (
                  <div className="px-6 pb-5">
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                      {item.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}

        </div>

        {/* ---------- RIGHT : MAP ---------- */}
        <div className="relative rounded-xl overflow-hidden shadow-xl border">
          <img
            src={map}
            alt="Jagsons Pride Suraram location map showing Bachupally, Kompally, Kukatpally, Miyapur and ORR exits"
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default ConnectivitySection;
