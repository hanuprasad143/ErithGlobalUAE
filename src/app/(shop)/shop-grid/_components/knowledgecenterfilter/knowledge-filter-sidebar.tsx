"use client";
import { useMemo, useState, useEffect } from "react";
import React from "react";
import KnowledgeCenterFilterCategory from "../filter/knowledgefiltercategory";
import successstories from "@/data/knowledge-center-data";
import {
  FaBook,
  FaFileAlt,
  FaLightbulb,
  FaPlay,
  FaVideo,
  FaFlag,
} from "react-icons/fa";

type Props = {
  onKnowledgeCenterFilterCategory: (category: string | null) => void;
};

export default function KnowledgeFilterSidebar({
  onKnowledgeCenterFilterCategory,
}: Props) {
  /* ----------------------------------
     UNIQUE CATEGORIES
  ---------------------------------- */
  const categories = useMemo(
    () => Array.from(new Set(successstories.map((s) => s.category))),
    [],
  );

  const [categoryIndex, setCategoryIndex] = useState(0);
  const activeCategory = categories[categoryIndex];

  /* ----------------------------------
     ONE STORY PER CATEGORY
  ---------------------------------- */
  const currentStory = useMemo(() => {
    return successstories.find((item) => item.category === activeCategory);
  }, [activeCategory]);

  /* ----------------------------------
     ICON MAPPER (stored file style)
  ---------------------------------- */
  const renderIcon = (icon?: string) => {
    switch (icon) {
      case "bulb":
        return <FaLightbulb size={16} />;
      case "video":
        return <FaVideo size={16} />;
      case "play":
        return <FaPlay size={16} />;
      case "book":
        return <FaBook size={16} />;
      case "file":
      default:
        return <FaFileAlt size={16} />;
    }
  };

  /* ----------------------------------
     CATEGORY NAVIGATION
  ---------------------------------- */
  const handleNext = () => {
    setCategoryIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCategoryIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  /* ----------------------------------
     AUTO CHANGE CATEGORY (5s)
  ---------------------------------- */
  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [categories.length]);

  if (!currentStory) return null;

  return (
    <div className="tp-shop-grid-sidebar">
      <div className="container">
        <div className="row">
          {/* HEADER */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <FaFlag size={12} color="#fecb00" />
              <h3 style={{ fontSize: "12px", margin: 0 }}>Featured</h3>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <span
                style={{ cursor: "pointer", fontSize: "18px" }}
                onClick={handlePrev}
              >
                ←
              </span>
              <span
                style={{ cursor: "pointer", fontSize: "18px" }}
                onClick={handleNext}
              >
                →
              </span>
            </div>
          </div>

          {/* SINGLE CARD */}
          <div className="col-lg-12 mb-3">
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                height: "180px",
                backgroundImage: `url(${currentStory.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div style={{ marginTop: "8px" }}>
              <span
                style={{
                  color: "#fecb00",
                  fontSize: "15px",
                  fontWeight: "600",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {renderIcon(currentStory.icon)}
                <div style={{ color: "#292929" }}>{currentStory.category}</div>
              </span>

              <h3
                style={{
                  color: "#292929",
                  fontSize: "13px",
                  fontWeight: "700",
                  lineHeight: "1.3",
                  marginTop: "8px",
                }}
              >
                {currentStory.title}
              </h3>

              <p
                className="tp-shop-widget-title"
                style={{
                  fontSize: "12px",
                  lineHeight: "1.2",
                }}
              >
                {currentStory.description?.substring(0, 100)}...
                <a
                  className="event-read-more text-decoration-none"
                  href="#"
                  style={{
                    // color: "#fecb00",
                    textDecoration: "none",
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "10px",
                  }}
                >
                  Learn More →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER */}
      <div className="tp-shop-widget">
        <h3 className="tp-shop-widget-title">Filter By</h3>
        <KnowledgeCenterFilterCategory
          onChange={onKnowledgeCenterFilterCategory}
        />
      </div>
    </div>
  );
}
