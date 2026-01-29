import React, { useEffect, useState } from "react";

import AdvantageSection from "./AdvantageSection";
import ProjectOverview from "./ProjectOverview";
import AmenitiesSection from "./AmenitiesSection";
import Banner from "./Banner";
import ConnectivitySection from "./ConnectivitySection";
import WhatsAppButton from "./WhatsAppButton";
import PopupForm from "./PopupForm";
import AttentionGrabberButton from "./AttentionGrabberButton";
import ConstructionProgress from "./ConstructionProgress";
import WhyChooseUs from "./WhyChooseUs";
import FaqSection from "./FaqSection";
import HeroBanner from "./HeroBanner";
import PlansSection from "./PlansSection";
import CustomerReviews from "./CustomerReviews";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    
      <HeroBanner />
      <AttentionGrabberButton/>
      <div id="project-overview">
        <h2 className="section-heading"></h2>
        <ProjectOverview />
      </div>
      <div id="why-ramky">
        <h2 className="section-heading"></h2>
        <WhyChooseUs />
      </div>
            <div id="amenities">
        <h2 className="section-heading"></h2>
        <AmenitiesSection />
      </div>
      
        <PlansSection/>
      <div id="construction-progress">
        <h2 className="section-heading"></h2>
        <ConstructionProgress />
      </div>
      <div id="NRI-support">
        <h2 className="section-heading"></h2>
        <AdvantageSection />
      </div>
      
      <div id="banner-section">
        <Banner />
      </div>
      <div id="connectivity">
        <h2 className="section-heading"></h2>
        <ConnectivitySection />
      </div>
      <CustomerReviews/>
      <div id="faq">
        <h2 className="section-heading"></h2>
        <FaqSection />
      </div>
      
      <WhatsAppButton />
      <PopupForm show={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default Home;
