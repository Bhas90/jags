import React, { useEffect, useState } from "react";

/* ================= IMAGES ================= */

// Phase II – Jan
import oct1 from "./assets/construction/construction-update-phase-2_jan_1.png";
import oct2 from "./assets/construction/construction-update-phase-2_jan_2.png";
import oct3 from "./assets/construction/construction-update-phase-2_jan_3.png";

// Phase II – Dec
import dec1 from "./assets/construction/jagsons-pride-construction-update-oct-24-2.png";
import dec2 from "./assets/construction/jagsons-pride-construction-update-oct-24-3.png";
import dec3 from "./assets/construction/jagsons-pride-construction-update-oct-24.png";

// Phase I – Jan
import jan1 from "./assets/construction/construction-update-phase-1_jan_1.png";
import jan2 from "./assets/construction/construction-update-phase-1_jan_2.png";
import jan3 from "./assets/construction/construction-update-phase-1_jan_2.png";
import jan4 from "./assets/construction/construction-update-phase-1_jan_3.png";
import jan5 from "./assets/construction/construction-update-phase-1_jan_4.png";
import jan6 from "./assets/construction/construction-update-phase-1_jan_5.png";
import jan7 from "./assets/construction/construction-update-phase-1_jan_6.png";

/* ================= DATA ================= */

const constructionUpdates = {
  "Phase I": {
    "Jan 2025": [jan1, jan2, jan3, jan4, jan5, jan6, jan7],
  },

  "Phase II": {
    "Dec 2024": [dec1, dec2, dec3],
    "Jan 2026": [oct1, oct2, oct3],
  },
};

/* ================= COMPONENT ================= */

const ConstructionProgress = () => {
  const phases = Object.keys(constructionUpdates);

  const [activePhase, setActivePhase] = useState(phases[0]);

  const months = Object.keys(constructionUpdates[activePhase]);
  const [activeMonth, setActiveMonth] = useState(months[0]);

  const images =
    constructionUpdates[activePhase][activeMonth] || [];

  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  /* ---------- Responsive ---------- */
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);

    return () =>
      window.removeEventListener("resize", updateVisible);
  }, []);

  /* ---------- Reset ---------- */
  useEffect(() => {
    const firstMonth =
      Object.keys(constructionUpdates[activePhase])[0];
    setActiveMonth(firstMonth);
    setCurrentIndex(0);
  }, [activePhase]);

  useEffect(() => setCurrentIndex(0), [activeMonth]);

  /* ---------- Auto Slide ---------- */
  useEffect(() => {
    if (!images.length) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images]);

  /* ---------- Visible ---------- */
  const visibleImages = [];

  for (let i = 0; i < visibleCount; i++) {
    visibleImages.push(
      images[(currentIndex + i) % images.length]
    );
  }

  const openLightbox = (img) => {
    setSelectedImage(img);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <section
      id="construction-progress"
      className="bg-gradient-to-b from-white to-gray-50 py-24 px-4 md:px-16"
    >
      {/* ---------- Heading ---------- */}
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6">
          Construction Updates <br />
          <span className="text-[#f97316]">
            Phase & Month Wise
          </span>
        </h2>
      </div>

      {/* ---------- PHASE SELECTOR ---------- */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-white/70 backdrop-blur border rounded-full p-1 shadow-lg">
          {phases.map((phase) => (
            <button
              key={phase}
              onClick={() => setActivePhase(phase)}
              className={`px-8 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                activePhase === phase
                  ? "bg-[#002954] text-white shadow"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {phase}
            </button>
          ))}
        </div>
      </div>

      {/* ---------- MONTH TABS ---------- */}
      <div className="flex justify-center gap-8 mb-14 flex-wrap border-b">
        {months.map((month) => (
          <button
            key={month}
            onClick={() => setActiveMonth(month)}
            className={`pb-3 text-sm md:text-base font-medium relative ${
              activeMonth === month
                ? "text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#f97316]"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {month}
          </button>
        ))}
      </div>

      {/* ---------- SLIDER ---------- */}
      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-[1600px] overflow-hidden flex justify-center overflow-hidden">
          <div className="flex transition-transform duration-700 ease-in-out">
            {visibleImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div
                  className="group rounded-2xl overflow-hidden border bg-white shadow hover:shadow-xl transition cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image}
                    alt={`${activePhase} ${activeMonth} update ${
                      index + 1
                    }`}
                    className="w-full h-[360px] object-cover group-hover:scale-[1.03] transition"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- LIGHTBOX ---------- */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative rounded-2xl max-w-2xl w-full shadow-xl">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-3 text-3xl font-bold text-red-700 hover:text-red-500"
            >
              ×
            </button>

            <div className="p-8 flex justify-center">
              <img
                src={selectedImage}
                alt="Construction enlarged"
                className="max-h-[80vh] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ConstructionProgress;
