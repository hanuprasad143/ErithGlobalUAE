"use client";
// import Link from "next/link";
import React from "react";
// import { EffectFade } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { SwiperOptions } from "swiper/types";
// import { RightArrow } from "../svg";
// import HeroSection from "@/components/slider/Heroslider";

const heroSliderData = [
  {
    id: 1,
    subtitle:
      "From control to isolation, Erith's valve solution deliver trusted performance worldwide.",
    title: "Engineered for Excellence",
    video: "/assets/videos/erith_company.mp4",
  },
  {
    id: 2,
    subtitle: "Be a part of our history",
    title: "Education to Create the Future.",
    video: "/assets/videos/hero-video2.mp4",
  },
  {
    id: 3,
    subtitle: "Be a part of our history",
    title: "Discipline to Create the Future.",
    video: "/assets/videos/hero-video3.mp4",
  },
];

// const slider_options: SwiperOptions = {
//   slidesPerView: 1,
//   effect: "fade",
//   autoplay: {
//     delay: 3500,
//   },
//   pagination: {
//     el: ".tp-program-dot",
//     clickable: true,
//   },
// };

export default function HeroAreaOne() {
  return (
    <section
      className="tp-breadcrumb__area pt-160  p-relative z-index-1 fix"
      style={{ height: "500px" }}
    >
      {/* <div
        className="tp-breadcrumb__bg overlay"
        style={{ backgroundImage: "url(/assets/img/live/ABOUT-ERITH.jpg)" }}
      ></div> */}
      <div className="tp-breadcrumb__bg overlay">
        <video autoPlay loop muted playsInline width={"100%"}>
          <source src="https://www.logojech.in/prasad/erith_video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="tp-breadcrumb__content text-center">
              <div className="tp-breadcrumb__list inner-after">
                <h3
                  className="tp-breadcrumb__title color"
                  style={{ fontSize: "60px", marginBottom: "5px" }}
                >
                  {heroSliderData[0].title}
                </h3>
                <div className="container text-center">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                      <p
                        style={{
                          fontSize: "25px",
                          fontWeight: 400,
                          color: "#fff",
                          lineHeight: "1.5",
                        }}
                      >
                        {heroSliderData[0].subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
