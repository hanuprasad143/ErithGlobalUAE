"use client";

// import { RightArrowTwo } from "@/components/svg";
// import Link from "next/link";
// import HeroSection from "@/components/slider/Heroslider";
import {
  FaBook,
  FaDatabase,
  FaFileInvoice,
  // FaItunesNote,
  FaLightbulb,
  FaTv,
  FaVideo,
  FaFileAlt,
  // FaFilePdf,
} from "react-icons/fa";
import CounterOne from "../counter/counter-one";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
// import { LocationFour, HomeSvg } from "../svg";
import Link from "next/link";

const contactInfoData = [
  {
    icon: <FaBook color="#fecb00 " />,
    title: "Product Brochures",
    href: "/knowledgecenter",
  },
  {
    icon: <FaLightbulb color="#fecb00 " />,
    title: "Success Stories",
    href: "/knowledgecenter",
  },
  {
    icon: <FaFileInvoice color="#fecb00 " />,
    title: "IOM Manuals",
    href: "/knowledgecenter",
  },
  {
    icon: <FaFileInvoice color="#fecb00 " />,
    title: "Application Guides",
    href: "/knowledgecenter",
  },
  {
    icon: <FaTv color="#fecb00 " />,
    title: "Webinars",
    href: "/knowledgecenter",
  },
  {
    icon: <FaFileInvoice color="#fecb00 " />,
    title: "Sales Data Sheet",
    href: "/knowledgecenter",
  },
  {
    icon: <FaVideo color="#fecb00 " />,
    title: "Videos",
    href: "/knowledgecenter",
  },
  {
    icon: <FaDatabase color="#fecb00" />,
    title: "Software",
    href: "/knowledgecenter",
  },
];

const recentDocuments = [
  {
    id: 1,
    type: "Technical Sales Manual",
    title: "Series 70 Electric Actuators",
    language: "English",
  },
  {
    id: 2,
    type: "IOM Manual",
    title: "Linear Position Sensor Series KCA",
    language: "English",
  },
  {
    id: 3,
    type: "Sales Data Sheet",
    title: "Knife Gate Valve Pneumatic Actuator Series KCS/KCT",
    language: "English",
  },
  {
    id: 4,
    type: "Sales Data Sheet",
    title: "Series 5Cs Valve Status Monitor",
    language: "English",
  },
  {
    id: 5,
    type: "IOM Manual",
    title: "Valve Status Monitor Series 5CS",
    language: "English",
  },
  {
    id: 6,
    type: "IOM Manual",
    title: "Valve Status Monitors Series 50 OM-EN-US",
    language: "English",
  },
];

const navData = [
  {
    id: "home",
    title: "Positioners Series 6P",
    ariaControls: "home",
    isActive: true,
  },
  {
    id: "profile",
    title: "Retaining Cable Kit For Hand Wheel Chai..",
    ariaControls: "profile",
    isActive: true,
  },
  {
    id: "contact",
    title: "Quarter-Turn Valve Solutions for Reduci..",
    ariaControls: "contact",
    isActive: true,
  },
];

const successStories = [
  {
    id: 1,
    title:
      "Safe, Reliable, & Ergonomic Solutions for District Heating & Steam Systems",
    image: "/assets/img/resources/pic1.jpg",
  },
  {
    id: 2,
    title:
      "Isolation and Control Valve Solution Enables Accurate Flow Measurement to Provide Public Drinking Water",
    image: "/assets/img/resources/pic1.jpg",
  },
  {
    id: 3,
    title:
      "S19 Rotary Control Valve Excels in Gas Metering Custody Transfer Application",
    image: "/assets/img/resources/pic1.jpg",
  },
];

