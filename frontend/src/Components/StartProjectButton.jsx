// File: StartProjectButton.jsx
import React from "react";

const StartProjectButton = () => {
  const bookingUrl =
    "https://studiosofprismatic.notion.site/289e543b1ce780c98c4ff1367767f58f?pvs=105";

  return (
    <button
      onClick={() => window.open(bookingUrl, "_blank")}
      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:opacity-90 transition-all duration-300"
    >
      Start Project
    </button>
  );
};

export default StartProjectButton;
