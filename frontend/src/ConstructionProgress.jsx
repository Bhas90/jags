import React, { useEffect, useState } from "react";

/* ================= IMAGES ================= */

// OCT 2024
import oct1 from "./assets/construction/jagsons-pride-construction-update-oct-24-1.png";
import oct2 from "./assets/construction/jagsons-pride-construction-update-oct-24-2.png";
import oct3 from "./assets/construction/jagsons-pride-construction-update-oct-24-3.png";
import oct4 from "./assets/construction/jagsons-pride-construction-update-oct-24.png";

// DEC 2024 (temporary duplicates – replace later)
import dec1 from "./assets/construction/jagsons-pride-construction-update-oct-24-2.png";
import dec2 from "./assets/construction/jagsons-pride-construction-update-oct-24-3.png";
import dec3 from "./assets/construction/jagsons-pride-construction-update-oct-24.png";

// JAN 2025 (temporary duplicates – replace later)
import jan1 from "./assets/construction/jagsons-pride-construction-update-oct-24-2.png";
import jan2 from "./assets/construction/jagsons-pride-construction-update-oct-24-3.png";
import jan3 from "./assets/construction/jagsons-pride-construction-update-oct-24.png";

/* ================= DATA ================= */

const constructionUpdates = {
  "Oct 2024": [oct1, oct2, oct3, oct4],

  "Dec 2024": [dec1, dec2, dec3],

  "Jan 2025": [jan1, jan2, jan3],
};

/* ================= COMPONENT ================= */

const ConstructionProgress = () => {
  const months = Object.keys(constructionUpdates);

  const [activeMonth, setActiveMonth] = useState(months[0]);
  const images = constructionUpdates[activeMonth];

  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  /* ---------- Responsive Slides ---------- */
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);

    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  /* ---------- Reset when tab changes ---------- */
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeMonth]);

  /* ---------- Auto Slide ---------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  /* ---------- Visible Images ---------- */
  const visibleImages = [];

  for (let i = 0; i < visibleCount; i++) {
    visibleImages.push(images[(currentIndex + i) % images.length]);
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
      className="bg-white py-10 px-4 md:px-16 overflow-hidden relative"
    >
      {/* ---------- HEADING ---------- */}
      <div className="text-center mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6">
          Construction Updates <br />
          <span className="text-[#f97316]">Month by Month</span>
        </h2>
      </div>

      {/* ---------- MONTH TABS ---------- */}
      <div className="flex justify-center gap-4 mb-14 flex-wrap">
        {months.map((month) => (
          <button
            key={month}
            onClick={() => setActiveMonth(month)}
            className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition ${
              activeMonth === month
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            {month}
          </button>
        ))}
      </div>

      {/* ---------- SLIDER ---------- */}
      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-7xl overflow-hidden flex justify-center">
          <div className="flex transition-transform duration-700 ease-in-out">

            {visibleImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div
                  className="relative rounded-xl overflow-hidden border border-gray-200 shadow hover:shadow-lg transition cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image}
                    alt={`${activeMonth} update ${index + 1}`}
                    className="w-full h-auto object-cover"
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
          <div className="relative bg-white rounded-xl max-w-4xl w-full shadow-xl">

            <button
              onClick={closeLightbox}
              className="absolute top-3 right-4 text-3xl font-bold text-gray-700 hover:text-red-500"
            >
              ×
            </button>

            <div className="p-6 flex justify-center">
              <img
                src={selectedImage}
                alt="Construction enlarged"
                className="max-h-[80vh] object-contain rounded"
              />
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default ConstructionProgress;
