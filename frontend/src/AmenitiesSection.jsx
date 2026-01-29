import React, { useState, useEffect } from "react";

/* ================= IMAGES ================= */

import amenity1 from "./assets/badminton.webp";
import amenity2 from "./assets/basketball.webp";
import amenity3 from "./assets/gym.webp";
import amenity4 from "./assets/hall.webp";
import amenity5 from "./assets/play_area.webp";
import amenity6 from "./assets/jagsons-pride-rooftop-swimming-pool.jpg";
import amenity7 from "./assets/walking_area.webp";
import amenity8 from "./assets/spa.webp";
import amenity9 from "./assets/yoga.webp";
import amenity10 from "./assets/jagsons-pride-EV-charging.webp";
import amenity11 from "./assets/jagsons-pride-driver-lounge.jpg";
import amenity12 from "./assets/jagsons-pride-entrance-gate.jpg";
import amenity13 from "./assets/jagsons-pride-cricket-practice-net.webp";
import amenity14 from "./assets/jagsons-pride-guest-rooms.webp";

/* ================= DATA ================= */

const amenitiesData = [
  {
    id: "clubhouse",
    label: "CLUBHOUSE AMENITIES",
    images: [
      { img: amenity3, title: "Air Conditioned Gymnasium" },
      { img: amenity6, title: "Rooftop Swimming Pool" },
      { img: amenity4, title: "Multipurpose Banquet Hall" },
      { img: amenity9, title: "Meditation & Yoga Hall" },
      { img: amenity8, title: "Spa & Wellness Zone" },
      { img: amenity11, title: "Drivers Lounge" },
      { img: amenity14, title: "Guest Rooms" },
      { img: amenity12, title: "Premium Entrance Lobby" },
      { img: amenity10, title: "EV Charging Stations" },
    ],
  },
  {
    id: "outdoor",
    label: "OUTDOOR AMENITIES",
    images: [
      { img: amenity2, title: "Half Basketball Court" },
      { img: amenity13, title: "Cricket Practice Net" },
      { img: amenity1, title: "Badminton Court" },
      { img: amenity5, title: "Kids Play Area" },
      { img: amenity7, title: "Walking Track" },
      { img: amenity12, title: "Senior Citizen Plaza" },
    ],
  },
];

/* ================= COMPONENT ================= */

const AmenitiesSection = () => {
  const [selected, setSelected] = useState("clubhouse");
  const [currentIndex, setCurrentIndex] = useState(0);

  // SAFE active tab
  const activeTab =
    amenitiesData.find((a) => a.id === selected) || amenitiesData[0];

  /* ---------- Auto Slide ---------- */
  useEffect(() => {
    setCurrentIndex(0);

    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % activeTab.images.length
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [selected]);

  // SAFE visible images
  const visibleImages = activeTab.images
    .map((_, i) => activeTab.images[(currentIndex + i) % activeTab.images.length])
    .slice(0, Math.min(3, activeTab.images.length));

  return (
    <section className="bg-[#f7f7f6] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">

        {/* ---------- HEADING ---------- */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-12">
          Discover Thoughtfully Curated <br />
          <span className="text-[#f97316]">Lifestyle Amenities</span>
        </h2>

        {/* ---------- TABS ---------- */}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          {amenitiesData.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setSelected(id)}
              className={`px-8 py-3 rounded-full text-sm md:text-base font-medium transition-all ${
                selected === id
                  ? "bg-black text-white"
                  : "bg-white border border-gray-400 hover:bg-gray-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ---------- IMAGE SLIDER ---------- */}
        {activeTab.images.length > 0 && (
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">

            {visibleImages.map((item, index) => (
              <div
                key={index}
                className="relative w-full md:w-1/3 overflow-hidden rounded-xl shadow-lg group"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[240px] md:h-[300px] object-cover transition duration-700 group-hover:scale-105"
                />

                {/* ---------- TITLE OVERLAY ---------- */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/70 backdrop-blur px-4 py-3">
                  <p className="text-gray-900 font-medium tracking-wide text-center">
                    {item.title}
                  </p>
                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
};

export default AmenitiesSection;
