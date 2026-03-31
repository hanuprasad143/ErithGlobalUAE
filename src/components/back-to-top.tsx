"use client";
import React, { useEffect } from "react";

export default function BackToTop() {
  useEffect(() => {
    const result = document.querySelector(".back-to-top-wrapper");

    function handleScroll() {
      if (!result) return;

      // Distance from bottom
      const scrollFromBottom =
        document.documentElement.scrollHeight -
        window.innerHeight -
        window.scrollY;

      if (scrollFromBottom < 200) {
        result.classList.add("back-to-top-btn-show");
      } else {
        result.classList.remove("back-to-top-btn-show");
      }
    }

    function handleClick() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.addEventListener("scroll", handleScroll);
    if (result) {
      result.addEventListener("click", handleClick);
    }

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (result) {
        result.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div className="back-to-top-wrapper">
      <button id="back_to_top" type="button" color="black" style={{fontSize:"12px"}}>
        Back To Top
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 6L6 1L1 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6V11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
