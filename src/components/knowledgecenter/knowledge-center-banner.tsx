"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

import {
  FaBook,
  FaFileAlt,
  FaLightbulb,
  FaPlay,
  FaVideo,
} from "react-icons/fa";

import CounterOne from "../counter/counter-one";
import Pagination from "@/components/ui/pagination";
import usePagination from "@/hooks/use-pagination";
import successstories from "@/data/knowledge-center-data";
import KnowledgeFilterSidebar from "@/app/(shop)/shop-grid/_components/knowledgecenterfilter/knowledge-filter-sidebar";
// import ShopFilterSidebar from "@/app/(shop)/shop-grid/_components/filter/shop-filter-sidebar";
import { FaSearch } from "react-icons/fa";

type IProps = {
  title?: string;
  subtitle?: string;
  // admission?: boolean;
  showVerticalLine?: boolean;
  showHorizontalLine?: boolean;
};

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

export default function KnowledgeCenterBanner({
  title = "Hello, how can we help?",
  subtitle = "Learn more about how Erith can transform and help your company.",
  // admission,
  showVerticalLine = false,
  showHorizontalLine = false,
}: IProps) {
  const columnStyle = {
    borderRight: showVerticalLine ? "none" : "1px solid #ccc",
  };
  const [filters, setFilters] = useState({
    category: "",
    contentType: "",
    industry: "",
    sortBy: "",
  });
  const horizontalStyle = {
    borderBottom: showHorizontalLine ? "none" : "1px solid #ccc",
  };

  // ✅ SINGLE category (null = show all)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // const [selectedTorque, setSelectedTorque] = useState<string[]>([]);

  // ✅ Filter logic
  const filteredData = useMemo(() => {
    if (!selectedCategory) return successstories;
    return successstories.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // ✅ Pagination uses filtered data
  const { currentItems, handlePageClick, pageCount } = usePagination(
    filteredData,
    9,
  );

  // ✅ Icon mapper
  const renderIcon = (icon: string) => {
    switch (icon) {
      case "bulb":
        return <FaLightbulb size={14} />;
      case "video":
        return <FaVideo size={14} />;
      case "play":
        return <FaPlay size={14} />;
      case "book":
        return <FaBook size={14} />;
      case "file":
        return <FaFileAlt size={14} />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* HERO SECTION */}
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
                    style={{ fontSize: "35px", lineHeight: "1.2",fontWeight:"5px" }}
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

      {/* KNOWLEDGE CENTER */}
      <section className="tp-shop-grid-area pt-30">
        <div className="container">
          {/* Header + Filters */}
          <div className="row align-items-center mb-3">
            {/* LEFT SIDE */}
            <div className="col-lg-9 col-md-8">
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <select
                  className="form-select"
                  style={{
                    maxWidth: "300px",
                    height: "35px",
                    fontSize: "12px",
                  }}
                  value={filters.category}
                  onChange={(e) =>
                    setFilters({ ...filters, category: e.target.value })
                  }
                >
                  <option value="">Select a Language</option>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Portuguese">Portuguese</option>
                  <option value="Italian">Italian</option>
                  <option value="Russian">Russian</option>
                  <option value="Chinese">Chinese (Mandarin)</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Arabic">Arabic</option>
                </select>

                <select
                  className="form-select"
                  style={{
                    maxWidth: "300px",
                    height: "35px",
                    fontSize: "12px",
                  }}
                  value={filters.contentType}
                  onChange={(e) =>
                    setFilters({ ...filters, contentType: e.target.value })
                  }
                >
                  <option value="">Select a Product Type</option>
                  <option value="All">All</option>
                  <option value="Accessory">Accessory</option>
                  <option value="Actuator">Actuator</option>
                  <option value="Ball Check">Ball Check</option>
                  <option value="Ball Valve">Ball Valve</option>
                  <option value="Butterfly Valve">Butterfly Valve</option>
                  <option value="Check Valve">Check Valve</option>
                  <option value="Knife Gate Valve">Knife Gate Valve</option>
                </select>

                <select
                  className="form-select"
                  style={{
                    maxWidth: "250px",
                    height: "35px",
                    fontSize: "12px",
                  }}
                  value={filters.industry}
                  onChange={(e) =>
                    setFilters({ ...filters, industry: e.target.value })
                  }
                >
                  <option value="">Select an Industry</option>
                  <option value="All">All</option>
                  <option value="Alternative Fuels">Alternative Fuels</option>
                  <option value="Chemical & Petrochemical">
                    Chemical & Petrochemical
                  </option>
                  <option value="Food & Beverage">Food & Beverage</option>
                  <option value="General Industry">General Industry</option>
                  <option value="HVAC">HVAC</option>
                  <option value="Industrial Gas">Industrial Gas</option>
                  <option value="Marine & Shipbuilding">
                    Marine & Shipbuilding
                  </option>
                  <option value="Mining">Mining</option>
                  <option value="Oil & Gas">Oil & Gas</option>
                  <option value="Pharma & Biotech">Pharma & Biotech</option>
                  <option value="Power">Power</option>
                  <option value="Pulp & Paper">Pulp & Paper</option>
                  <option value="Semiconductor">Semiconductor</option>
                  <option value="Sugar & Ethanol">Sugar & Ethanol</option>
                  <option value="Water & Wastewater">Water & Wastewater</option>
                </select>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-3 col-md-4 text-lg-end mt-2 mt-lg-0">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "8px",
                }}
              >
                <p style={{ margin: 0, fontSize: "12px", fontWeight: 500 }}>
                  Show
                </p>

                <select
                  className="form-select"
                  style={{
                    maxWidth: "250px",
                    height: "35px",
                    fontSize: "12px",
                  }}
                  value={filters.sortBy}
                  onChange={(e) =>
                    setFilters({ ...filters, sortBy: e.target.value })
                  }
                >
                  <option value="">Sort By</option>
                  <option value="Asc">Asc</option>
                  <option value="Desc">Desc</option>
                  <option value="Relevance">Relevance</option>
                </select>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {/* Applied Filters */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              {Object.entries(filters).map(
                ([key, value]) =>
                  value && (
                    <span
                      key={key}
                      style={{
                        backgroundColor: "#1d3a72",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        height: "25px",
                      }}
                    >
                      {value}
                      <span
                        onClick={() =>
                          setFilters((prev) => ({ ...prev, [key]: "" }))
                        }
                        style={{
                          cursor: "pointer",
                          fontWeight: "bold",
                          fontSize: "12px",
                          lineHeight: 1,
                        }}
                      >
                        ✕
                      </span>
                    </span>
                  ),
              )}
            </div>

            {/* Reset All (Right aligned) */}
            {Object.values(filters).some(Boolean) && (
              <button
                onClick={() =>
                  setFilters({
                    category: "",
                    contentType: "",
                    industry: "",
                    sortBy: "",
                  })
                }
                style={{
                  marginLeft: "auto",
                  background: "transparent",
                  border: "none",
                  color: "#1d3a72",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Clear all Filters
              </button>
            )}
          </div>

          {/* Title */}
          {/* <p style={{ fontSize: 38, paddingTop: "10px" }}>Knowledge Center</p> */}
          {/* 
          <p style={{ fontSize: 38, paddingTop: "30px" }}>Knowledge Center</p> */}
          <hr />

          <div className="row">
            {/* SIDEBAR */}
            <div className="col-lg-3" style={columnStyle}>
              <KnowledgeFilterSidebar
                onKnowledgeCenterFilterCategory={setSelectedCategory}
              />
            </div>

            {/* CONTENT */}
            <div className="col-lg-9 mt-35">
              {/* Active filter */}
              {/* <p style={horizontalStyle}>
                {selectedCategory && (
                  <>
                    <span style={{ color: "#1d3a72" }}>Filter By: </span>
                    {selectedCategory}
                  </>
                )}
              </p> */}

              {/* applicationGuides */}
              <div className="container" style={{ marginBottom: "20px" }}>
                <div className="row">
                  {/* Application Guides Cards */}
                  {currentItems.slice(0, 2).map((story) => (
                    <div key={story.id} className="col-lg-6 col-md-3 mb-3">
                      <div
                        style={{
                          position: "relative",
                          borderRadius: "12px",
                          overflow: "hidden",
                          height: "180px",
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
                          {/* Top Content */}
                          <div>
                            <span
                              style={{
                                backgroundColor: "#1d3a72",
                                color: "white",
                                padding: "4px 14px",
                                borderRadius: "10px",
                                fontSize: "13px",
                                fontWeight: "600",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              {/* {renderIcon(story.icon)} */}
                              {story.category}
                            </span>
                            <h3
                              style={{
                                color: "white",
                                fontSize: "15px",
                                fontWeight: "400",
                                lineHeight: "1.2",
                                marginTop: "12px",

                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {story.title}
                            </h3>
                          </div>

                          {/* Bottom Content */}
                          <div>
                            {/* <button
                              style={{
                                backgroundColor: "grey",
                                color: "#fff",
                                borderRadius: "5px",
                                padding: "1px 5px",
                                fontSize: "12px",
                                fontWeight: "400",
                                cursor: "pointer",
                              }}
                            >
                              Learn More
                            </button> */}
                            <Link
                              className="btn rectangle btn-light  mt-xs-10 btn-sm radius animation"
                              href="#"
                              style={{
                                // padding: "8px",
                                fontSize: "13px",
                                fontWeight: "600",
                                padding: "4px 14px",
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
              

              {/* Heading */}
              <h1 style={{ fontSize: "15px" }}>
                {selectedCategory
                  ? `All ${selectedCategory}`
                  : "All Knowledge Resources"}
              </h1>

              {/* DATA LIST */}
              {currentItems.map((item) => (
                <div key={item.id} className="col-xl-12 col-lg-12 col-md-6">
                  <div className="ks-card mb-2">
                    <div className="ks-row">
                      <div className="ks-icon">
                        {renderIcon(item.icon ?? "")}
                      </div>

                      <div className="ks-content">
                        <h4 className="ks-card-category">
                          <Link href="#">{item.category}</Link>
                        </h4>
                        <p className="ks-card-title">{item.title}</p>
                      </div>

                      <div className="ks-date">{item.date}</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* PAGINATION */}
              {pageCount > 1 && (
                <div className="row">
                  <div className="col-lg-12">
                    <div className="tp-event-inner-pagination pb-10">
                      <div className="tp-dashboard-pagination pt-20">
                        <div className="tp-pagination">
                          <Pagination
                            handlePageClick={handlePageClick}
                            pageCount={pageCount}
                            isCenter
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <h1 style={horizontalStyle}></h1>
      </section>
    </>
  );
}