const ApplicationGuides = [
  {
    id: 1,
    title:
      "Safe, Reliable, & Ergonomic Solutions for District Heating & Steam Systems",
    image: "/assets/img/resources/pic2.jpg",
  },
  {
    id: 2,
    title:
      "Isolation and Control Valve Solution Enables Accurate Flow Measurement to Provide Public Drinking Water",
    image: "/assets/img/resources/pic2.jpg",
  },
  {
    id: 3,
    title:
      "S19 Rotary Control Valve Excels in Gas Metering Custody Transfer Application",
    image: "/assets/img/resources/pic2.jpg",
  },
];

type IProps = {
  title?: string;
  subtitle?: string;
  // admission?: boolean;
};

export default function ResourceBanner({
  title = "Hello, how can we help?",
  subtitle = "Learn more about how Erith can transform and help your company.",
  // admission,
}: IProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <section
        className="tp-breadcrumb__area pt-100 pb-50 p-relative z-index-1 fix"
        style={{ height: "400px" }}
      >
        {/* Background Image */}
        <div
          className="tp-breadcrumb__bg overlay"
          style={{ backgroundImage: "url(/assets/img/live/ABOUT-ERITH.jpg)" }}
        ></div>

        {/* Content Section */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="tp-breadcrumb__content text-center">
                <div className="tp-breadcrumb__list inner-after">
                  <h2
                    className="tp-breadcrumb__title color mb-10"
                    style={{
                      fontSize: "35px",
                      lineHeight: "1.2",
                      fontWeight: "5px",
                    }}
                  >
                    {title}
                  </h2>

                  <p style={{ fontSize: "15px", color: "white" }}>{subtitle}</p>

                  <div
                    className="tp-leadership-search p-relative"
                    style={{
                      position: "relative",
                      width: "700px",
                      margin: "0 auto",
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      {/* Search Icon */}
                      <FaSearch
                        style={{
                          position: "absolute",
                          left: "15px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#888",
                          fontSize: "16px",
                          pointerEvents: "none", // 👈 prevents blocking typing
                        }}
                      />

                      {/* Input */}
                      <input
                        type="text"
                        placeholder="Search..."
                        style={{
                          width: "100%",
                          height: "45px",
                          paddingLeft: "45px", // 👈 space for icon
                          paddingRight: "15px",
                          borderRadius: "6px",
                        }}
                      />
                    </div>
                  </div>

                  {/* {admission && (
                    <div className="mt-10">
                      <span className="white fw-bold">Admission</span>
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-campus-student-list d-flex justify-content-center  mt-5">
          <div className="d-flex align-items-center gap-1 flex-wrap">
            <p
              style={{
                fontSize: "18px",
                margin: 0,
                color: "white",
                marginRight: "5px",
              }}
            >
              Featured Topics:
            </p>

            {/* <ul className="nav nav-tabs" id="myTab" role="tablist"> */}
            {navData.map((nav) => (
              <li key={nav.id} className="nav-item" role="presentation">
                {/* <button
                    className={`nav-link ${nav.isActive ? "active" : ""}`}
                    style={{ fontSize: "12px", color: "white" }}
                    id={`${nav.id}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${nav.id}`}
                    type="button"
                    role="tab"
                    aria-controls={nav.ariaControls}
                    aria-selected={nav.isActive}
                    tabIndex={nav.isActive ? 0 : -1}
                  >
                    {nav.title}
                  </button> */}
                <Link
                  className="btn rectangle btn-light  mt-xs-10 btn-sm radius animation"
                  href="/contact"
                  style={{
                    // padding: "8px",
                    fontSize: "10px",
                    // fontWeight: "400",
                    padding: "4px 14px",
                    borderRadius: "10px",
                    marginRight: "6px",
                    marginLeft: "0px",
                  }}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
            {/* </ul> */}
          </div>
        </div>
      </section>

      <CounterOne />

      {/* Main Content Container */}
      <div className="container" style={{ marginBottom: "20px" }}>
        <div className="row align-center">
          <div className="col-xl-12 col-lg-12">
            {/* Recommended Categories Section */}
            <div className="row" style={{ marginTop: "30px" }}>
              <h2
                style={{
                  fontSize: "25px",
                  color: "#292929",
                  marginBottom: "30px",
                }}
              >
                Recommended Categories
              </h2>
              {contactInfoData.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-6 mb-10">
                  <Link
                    href={item.href}
                    className="tp-contact-info-item w-100 d-flex justify-content-between align-items-center"
                    style={{
                      padding: "5px 4px",
                      minHeight: "48px",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      backgroundColor:
                        hoveredIndex === index ? "#f5f5f5" : "transparent",
                      textDecoration: "none",
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className="tp-contact-info d-flex align-items-center"
                      style={{ gap: "20px", padding: "20px 30px" }} // ⬅ reduced
                    >
                      <span style={{ fontSize: "15px" }}>{item.icon}</span>
                      <h4
                        className="tp-contact-info-title mb-0"
                        style={{
                          color: "#292929",
                          fontSize: "15px", // ⬅ reduced
                        }}
                      >
                        {item.title}
                      </h4>
                    </div>

                    {/* Right Arrow */}
                    <span
                      style={{
                        fontSize: "16px", // ⬅ reduced
                        color: "#fecb00",
                        opacity: hoveredIndex === index ? 1 : 0,
                        transform:
                          hoveredIndex === index
                            ? "translateX(4px)"
                            : "translateX(0)",
                        transition: "all 0.3s ease",
                        marginRight: "10px",
                      }}
                    >
                      →
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Recent Documents Section */}
            <div className="row" style={{ marginTop: "20px" }}>
              {/* 🔍 SEARCH BAR */}
              {/* <div className="col-12 mb-4">
                <input
                  type="text"
                  placeholder="Search documents..."
                  style={{
                    width: "420px",
                    padding: "10px 14px",
                    fontSize: "14px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                  }}
                />
              </div> */}

              {/* HEADER */}
              <div className="col-12">
                <div className="d-flex justify-content-between align-items-center mb-30">
                  <h2
                    style={{
                      fontSize: "25px",
                      color: "#292929",
                      marginBottom: "0",
                    }}
                  >
                    Recent Documents
                  </h2>
                  <a
                    href="#"
                    style={{
                      color: "#292929",
                      textDecoration: "none",
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    View All Documents →
                  </a>
                </div>
              </div>

              {/* DOCUMENT CARDS */}
              {recentDocuments.map((doc) => (
                <div key={doc.id} className="col-lg-4 col-md-6 mb-30">
                  <div
                    style={{
                      border: "1px solid #e5e5e5",
                      borderRadius: "12px",
                      padding: "24px",
                      height: "100%",
                      backgroundColor: "white",
                      transition: "box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 6px 18px rgba(0,0,0,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div className="d-flex align-items-start mb-3">
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          // backgroundColor: "#fee",
                          borderRadius: "6px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "16px",
                          flexShrink: 0,
                        }}
                      >
                        {/* <FaFilePdf
                          style={{
                            color: "#1d3a72",
                            fontSize: "20px",
                          }}
                        /> */}
                        <svg
                          // class="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="#fecb00"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"
                          />
                        </svg>
                      </div>

                      <div style={{ flex: 1 }}>
                        <h5
                          style={{
                            color: "#292929",
                            fontSize: "15px",
                            fontWeight: "600",
                            marginBottom: "6px",
                          }}
                        >
                          {doc.type}
                        </h5>
                        <p
                          style={{
                            color: "#333",
                            fontSize: "13px",
                            marginBottom: "0",
                            lineHeight: "1.5",
                          }}
                        >
                          {doc.title}
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-4">
                      <button
                        style={{
                          backgroundColor: "#1d3a72",
                          color: "#fff", // black text
                          padding: "8px 18px",
                          borderRadius: "10px",
                          textDecoration: "none",
                          fontWeight: "600",
                          display: "inline-block",
                          marginLeft: "50px",
                          fontSize: "13px",
                        }}
                      >
                        Download
                      </button>

                      <span
                        style={{
                          color: "#666",
                          fontSize: "15px",
                          marginRight: "70px",
                          marginTop: "5px",
                        }}
                      >
                        {doc.language}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-30">
              <h2
                style={{
                  fontSize: "25px",
                  color: "#292929",
                  marginBottom: "0",
                }}
              >
                Success Stories
              </h2>
              <a
                href="#"
                style={{
                  color: "#292929",
                  textDecoration: "none",
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                View All Success Stories →
              </a>
            </div>
          </div>

          {/* Success Story Cards */}
          {successStories.map((story) => (
            <div key={story.id} className="col-lg-4 col-md-6 mb-30">
              <div
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  height: "230px",
                  backgroundImage: `url(${story.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0, 0, 0, 0.6)",
                    padding: "24px 30px 30px 30px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Top Content - Badge and Title */}
                  <div>
                    <span
                      style={{
                        backgroundColor: "#1d3a72",
                        color: "#fff", // black text
                        padding: "4px 14px",
                        borderRadius: "10px",
                        textDecoration: "none",
                        fontWeight: "600",
                        display: "inline-block",
                        fontSize: "13px",
                      }}
                    >
                      <FaFileAlt size={14} /> Case Study
                    </span>
                    <h3
                      style={{
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "1.2",
                        marginTop: "12px",
                        marginBottom: "0",
                      }}
                    >
                      {story.title}
                    </h3>
                  </div>

                  {/* Bottom Content - Button */}
                  <div>
                    <Link
                      className="btn rectangle btn-light  mt-xs-10 btn-sm radius animation"
                      href="/knowledgecenter"
                      style={{
                        // padding: "8px",
                        fontSize: "13px",
                        fontWeight: "600",
                        padding: "6px 16px",
                        borderRadius: "10px",
                      }}
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* applicationGuides */}
      <div className="container" style={{ marginBottom: "80px" }}>
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-30">
              <h2
                style={{
                  fontSize: "25px",
                  color: "#292929",
                  marginBottom: "0",
                }}
              >
                Application Guides
              </h2>
              <a
                href="#"
                style={{
                  color: "#292929",
                  textDecoration: "none",
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                View All Application Guides →
              </a>
            </div>
          </div>

          {/*Application Guides Cards */}
          {ApplicationGuides.map((story) => (
            <div key={story.id} className="col-lg-4 col-md-3 mb-3">
              <div
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  height: "230px",
                  backgroundImage: `url(${story.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0, 0, 0, 0.6)",
                    padding: "24px 30px 30px 30px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Top Content - Badge and Title */}
                  <div>
                    <span
                      style={{
                        backgroundColor: "#1d3a72",
                        color: "#fff", // black text
                        padding: "4px 14px",
                        borderRadius: "10px",
                        textDecoration: "none",
                        fontWeight: "600",
                        display: "inline-block",
                        fontSize: "13px",
                      }}
                    >
                      <FaFileAlt size={14} /> Application Guide
                    </span>
                    <h3
                      style={{
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "1.2",
                        marginTop: "12px",
                        marginBottom: "0",
                      }}
                    >
                      {story.title}
                    </h3>
                  </div>

                  {/* Bottom Content - Button */}
                  <div>
                    {/* <button
                      style={{
                        backgroundColor: "white",
                        color: "#1d3a72",
                        border: "none",
                        borderRadius: "20px",
                        padding: "8px 22px",
                        fontSize: "14px",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#f1f1f1";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "white";
                      }}
                    ></button> */}
                    <Link
                      className="btn rectangle btn-light  mt-xs-10 btn-sm radius animation"
                      href="/knowledgecenter"
                      style={{
                        // padding: "8px",
                        fontSize: "13px",
                        fontWeight: "600",
                        padding: "6px 16px",
                        borderRadius: "10px",
                      }}
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
