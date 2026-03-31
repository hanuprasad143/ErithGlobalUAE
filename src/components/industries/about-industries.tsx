import Image from "next/image";
// import { Location } from "../svg";
// import shape_1 from "@/assets/img/campus/campuses-shape-1.jpg";
// import shape_2 from "@/assets/img/campus/campuses-shape-2.jpg";
import Link from "next/link";
import ErithInductriesEvents from "../event/erith-industries-event";
import {
  FaFileAlt,
  // FaFilePdf,
} from "react-icons/fa";

// import mission_thumb_3 from "@/assets/img/our-mission/Gala_night_group_photo.jpg";
// import ContactForm from "../form/contact-form";
// nav items
// const navItems = [
//   {
//     id: "home-tab",
//     target: "#home",
//     label: "Abu Dhabi - BR",
//     ariaControls: "home",
//     selected: true,
//   },
//   {
//     id: "profile-tab",
//     target: "#profile",
//     label: "Head Office",
//     ariaControls: "profile",
//     selected: false,
//   },
//   {
//     id: "contact-tab",
//     target: "#contact",
//     label: "Sharjah - BR",
//     ariaControls: "contact",
//     selected: false,
//   },
//   {
//     id: "Moscow-tab",
//     target: "#Moscow",
//     label: "Ras Al Khaimah Manufacturing Unit",
//     ariaControls: "Moscow",
//     selected: false,
//   },
//   {
//     id: "Campus-tab",
//     target: "#Campus",
//     label: "India",
//     ariaControls: "Campus",
//     selected: false,
//   },
// ];

// tab content data
// const tabContentData = [
//   {
//     id: "home",
//     label: "home-tab",
//     imgSrc: "/assets/img/live/banner-erith-1.png",
//     location: "Office No. 3, Plot #84, Mussafah M40 Abu Dhabi",
//     isActive: true,
//   },
//   {
//     id: "profile",
//     label: "profile-tab",
//     imgSrc: "/assets/img/live/banner-erith-2.jpg",
//     location: "P O Box 117451 Office 801, Warsan Tower Barsha Heights Dubai",
//     isActive: false,
//   },
//   {
//     id: "contact",
//     label: "contact-tab",
//     imgSrc: "/assets/img/live/banner-erith-3.jpg",
//     location: "P5 ELOB, Office E-22F-20, Hamriyah Free Zone, Sharjah",
//     isActive: false,
//   },
//   {
//     id: "Moscow",
//     label: "Moscow-tab",
//     imgSrc: "/assets/img/live/banner-erith-4.jpg",
//     location:
//       "S04 – 5-12 Shed No. 04, Al Hamra Industrial Zone-FZRas Al Khaimah",
//     isActive: false,
//   },
//   {
//     id: "Campus",
//     label: "Campus-tab",
//     imgSrc: "/assets/img/live/banner-erith-5.jpg",
//     location:
//       "Old no. 76 New no. 120, Master Complex, Second Floor, Gopathi Narayanaswami Chetty Road, T. Nagar, Chennai, Tamil Nadu 600017.",
//     isActive: false,
//   },
// ];

// ✅ NEW COMPONENT — image on left, content on right

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

export default function AboutIndustries() {
  return (
    <>
      <section className="tp-about-campus-info-area pt-40 pb-30">
        <div className="container mb-30">
          <div className="row align-items-center">
            {/* Left image */}

            {/* Right content */}
            <div className="col-lg-6">
              <div className="tp-about-campus-info-content">
                <h3
                  className="tp-about-campus-title mb-3"
                  style={{ color: "#1d3a72" }}
                >
                  About Us
                </h3>

                <h4
                  style={{ color: "#292929", fontSize: "25px" }}
                  className="mb-4"
                >
                  Explore diverse industry focused services ensuring operational
                  reliability, safety, and efficiency.
                </h4>

                <h4
                  style={{ color: "#292929", fontSize: "18px" }}
                  className="mb-4"
                >
                  Explore diverse industry focused services ensuring operational
                  reliability, safety, and efficiency.
                </h4>
                <p
                  className="mb-4"
                  style={{
                    lineHeight: 1.3,
                    color: "#292929",
                    // fontSize: "15px",
                  }}
                >
                  Erith Specialized Solutions, strategically located in Middle
                  East, is one of the region’s most advance engineering
                  solutions company providing high-end engineered products and
                  services to the distinguished customers in the Energy,
                  Chemicals, Nuclear, Metal & Mining and other vital sectors.
                  With a versatile workforce, covering over 64 countries in
                  Middle East & Africa, we help our strategic partners penetrate
                  into the niche applications in all significant industries.
                </p>
                {/* <ul className="list-unstyled mb-4">
                <li>✔ Advanced engineering design</li>
                <li>✔ High-quality industrial components</li>
                <li>✔ On-time delivery and support</li>
              </ul> */}
                {/* <Link
                  href="#"
                  className="tp-btn"
                  style={{ borderRadius: "10px", padding: "8px 18px" }}
                >
                  Overview
                </Link> */}
              </div>
            </div>
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="tp-about-campus-info-thumb">
                <Image
                  src="/assets/img/about/erith_about.jpg"
                  alt="About Erith Info"
                  width={700}
                  height={450}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <ErithInductriesEvents />
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
      </section>

      {/* ✅ NEW SECTION BELOW */}
      {/* <AboutErithInfo />
      <Joinourteam /> */}
      {/* <ContactForm /> */}
    </>
  );
}
