// components/ScrollToTopButton.js

import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-green text-white rounded-full shadow-lg hover:bg-green transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M12 2c-.38 0-.74.21-.92.55L5.24 12.62a1 1 0 0 0 .18 1.32c.41.33 1.03.28 1.36-.13L12 6.46l5.22 7.35c.33.41.95.46 1.36.13a1 1 0 0 0 .18-1.32l-5.84-10.07A1 1 0 0 0 12 2zM12 16a1 1 0 0 0-.92.55l-5.84 10.07a1 1 0 0 0 .18 1.32c.41.33 1.03.28 1.36-.13L12 17.54l5.22 7.35c.33.41.95.46 1.36.13a1 1 0 0 0 .18-1.32l-5.84-10.07A1 1 0 0 0 12 16z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
