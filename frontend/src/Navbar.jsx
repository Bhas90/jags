import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import mlogo from "./assets/jagsons_pride_logo.png";

const sections = [
  { id: "project-overview", label: "Overview" },
  { id: "amenities", label: "Amenities" },
  { id: "floor-plans", label: "Master & Floor Plans" },
  { id: "construction-progress", label: "Construction Updates" },
  { id: "NRI-support", label: "NRI Support" },
  { id: "connectivity", label: "Connectivity" },
  { id: "faqs", label: "FAQs" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between py-2 px-4 md:px-12 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      {/* ---------- LOGO ---------- */}
      <div className="flex items-center">
        <a href="/">
          <img
            src={mlogo}
            alt="Jagsons Pride Logo"
            className="max-w-[130px] md:max-w-[170px]"
          />
        </a>
      </div>

      {/* ---------- MOBILE ICON ---------- */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-2xl"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ---------- DESKTOP MENU ---------- */}
      <nav className="hidden md:flex items-center space-x-4 text-black">

        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="px-3 py-2 rounded hover:text-[#f97316] transition"
          >
            {label}
          </button>
        ))}

        {/* CALL CTA */}
        <a
          href="tel:+918886661686"
          className="blinking-button ml-3 px-5 py-2 rounded-full shadow-md text-black bg-gradient-to-r from-[#fde000] to-[#eb5f07]"
        >
          Call +91 888 666 1686
        </a>
      </nav>

      {/* ---------- MOBILE MENU ---------- */}
      {isMobileMenuOpen && (
        <div className="fixed top-[72px] left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center gap-4 py-6 z-40">

          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-lg font-medium"
            >
              {label}
            </button>
          ))}

          <a
            href="tel:+918886661686"
            className="blinking-button px-6 py-2 rounded-full shadow-md text-white bg-gradient-to-r from-[#fde000] to-[#eb5f07]"
          >
            Call +91 888 666 1686
          </a>
        </div>
      )}

      {/* ---------- BLINKING CTA ---------- */}
      <style>{`
        .blinking-button {
          animation: blinker 1.3s linear infinite;
        }
        @keyframes blinker {
          50% {
            opacity: 0.55;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
