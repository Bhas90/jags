import React, { useState } from "react";

/* ================= FAQ DATA ================= */

const faqs = [
  {
    question: "What is the total land area of Jagsons Pride, Suraram?",
    answer:
      "Jagsons Pride is spread across a thoughtfully planned 4.75-acre gated community, designed with landscaped open spaces, internal roads, and lifestyle amenities for peaceful everyday living."
  },
  {
    question: "How many units and towers are there in the project?",
    answer:
      "The project comprises around 420 well-designed residential apartments across multiple blocks, offering an ideal balance of community living and privacy."
  },
  {
    question: "What unit configurations are available at Jagsons Pride?",
    answer:
      "Jagsons Pride offers spacious 2 BHK and 3 BHK apartments with smart layouts, excellent ventilation, and Vastu-compliant East and West-facing options."
  },
  {
    question: "What are the major location advantages of Suraram?",
    answer:
      "Located in Suraram near Bachupally, the project enjoys smooth connectivity to ORR exits, Kukatpally, Miyapur, IT corridors, and major employment hubs across West Hyderabad."
  },
  {
    question: "What lifestyle amenities are provided in the project?",
    answer:
      "Residents can enjoy a rooftop swimming pool, air-conditioned gymnasium, banquet hall, yoga & meditation spaces, kids play areas, walking tracks, sports courts, EV charging points, and landscaped gardens."
  },

  /* ---------- Hidden initially ---------- */

  {
    question: "Are schools and hospitals close to Jagsons Pride?",
    answer:
      "Yes, reputed international schools, engineering colleges, and multi-speciality hospitals are located within a short driving distance, making daily life convenient for families."
  },
  {
    question: "Is Jagsons Pride suitable for investment purposes?",
    answer:
      "With its growing location, strong infrastructure development, proximity to IT zones, and quality construction, Jagsons Pride holds excellent potential for rental demand and long-term appreciation."
  },
  {
    question: "Is the project RERA registered?",
    answer:
      "Yes, Jagsons Pride is a RERA-registered residential development, ensuring transparency, approved plans, and timely delivery as per regulatory guidelines."
  }
];

/* ================= COMPONENT ================= */

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  const toggleOpen = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section id="faqs"
  className="py-10 px-4 md:px-16 bg-white scroll-mt-[90px] md:scroll-mt-[110px]"
>

      <div className="max-w-7xl mx-auto">

        {/* ---------- HEADING ---------- */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-12 text-center">
          Have Questions About <br />
          <span className="text-[#f97316]">Jagsons Pride?</span>
        </h2>

        {/* ---------- FAQ ITEMS ---------- */}
        <div className="divide-y divide-gray-200">

          {visibleFaqs.map((faq, idx) => (
            <div key={idx} className="py-5">

              <button
                className="w-full flex justify-between items-center text-left text-base md:text-lg font-semibold text-gray-800 hover:text-[#f97316] transition focus:outline-none"
                onClick={() => toggleOpen(idx)}
              >
                <span>{faq.question}</span>
                <span className="ml-3 text-[#f97316] text-xl">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* ---------- LOAD MORE BUTTON ---------- */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:bg-gray-100 transition"
          >
            {showAll ? "Show Less" : "Load More FAQs"}
          </button>
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
