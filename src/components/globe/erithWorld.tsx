"use client";
import React from "react";
import ErithContactInfoArea from "./erith-contact-info";
import RotatingEarth from "./globeanimated";

const PricingPage = () => {
  return (
    <section
      className="pricing-wrapper pricing-1 style-2 section-padding pt-0 mr-20"
      style={{
        marginTop: "-120px",
        paddingTop: 0,
        position: "relative",
      }}
    >
      {/* Decorative Shapes */}

      {/* Globe */}
      <div className="shape">
        <div className="light-shape" />

        {/* Globe */}
        <div
          className="hidden lg:block"
          style={{
            position: "absolute",
            right: "-15px",
            top: "40%",
            transform: "translateY(-50%)",
            zIndex: 0,
            pointerEvents: "none",
            width: "800px",
            maxWidth: "800px",
          }}
        >
          <RotatingEarth width={800} height={600} />
        </div>
      </div>

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row justify-content-start">
          <div className="col-xl-8 col-lg-10 ml-10">
            <div
              className="tp-section text-start wow fadeInUp"
              data-wow-delay=".4s"
            >
              <h5
                className="tp-section-3-subtitle"
                style={{ fontSize: "18px", color: "#292929" }}
              >
                Global Company, Regional Focus, Local Presence
              </h5>
            </div>
          </div>

          <ErithContactInfoArea />
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
