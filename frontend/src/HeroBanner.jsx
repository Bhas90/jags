import React from "react";

/* ================= IMAGES ================= */

import heroDesktop from "./assets/jagsons-pride-banner.png";
import heroMobile from "./assets/jagsons-pride-m-banner.png";

/* ================= COMPONENT ================= */

const HeroBanner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black mt-[60px]">

      {/* ---------- FIXED HEIGHT SYSTEM ---------- */}
      <div
        className="
          relative w-full
          h-[660px]
          sm:h-[1100px]
          md:h-[980px]
          lg:h-[520px]
        "
      >

        {/* ---------- Mobile Image ---------- */}
        <img
          src={heroMobile}
          alt="Premium gated community apartments in Hyderabad – mobile banner"
          className="block md:hidden w-full h-full object-cover object-center"
          loading="eager"
        />

        {/* ---------- Desktop Image ---------- */}
        <img
          src={heroDesktop}
          alt="Luxury residential apartments with modern amenities in Hyderabad"
          className="hidden md:block w-full h-full object-cover object-center"
          loading="eager"
        />

      </div>
    </section>
  );
};

export default HeroBanner;
