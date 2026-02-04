import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import rohitImg from "./assets/reviews/rmen.png";
import ananyaImg from "./assets/reviews/rwomen.png";
import sureshImg from "./assets/reviews/rmen.png";
import meghaImg from "./assets/reviews/rwomen.png";
import arjunImg from "./assets/reviews/rmen.png";


/* ================= DUMMY DATA ================= */

const reviews = [
  {
    name: "Rohit Sharma",
    role: "Software Engineer",
    image: rohitImg,
    text:
      "Jagsons Pride impressed us with the planning and open spaces. The sales team was transparent and helpful throughout the process."
  },
  {
    name: "Ananya Reddy",
    role: "House Wife",
    image: ananyaImg,
    text:
      "The layout and amenities feel thoughtfully designed. We loved the peaceful surroundings and connectivity to Bachupally."
  },
  {
    name: "Suresh Kumar",
    role: "Business Owner",
    image: sureshImg,
    text:
      "Strong construction quality and excellent communication from the team. Definitely a project worth considering in this area."
  },
  {
    name: "Vaishnavi",
    role: "HR Manager",
    image: meghaImg,
    text:
      "What stood out for me was the clubhouse facilities and open areas. Feels ideal for families."
  },
  {
    name: "Arjun Verma",
    role: "Assistant Professor",
    image: arjunImg,
    text:
      "Great value proposition for Suraram. The floor plans are practical and Vastu compliant."
  },
];


/* ================= COMPONENT ================= */

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  /* ---------- RESPONSIVE COUNT ---------- */
  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;

      if (w < 640) setVisibleCount(1);       // Mobile
      else if (w < 1024) setVisibleCount(2); // Tablet
      else setVisibleCount(3);               // Desktop
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  /* ---------- AUTO SLIDE ---------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + reviews.length) % reviews.length
    );
  };

  const visibleReviews = [];

  for (let i = 0; i < visibleCount; i++) {
    visibleReviews.push(
      reviews[(currentIndex + i) % reviews.length]
    );
  }

  return (
    <section
      id="customer-reviews"
      className="bg-[#f7f7f6] py-20 px-4 md:px-16"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* ---------- HEADING ---------- */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-12">
          What Our Customers Say <br />
          <span className="text-[#f97316]">About Jagsons Pride</span>
        </h2>

        {/* ---------- SLIDER ---------- */}
        <div className="relative">

          {/* LEFT */}
          <button
            onClick={prev}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-1.5 sm:p-2 hover:bg-gray-100 z-10"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>


          {/* GRID */}
          <div
            className={`grid gap-6 ${
              visibleCount === 1
                ? "grid-cols-1"
                : visibleCount === 2
                ? "grid-cols-2"
                : "grid-cols-3"
            }`}
          >
            {visibleReviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-left flex flex-col"
              >
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  “{review.text}”
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border"
                  />

                  <div>
                    <h4 className="text-gray-900 font-semibold">
                      {review.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <button
            onClick={next}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-1.5 sm:p-2 hover:bg-gray-100 z-10"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
