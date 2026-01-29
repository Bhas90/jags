import React, { useState } from "react";

const StudyAbroad = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-100 py-10 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        About <span style={{ color: '#f97316' }}>Developer</span>
        </h2>

        {/* Main Content */}
        <p className="text-gray-700 mt-4">
        <strong> One of Hyderabad’s</strong> top developers, Ramky Estates & Farms Ltd bags the prestigious BRAND LEADERSHIP citation by Telangana Brand Leadership Awards 2022 on the 04th November 2022 at Vivanta Hyderabad, Begumpet.<br></br><br></br>
        Endorsed by the World Marketing Congress, CMO Global, and the World Federation of Marketing Professionals, the award seeks to identify and celebrate outstanding brand-building and marketing by organizations.
        </p>

        
      </div>
    </div>
  );
};

export default StudyAbroad;
