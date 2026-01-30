import React, { useState } from "react";
import {
  GraduationCap,
  Hospital,
  Network,
  MapPin,
  Building2,
  Plus,
  Minus,
} from "lucide-react";

import map from "./assets/jagsons-pride-location.png";

/* ================= LOCATION DATA ================= */

const connectivityItems = [
  {
    title: "Schools",
    short: "Leading schools located within easy reach.",
    icon: <GraduationCap className="w-5 h-5 text-[#1c4280]" />,
    details: [
      "Oakridge International School – 5 km",
      "Creek Planet School – 5 km",
      "Delhi Public School – 4 km",
      "Unicent School – 4 km",
      "CMR International School – 500 m",
      "Iris Florets – 1 km",
    ],
  },
  {
    title: "Colleges & Universities",
    short: "Reputed institutions for higher education nearby.",
    icon: <Building2 className="w-5 h-5 text-[#1c4280]" />,
    details: [
      "Malla Reddy Institute of Medical Sciences – 2 km",
      "Mahindra University – 7 km",
      "VNR Vignan Jyothi – 6 km",
      "Mamatha Academy of Medical Sciences – 9 km",
      "JNTU – 13 km",
    ],
  },
  {
    title: "Healthcare",
    short: "Hospitals and emergency care close to the community.",
    icon: <Hospital className="w-5 h-5 text-[#1c4280]" />,
    details: [
      "Usha Mullapudi Cardiac Centre – 4.5 km",
      "Nalla Reddy Hospital – 1.5 km",
      "MAMS Hospital – 9 km",
    ],
  },
  {
    title: "Employment & IT Corridor",
    short: "Quick commute to major business and industrial zones.",
    icon: <Network className="w-5 h-5 text-[#1c4280]" />,
    details: [
      "Hitech City – 17 km",
      "IDA Jeedimetla – 5 km",
    ],
  },
  {
    title: "Road & Connectivity",
    short: "Well-connected to ORR exits and city arterial roads.",
    icon: <MapPin className="w-5 h-5 text-[#1c4280]" />,
    details: [
      "ORR Exit 4A – 7 km",
      "Miyapur – 13 km",
      "Balanagar – 11 km",
      "Rajiv Gandhi International Airport – 45 km",
    ],
  },
];

/* ================= COMPONENT ================= */

const ConnectivitySection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="connectivity"
      className="bg-white py-16 px-4 md:px-16 lg:px-24"
    >
      {/* ---------- Heading ---------- */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-12">
          Seamlessly Connected for <br />
          <span className="text-[#f97316]">Everyday Convenience</span>
        </h2>
      </div>

      {/* ---------- Two Column Layout ---------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* ---------- LEFT : ACCORDION ---------- */}
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

                {/* Expanded */}
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
        <div className="relative rounded-2xl overflow-hidden shadow-xl border">
          <img
            src={map}
            alt="Jagsons Pride Suraram connectivity map showing schools, hospitals, ORR exits and IT hubs"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectivitySection;
