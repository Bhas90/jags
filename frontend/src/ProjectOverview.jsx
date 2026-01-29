import React from "react";
import {
  Home,
  Layers,
  Ruler,
  Building2,
  ParkingSquare,
  ShieldCheck,
} from "lucide-react";

/* ================= DATA ================= */

const projectStats = [
  {
    icon: <Ruler className="w-7 h-7 text-[#1c4280]" />,
    title: "4.75 Acres",
    subtitle: "Gated Community",
  },
  {
    icon: <Building2 className="w-7 h-7 text-[#1c4280]" />,
    title: "8 Towers, 420 Flats",
    subtitle: "Residential Blocks",
  },
  {
    icon: <ParkingSquare className="w-7 h-7 text-[#1c4280]" />,
    title: "2 Basements",
    subtitle: "Parking Levels",
  },
  {
    icon: <Home className="w-7 h-7 text-[#1c4280]" />,
    title: "2 & 3 BHK",
    subtitle: "Luxury Apartments",
  },
  {
    icon: <Layers className="w-7 h-7 text-[#1c4280]" />,
    title: "G + 5 Floors",
    subtitle: "Structure",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#1c4280]" />,
    title: "Higher UDS",
    subtitle: "Ownership Advantage",
  },
];

/* ================= COMPONENT ================= */

const ProjectOverview = () => {
  return (
    <section
      id="project-overview"
      className="w-full bg-[#fafafa] border-y"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-4 py-8">

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">

          {projectStats.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center text-center px-4 py-3"
            >
              {/* Icon */}
              <div className="mb-3">{item.icon}</div>

              {/* Main Text */}
              <h3 className="text-base md:text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Sub Text */}
              <p className="text-sm text-gray-500 mt-1">
                {item.subtitle}
              </p>

              {/* Divider (Desktop only) */}
              {index !== projectStats.length - 1 && (
                <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-gray-300" />
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
