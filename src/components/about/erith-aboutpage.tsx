import Image from "next/image";
// import { Location } from "../svg";
// import shape_1 from "@/assets/img/campus/campuses-shape-1.jpg";
// import shape_2 from "@/assets/img/campus/campuses-shape-2.jpg";
import Link from "next/link";

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
function AboutErithInfo() {
  return (
    <section className="tp-about-campus-info-area pt-40 pb-30">
      <div className="container">
        <div className="row align-items-center">
          {/* Left image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="tp-about-campus-info-thumb">
              <Image
                src="/assets/img/about/erith_man.jpg"
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

          {/* Right content */}
          <div className="col-lg-6">
            <div className="tp-about-campus-info-content">
              <h3
                className="tp-about-campus-title mb-3"
                style={{ color: "#1d3a72" }}
              >
                Our Mission & Vision
              </h3>
              <p style={{ lineHeight: 1.3 }} className="mb-4">
                At Erith, our mission and vision center on inspiring change
                through responsibility, innovation, and excellence. We provide
                advanced industrial solutions that enhance efficiency, safety,
                and sustainability. By empowering industries with intelligent
                flow control technologies, we strive to lead global
                transformation toward a smarter, safer, and more sustainable
                future.
              </p>
              <ul className="list-unstyled mb-4 d-flex flex-wrap">
                <li className="w-50">✔ Responsibility</li>
                <li className="w-50">✔ Innovation</li>
                <li className="w-50">✔ Diversity</li>
                <li className="w-50">✔ Values</li>
                <li className="w-50">✔ Safety</li>
                <li className="w-50">✔ Empowering</li>
                <li className="w-50">✔ Inspirational</li>
                <li className="w-50">✔ Change</li>
              </ul>

              <Link
                href="#"
                className="tp-btn"
                style={{ borderRadius: "10px", padding: "8px 18px" }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Joinourteam() {
  return (
    <section className="tp-about-campus-info-area pt-40 pb-20">
      <div className="container">
        <div className="row align-items-center">
          {/* Left image */}

          {/* Right content */}
          <div className="col-lg-6">
            <div className="tp-about-campus-info-content">
              <h3
                className="tp-about-campus-title mb-3"
                style={{ color: "#1d3a72" }}
              >
                Join our Team
              </h3>
              <p style={{ lineHeight: 1.3 }} className="mb-4">
                Erith’s extensively trained staff is knowledgeable in all
                aspects of flow control technology and provides personal
                attention to every customer. With years of hands-on industry
                experience, our team offers expert guidance in selecting,
                installing, and maintaining advanced flow control systems. We
                pride ourselves on delivering tailored solutions, prompt
                technical support, and a commitment to excellence that ensures
                optimal performance, reliability, and customer satisfaction in
                every project.
              </p>
              {/* <ul className="list-unstyled mb-4">
                <li>✔ Advanced engineering design</li>
                <li>✔ High-quality industrial components</li>
                <li>✔ On-time delivery and support</li>
              </ul> */}
              <Link
                href="#"
                className="tp-btn"
                style={{ borderRadius: "10px", padding: "8px 18px" }}
              >
                View Careers
              </Link>
            </div>
          </div>
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="tp-about-campus-info-thumb">
              <Image
                src="/assets/img/our-mission/Gala_night_group_photo.jpg"
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
    </section>
  );
}
export default function AboutErith() {
  return (
    <>
      <section className="tp-about-campus-info-area pt-40 pb-30">
        <div className="container">
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
                <Link
                  href="#"
                  className="tp-btn"
                  style={{ borderRadius: "10px", padding: "8px 18px" }}
                >
                  Overview
                </Link>
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
      </section>

      {/* ✅ NEW SECTION BELOW */}
      <AboutErithInfo />
      <Joinourteam />
      {/* <ContactForm /> */}
    </>
  );
}
