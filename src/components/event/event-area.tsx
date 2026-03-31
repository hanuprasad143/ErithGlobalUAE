"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RightArrowThree } from "../svg";
import { university_classic_event_data } from "@/data/event-data";
import HoverImgItem from "./hover-img-item";

export default function EventArea() {
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const visibleCount = 3;
  const totalItems = university_classic_event_data.length;

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => {
        const next = prev + visibleCount;
        return next >= totalItems ? 0 : next;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [totalItems, isHovered]);

  const visibleItems = university_classic_event_data.slice(
    startIndex,
    startIndex + visibleCount,
  );

  return (
    <section className="event-area pl-15 pb-50">
      <div className="container">
        {/* Header */}
        <div className="row align-items-end mb-15">
          <div className="col-xl-5 col-md-8">
            <h3 className="tp-section-2-title">Our Solutions</h3>
          </div>

          <div className="col-xl-7 col-md-4 text-md-end">
            <Link
              href="/contact"
              style={{
                backgroundColor: "#1d3a72",
                color: "#fff", // black text
                padding: "8px 18px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
                display: "inline-block",
                fontSize: "12px",
              }}
            >
              See more Solutions
            </Link>
          </div>
        </div>

        {/* Animated List */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              initial={{ opacity: 0, x: -80 }} // start from LEFT
              animate={{ opacity: 1, x: 0 }} // center
              exit={{ opacity: 0, x: 80 }} // exit to RIGHT
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="tp-event-wrap"
            >
              {visibleItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="tp-event-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.5,
                  }}
                  whileHover="hover"
                >
                  <div className="row align-items-center">
                    {/* Image */}
                    <div className="col-md-2">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={400}
                        style={{ borderRadius: "8px" }}
                      />
                    </div>

                    {/* Content */}
                    <div className="col-md-9">
                      <motion.h3
                        style={{ fontSize: "25px", cursor: "pointer" }}
                        variants={{
                          hover: { color: "#fecb00", x: 5 },
                        }}
                        transition={{ duration: 0.25 }}
                      >
                        <HoverImgItem title={item.title} />
                      </motion.h3>

                      <span>{item.location}</span>
                    </div>

                    {/* Arrow */}
                    <div className="col-md-1 text-lg-center">
                      <motion.div
                        variants={{
                          hover: {
                            x: 8,
                            color: "#fecb00",
                          },
                        }}
                        transition={{ duration: 0.25 }}
                      >
                        <RightArrowThree />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
