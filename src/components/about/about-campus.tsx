"use client";
import { useState } from "react";
import Image from "next/image";
import { Location } from "../svg";
import Link from "next/link";

// ==============================
// NAV ITEMS
// ==============================
const navItems = [
  {
    id: "home-tab",
    target: "#home",
    label: "Abu Dhabi - BR",
    ariaControls: "home",
  },
  {
    id: "profile-tab",
    target: "#profile",
    label: "Head Office",
    ariaControls: "profile",
  },
  {
    id: "contact-tab",
    target: "#contact",
    label: "Sharjah - BR",
    ariaControls: "contact",
  },
  {
    id: "Moscow-tab",
    target: "#Moscow",
    label: "Ras Al Khaimah Manufacturing Unit",
    ariaControls: "Moscow",
  },
  {
    id: "Campus-tab",
    target: "#Campus",
    label: "India",
    ariaControls: "Campus",
  },
];

// ==============================
// TAB CONTENT
// ==============================
const tabContentData = [
  {
    id: "home",
    tabId: "home-tab",
    imgSrc: "/assets/img/live/banner-erith-1.png",
    location: "Office No. 3, Plot #84, Mussafah M40 Abu Dhabi",
  },
  {
    id: "profile",
    tabId: "profile-tab",
    imgSrc: "/assets/img/live/banner-erith-2.jpg",
    location: "P O Box 117451 Office 801, Warsan Tower Barsha Heights Dubai",
  },
  {
    id: "contact",
    tabId: "contact-tab",
    imgSrc: "/assets/img/live/banner-erith-3.jpg",
    location: "P5 ELOB, Office E-22F-20, Hamriyah Free Zone, Sharjah",
  },
  {
    id: "Moscow",
    tabId: "Moscow-tab",
    imgSrc: "/assets/img/live/banner-erith-4.jpg",
    location:
      "S04 – 5-12 Shed No. 04, Al Hamra Industrial Zone-FZ Ras Al Khaimah",
  },
  {
    id: "Campus",
    tabId: "Campus-tab",
    imgSrc: "/assets/img/live/banner-erith-5.jpg",
    location:
      "Old no. 76 New no. 120, Master Complex, Second Floor, Gopathi Narayanaswami Chetty Road, T. Nagar, Chennai, Tamil Nadu 600017.",
  },
];

// ==============================
// COMPONENT
// ==============================
export default function AboutCampus() {
  const [active, setActive] = useState<string>(navItems[0].id);

  return (
    <section
      className="tp-about-campus-area p-relative pb-20 pe-0 ps-0 px-0"
      id="nearby-locations"
    >
      <div className="container">
        <div className="row" style={{ paddingTop: 20 }}>
          {/* LEFT SIDE */}
          <div className="col-lg-4">
            <div
              className="tp-about-campus-tab wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="tp-about-campus-info-content">
                <h3
                  className="tp-about-campus-title"
                  style={{ color: "#1d3a72" }}
                >
                  Branches
                </h3>

                <p
                  className="mb-4"
                  style={{
                    lineHeight: 1.3,
                    color: "#292929",
                  }}
                >
                  Erith Specialized Solutions, based in the Middle East,
                  provides advanced engineering products and services across
                  vital sectors. With a diverse presence in 64 countries, we
                  empower partners to excel in niche industrial applications.
                </p>
              </div>

              {/* TABS */}
              <ul className="tp-shop-widget" role="tablist">
                {navItems.map((item) => (
                  <li className="nav-item" role="presentation" key={item.id}>
                    <button
                      className={`nav-link ${
                        active === item.id ? "active" : ""
                      }`}
                      type="button"
                      role="tab"
                      aria-selected={active === item.id}
                      onClick={() => setActive(item.id)}
                      style={{
                        // fontsize:"25px",
                        fontWeight: active === item.id ? "bold" : "normal",
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-8">
            <div className="tab-content wow fadeInUp" data-wow-delay=".5s">
              {tabContentData.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab-pane fade ${
                    active === tab.tabId ? "show active" : ""
                  }`}
                  role="tabpanel"
                >
                  <div className="tp-about-campus-box p-relative">
                    <div className="tp-about-campus-thumb">
                      {/* <Image
                        src={tab.imgSrc}
                        alt={tab.id}
                        width={718}
                        height={482}
                        style={{ height: "auto" }}
                      /> */}
                      <Image
                        src={tab.imgSrc}
                        alt={tab.id}
                        width={718}
                        height={350}
                        style={{
                          height: "350px",
                          objectFit: "cover",
                          width: "100%",
                        }}
                      />
                    </div>

                    <div
                      className="tp-about-campus-content d-flex justify-content-between"
                      style={{ background: "transparent", zIndex: 2 }}
                    >
                      <div className="tp-about-campus-location">
                        <span style={{ color: "#fff", borderColor: "#ffff" }}>
                          <Location />
                        </span>
                        <a style={{ color: "#fff" }} href="#">
                          {tab.location}
                        </a>
                      </div>

                      <div
                        className="tp-about-campus-btn"
                        style={{ borderRadius: "10px" }}
                      >
                        {/* <Link
                          className="tp-btn"
                          style={{
                            color: "#fff",
                            borderColor: "#fff",
                            fontSize: "13px",
                          }}
                          href="#"
                        >
                          Find out More
                        </Link> */}
                        <Link
                          className="btn rectangle btn-light mt-md-15 mt-xs-10 btn-md radius animation custom-hover-border"
                          href="/contact"
                          style={{
                            borderRadius: "10px",
                            // marginLeft: "10px",
                            fontSize: "13px",
                          }}
                        >
                          Find out More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="tp-map-area mb-30 mt-20">
          <div className="tp-contact-map-content">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14539.849890984015!2d54.482767351645464!3d24.34779985307368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOffice%20No.%203%2C%20Plot%20%2384%2C%20Mussafah%20M40%2C%20Abu%20Dhabi!5e0!3m2!1sen!2sin!4v1757593238170!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{borderRadius:"10px"}}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
