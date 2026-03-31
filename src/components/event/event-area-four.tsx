"use client";

import Image from "next/image";
import { event_data } from "@/data/event-data";
import usePagination from "@/hooks/use-pagination";
// import Pagination from "../ui/pagination";
import Link from "next/link";
// import { kids_event_data } from "@/data/event-data";
// import location_svg from "@/assets/img/icon/location.svg";
// import { RightArrow } from "../svg";
export default function EventAreaFour() {
  const { currentItems } = usePagination(event_data, 10);

  return (
    <>
      {/* Mission & Vision Section */}
      <section className="tp-about-campus-info-area pt-30 pb-10">
        <div className="container">
          <div className="row align-items-stretch ">
            {/* LEFT – Featured image */}
            <div className="col-lg-8 col-12 mb-4 mb-lg-0 d-flex ">
              <div className="tp-event-3-item flex-fill d-flex force-radius">
                <div className="tp-event-3-thumb position-relative w-100 force-radius">
                  <Image
                    src="/assets/img/about/erith_man.jpg"
                    alt="About Erith Info"
                    fill
                    sizes="(max-width: 991px) 100vw, 66vw"
                    style={{
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />

                  <div className="tp-event-overlay">
                    <h4
                      className="tp-event-inner-title"
                      style={{
                        paddingLeft: "10px",
                        fontSize: "20px",
                        color: "#fff",
                      }}
                    >
                      {/* <Link href={`/event-details/${currentItems[0].id}`}>
                        {currentItems[0].title}
                      </Link> */}
                    </h4>
                    <span
                      className="d-block mb-2"
                      style={{ paddingLeft: "10px" }}
                    >
                      {/* <Image
                        src={location_svg}
                        alt="location"
                        style={{ height: "20px", justifyItems:"start" }}
                      />{" "} */}
                      {currentItems[0].date.day} {currentItems[0].date.month},{" "}
                      {currentItems[0].date.year}
                    </span>
                    <p
                      className="tp-event-overlay-text"
                      style={{ color: "grey" }}
                    >
                      Erith Company successfully conducted a Painting Art
                      Contest, encouraging creativity and artistic expression
                      among participants. The event highlighted young talent and
                      promoted art as a powerful medium of imagination.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT – Event cards */}
            <div className="col-lg-4 col-12 d-flex">
              <div className="d-flex flex-column gap-3 flex-fill">
                {currentItems.slice(7, 10).map((item) => (
                  <div
                    key={item.id}
                    className="tp-event-3-item d-flex align-items-stretch"
                    style={{ borderRadius: "10px" }}
                  >
                    {/* IMAGE */}
                    <div className="tp-event-3-thumb right-thumb">
                      {/* <Link href={`/event-details/${item.id}`}> */}
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      {/* </Link> */}
                    </div>

                    {/* CONTENT */}
                    <div className="tp-event-3-content right-content">
                      <h4
                        className="tp-event-inner-title"
                        style={{ paddingLeft: "10px", fontSize: "20px" }}
                      >
                        <Link
                          style={{ color: "#292929" }}
                          href={item.link ?? "#"}
                        >
                          {item.title}
                        </Link>
                      </h4>

                      <span
                        className="d-block mb-2"
                        style={{ paddingLeft: "10px" }}
                      >
                        {/* <Image src={location_svg} alt="location" />{" "} */}
                        {item.location}
                      </span>

                      {/* <Link
                        href={`/event-details/${item.id}`}
                        className="event-read-more text-decoration-none"
                        style={{ paddingLeft: "10px" }}
                      >
                        {item.linkText} →
                      </Link> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="tp-event-inner-area tp-event-inner-p pt-20 pb-100">
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
                  Recent Articles
                </h2>
                {/* <a
                  href="#"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  View All Articles →
                </a> */}

                <Link
                  href=""
                  className="event-read-more text-decoration-none"
                  style={{ paddingLeft: "10px" }}
                >
                  View All Articles →
                </Link>
              </div>
            </div>
            {currentItems.slice(0, 6).map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 d-flex mb-4">
                <div className="tp-event-inner-item mb-30 w-100 ">
                  <div className="tp-event-inner-thumb force-radius">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={384}
                      height={240}
                      style={{
                        width: "100%",
                        height: "240px",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div className="tp-event-inner-content">
                    <h4 className="tp-event-inner-title">{item.title}</h4>

                    <span className="tp-event-inner-date">
                      {item.date.day} {item.date.month}, {item.date.year}
                    </span>

                    <div className="tp-event-inner-btn-box">
                      <Link href={""}>{item.linkText} →</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-xl-7 col-md-4 mt-20">
              <div className="tp-event-btn text-md-end mb-5">
                {/* <Link className="tp-btn" href="#">
                  View All Articles
                  <span>
                    <RightArrow />
                  </span>
                </Link> */}
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
                  View All Articles →
                </Link>
              </div>
            </div>
          </div>

          {/* Pagination */}
          {/* <div className="row">
            <div className="col-lg-12">
              <div className="tp-event-inner-pagination">
                <div className="tp-dashboard-pagination pt-20">
                  <div className="tp-pagination">
                    <Pagination
                      handlePageClick={handlePageClick}
                      pageCount={pageCount}
                      isCenter={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
