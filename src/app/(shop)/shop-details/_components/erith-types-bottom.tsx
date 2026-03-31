import { useState } from "react";
import NiceSelect from "@/components/ui/nice-select";
// import ServiceFour from "@/components/products/downloads";
import DownloadTypes from "@/components/products/types.downloads";
import Features from "@/components/products/features";
// import RatingBar from "./rating-bar";
// import ReviewItem from "./review-item";
// import { IBookDT } from "@/types/book-d-t";
// import { formatKey } from "@/utils";
// import ShopReviewForm from "@/components/form/shop-review-form";
import Link from "next/link";
import { event_data } from "@/data/event-data";
import usePagination from "@/hooks/use-pagination";
import Image from "next/image";

// rating data
// const ratings = [
//   { stars: 5, percentage: 82 },
//   { stars: 4, percentage: 30 },
//   { stars: 3, percentage: 15 },
//   { stars: 2, percentage: 6 },
//   { stars: 1, percentage: 10 },
// ];
// review data
// const reviews = [
//   {
//     id: 1,
//     name: "Eleanor Fant",
//     date: "06 March, 2024",
//     comment:
//       "Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.",
//     rating: 5,
//     avatar: "/assets/img/shop/product/shop-product-user-1.png",
//   },
//   {
//     id: 2,
//     name: "Theodore Handle",
//     date: "06 March, 2024",
//     comment:
//       "This review is for the Samsung Tab S6 Lite, 64gb wifi in blue. purchased this product performed.",
//     rating: 5,
//     avatar: "/assets/img/shop/product/shop-product-user-2.png",
//   },
// ];

const applicationProcess = [
  {
    step: 1,
    title: "Size Range",
    description: `NPS 2 to 24 / DN 60 to 600`,
    // linkText: "Application Form",
    // linkHref: "/university-application-form",
  },
  {
    step: 2,
    title: "Body Materials",
    description: `Ductile Iron, Carbon Steel (WCB) CF8 Stainless Steel, CF8M Stainless Steel, CF3M Stainless Steel`,
  },
  {
    step: 3,
    title: "Maximum Allowable Operating Pressure",
    description: `240psi (16bar)`,
  },
  {
    step: 4,
    title: "Stem Materials",
    description: `304 Stainless Steel`,
  },
  {
    step: 5,
    title: "Body Style",
    description: `Wafer, Two-Piece Bolted`,
  },
  {
    step: 6,
    title: "Gate Materials",
    description: `304, 316, 317 Stainless Steel, SAF 2507, SAF 2205,17-4PH, Hastelloy® C, Monel®`,
  },
  {
    step: 7,
    title: "Seat Material Temperature Range",
    description: `
<ul>
  <li>Buna-N: -34 to 194°F (-36 to 90°C)</li>
  <li>EPDM: -65 to 248°F (-54 to 120°C)</li>
  <li>Viton®: -15 to 392°F (-26 to 200°C)</li>
</ul>
`,
  },
  {
    step: 8,
    title: "Design Standard",
    description: `MSS SP81`,
  },
  {
    step: 9,
    title: "Packing Maximum Temperature",
    description: `
<ul>
  <li>PTFE/Buna-N: 194°F (90°C)</li>
  <li>PTFE/Viton®: 392°F (200°C)</li>
  <li>PTFE/EPDM: 248°F (120°C)</li>
</ul>
`,
  },
  {
    step: 10,
    title: "Testing Standard",
    description: `MSS SP151`,
  },
  {
    step: 11,
    title: "Liner Maximum Temperature",
    description: `176°F (80°C)`,
  },
  {
    step: 12,
    title: "Certifications",
    description: `ATEX, CRN, PED, PE(S)R, TR CU, UA TR`,
  },
  {
    step: 13,
    title: "Face to Face",
    description: `MSS SP81`,
  },
  {
    step: 14,
    title: "Actuator Options",
    description: `Handwheel, Bevel Gear, Pneumatic, Hydraulic, Electric`,
  },
];
const results = [
  { id: "home", title: "Description" },
  { id: "profile", title: "Specifications" },
  { id: "contact", title: "Downloads" },
  { id: "features", title: "Features & Benefits" },
  { id: "insights", title: "Product Insights" },
];

