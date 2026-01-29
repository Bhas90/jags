import React, { useState, useEffect } from "react";

/* ================= IMAGES ================= */

import MasterPlanImg from "./assets/jagsons-pride-master-plan.png";

import PlanA from "./assets/3d-east-facing-1185.png";
import PlanB from "./assets/3d-east-facing-1285.png";
import PlanC from "./assets/3d-east-facing-1600.png";
import PlanD from "./assets/3d-west-facing-1185.png";
import PlanE from "./assets/3d-west-facing-1280.png";
import PlanF from "./assets/3d-west-facing-1600.png";

import PlanG from "./assets/jagsons-pride-block-a.png";
import PlanH from "./assets/jagsons-pride-block-b.png";
import PlanI from "./assets/jagsons-pride-block-c-d.png";
import PlanJ from "./assets/jagsons-pride-block-e.png";
import PlanK from "./assets/jagsons-pride-block-f.png";
import PlanL from "./assets/jagsons-pride-block-g-h.png";

/* ================= COMPONENT ================= */

const PlansSection = () => {
  const [activeTab, setActiveTab] = useState("Master Plan");

  const [lightbox, setLightbox] = useState({
    open: false,
    index: 0,
  });

  const tabs = ["Master Plan", "Towers", "2 BHK", "3 BHK"];

  const planImages = {
    "Master Plan": [{ img: MasterPlanImg, label: "Master Plan" }],

    Towers: [
      { img: PlanG, label: "Block A" },
      { img: PlanH, label: "Block B" },
      { img: PlanI, label: "Block C & D" },
      { img: PlanJ, label: "Block E" },
      { img: PlanK, label: "Block F" },
      { img: PlanL, label: "Block G & H" },
    ],

    "2 BHK": [
      { img: PlanB, label: "East Facing – 1280 SFT" },
      { img: PlanA, label: "East Facing – 1185 SFT" },
      { img: PlanE, label: "West Facing – 1280 SFT" },
      { img: PlanD, label: "West Facing – 1185 SFT" },
    ],

    "3 BHK": [
      { img: PlanC, label: "East Facing – 1600 SFT" },
      { img: PlanF, label: "West Facing – 1600 SFT" },
    ],
  };

  const masterPlanContent = [
    {
      title: "4.75 Acres of Thoughtful Planning",
      desc: "Spacious landscaped zones, circulation roads and lifestyle amenities arranged for peaceful living.",
    },
    {
      title: "Gated Community Living",
      desc: "Secure entry points, internal roads and pedestrian-friendly podium levels.",
    },
    {
      title: "Holistic Lifestyle Layout",
      desc: "Homes, recreation and green pockets seamlessly integrated.",
    },
  ];

  const currentImages = planImages[activeTab];

  /* ---------- Keyboard Support ---------- */
  useEffect(() => {
    if (!lightbox.open) return;

    const handler = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox.open, currentImages]);

  const openLightbox = (index) => {
    setLightbox({ open: true, index });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, index: 0 });
  };

  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % currentImages.length,
    }));
  };

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index:
        (prev.index - 1 + currentImages.length) %
        currentImages.length,
    }));
  };

  return (
    <section id="floor-plans" className="bg-white py-24 px-4 md:px-16">

      {/* ---------- SECTION HEADING ---------- */}
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-12">
          Explore the Master Planning of <br />
          <span className="text-[#f97316]">Jagsons Pride</span>
        </h2>
      </div>

      {/* ---------- TABS ---------- */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition ${
              activeTab === tab
                ? "bg-[#002954] text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ---------- MASTER PLAN VIEW ---------- */}
      {activeTab === "Master Plan" && (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src={MasterPlanImg}
            alt="Jagsons Pride master plan layout Suraram"
            onClick={() => openLightbox(0)}
            className="cursor-pointer w-full h-[420px] md:h-[500px] object-contain rounded-2xl shadow-lg"
          />

          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              Master Plan Highlights
            </h3>

            {masterPlanContent.map((item, idx) => (
              <div key={idx}>
                <h4 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------- GRID FOR TOWERS & FLOOR PLANS ---------- */}
      {activeTab !== "Master Plan" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {currentImages.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="cursor-pointer group border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-[260px] object-contain bg-white"
              />

              <div className="py-3 text-center text-sm font-medium text-gray-800">
                {item.label}
              </div>
            </div>
          ))}

        </div>
      )}

      {/* ---------- LIGHTBOX ---------- */}
      {lightbox.open && (
        <div className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center px-4">

          <div className="relative max-w-6xl w-full flex items-center">

            {/* LEFT */}
            {currentImages.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-0 md:-left-14 text-white text-4xl px-3"
              >
                ‹
              </button>
            )}

            {/* IMAGE */}
            <img
              src={currentImages[lightbox.index].img}
              alt={currentImages[lightbox.index].label}
              className="w-full max-h-[85vh] object-contain rounded-lg"
            />

            {/* RIGHT */}
            {currentImages.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-0 md:-right-14 text-white text-4xl px-3"
              >
                ›
              </button>
            )}

            {/* CLOSE */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white text-3xl"
            >
              ✕
            </button>

          </div>

          {/* Label */}
          <p className="absolute bottom-6 text-white text-sm">
            {currentImages[lightbox.index].label}
          </p>
        </div>
      )}

    </section>
  );
};

export default PlansSection;
