import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";
import Home from "./Home";

const AppContent = () => {
  const location = useLocation();
  const hideNavbarOn = ["/privacy-policy", "/terms-conditions"];
  const shouldHideNavbar = hideNavbarOn.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppContent;