// type IProps = {
//   product: IBookDT;
// };
export default function ErithTypesBottom() {
  function handleSearch(item: { value: string; label: string }) {
    console.log(item);
  }
  const { currentItems } = usePagination(event_data, 10);
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className="tp-product-details-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-product-details- tp-tab">
              <nav>
                <div className="align-items-start">
                  <ul className="nav" style={{ paddingLeft: 0 }}>
                    {results.map((nav) => (
                      <li key={nav.title} className="nav-item">
                        <button
                          className={`nav-link ${
                            activeTab === nav.id ? "active" : ""
                          }`}
                          onClick={() => setActiveTab(nav.id)}
                          style={{
                            fontSize: "12px",
                            color: activeTab === nav.id ? "#fff" : "#000",
                            padding: "6px 16px",
                            backgroundColor:
                              activeTab === nav.id ? "#1d3a72" : "#f5f5f5",
                            border:
                              activeTab === nav.id
                                ? "2px solid #1d3a72"
                                : "1px solid #ccc",
                            borderRadius: "10px", // 👈 decreased radius
                            transition: "all 0.2s ease",
                            marginRight: "10px",
                            marginBottom: "10px",
                          }}
                          type="button"
                        >
                          {nav.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
              <div className="tab-content">
                {/* DESCRIPTION */}
                {activeTab === "home" && (
                  <div className="col-md-10 mt-5">
                    {/* FULL WIDTH HEADING */}
                    <h4 className="mb-3">
                      <Link
                        style={{
                          color: "#292929",
                          marginBottom: "30px",
                          fontSize: "25px",
                          lineHeight: "1",
                          display: "block",
                          width: "100%",
                        }}
                        href={currentItems[0].link ?? "#"}
                      >
                        Corrosion-Resistant Materials for Versatile Industrial
                        Use
                      </Link>
                    </h4>

                    {/* PARAGRAPH LEFT + IMAGE RIGHT */}
                    <div className="d-flex flex-column flex-md-row align-items-start">
                      {/* LEFT SIDE TEXT */}
                      <div className="flex-grow-1">
                        <p className="mb-0" style={{ lineHeight: "1.4" }}>
                          The Bray Series 755 Bidirectional Knife Gate Valve is
                          engineered to excel in managing abrasive and corrosive
                          slurries across diverse applications, focusing on
                          performance and reliability. Its design and robust
                          construction set a new standard for efficiency and
                          durability in industrial environments. Featuring a
                          robust two-piece bolted body configuration, the Series
                          755 valve ensures structural integrity and simplifies
                          maintenance procedures, enhancing operational
                          efficiency.
                        </p>
                      </div>

                      {/* RIGHT SIDE IMAGE */}
                      <Image
                        src="/assets/img/products/product2.png"
                        alt="Product"
                        width={200}
                        height={200}
                        className="ms-md-4 mt-3 mt-md-0"
                      />
                    </div>
                  </div>
                )}

                {/* SPECIFICATIONS */}
                {activeTab === "profile" && (
                  <div
                    className="container mt-5"
                    style={{
                      paddingTop: "0",
                      paddingBottom: "30px", // 🔥 remove bottom space
                    }}
                  >
                    <h5
                      style={{
                        color: "#292929",
                        marginTop: "0",
                        marginBottom: "30px", // 🔥 no gap below heading
                        lineHeight: "1.2",
                        fontSize: "25px",
                      }}
                    >
                      Specifications
                    </h5>

                    <div
                      className="row"
                      style={{
                        rowGap: "5px",
                        alignItems: "stretch",
                        marginTop: "0",
                        marginBottom: "0", // 🔥 remove row bottom gap
                        paddingTop: "0",
                        paddingBottom: "0",
                      }}
                    >
                      {applicationProcess.map((step, index) => (
                        <div
                          key={index}
                          className="col-lg-6 col-md-6 d-flex"
                          style={{
                            marginBottom: "0", // 🔥 no bottom gap per column
                            paddingTop: "0",
                            paddingBottom: "0",
                          }}
                        >
                          <div
                            className="tp-apply-process-box h-70"
                            style={{
                              padding: "4px 5px",
                              width: "100%",
                              marginTop: "0",
                              marginBottom: "0", // 🔥 ensure no box gap
                              borderTop: "none",
                            }}
                          >
                            <h4
                              style={{
                                marginTop: "0",
                                marginBottom: "2px",
                                fontSize: "15px",
                                color: "#000",
                                lineHeight: "1.3",
                              }}
                            >
                              {step.title}
                            </h4>

                            <p
                              style={{
                                marginTop: "0",
                                marginBottom: "0",
                                lineHeight: "1.4",
                                fontSize: "14px",
                              }}
                              dangerouslySetInnerHTML={{
                                __html: step.description,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* DOWNLOADS */}
                {activeTab === "contact" && (
                  <div className="custom-filter-wrapper">
                    <div className="row custom-filter-row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="custom-select-box">
                          <NiceSelect
                            options={[
                              { value: "", label: "Select a Document Type" },
                              { value: "assistant", label: "All" },
                              { value: "principal", label: "Product Brochure" },
                              { value: "teacher", label: "Assistant Teacher" },
                            ]}
                            defaultCurrent={0}
                            onChange={(item) => handleSearch(item)}
                            name="documentType"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="custom-select-box">
                          <NiceSelect
                            options={[
                              { value: "", label: "Select Language" },
                              { value: "assistant", label: "English" },
                              { value: "principal", label: "Arabic" },
                              { value: "teacher", label: "Spanish" },
                            ]}
                            defaultCurrent={0}
                            onChange={(item) => handleSearch(item)}
                            name="language"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <DownloadTypes />
                      </div>
                    </div>
                  </div>
                )}

                {/* FEATURES */}
                {activeTab === "features" && <div id="features"></div>}
                {activeTab === "features" && <Features />}

                {/* INSIGHTS */}
                {activeTab === "insights" && (
                  <div className="tab-pane show active">
                    <p>Product Insights content here...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
