"use client";

import Image from "next/image";
import { event_data } from "@/data/event-data";
import usePagination from "@/hooks/use-pagination";
// import Pagination from "../ui/pagination";
import Link from "next/link";
// import { kids_event_data } from "@/data/event-data";
// import location_svg from "@/assets/img/icon/location.svg";
// import { RightArrow } from "../svg";
export default function AllProjects() {
  const { currentItems } = usePagination(event_data, 6);

  return (
    <>
      {/* Events Section */}
      <section className="tp-event-inner-area tp-event-inner-p pt-20 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center mb-30">
                {/* <h2
                  style={{
                    fontSize: "28px",
                    color: "#1d3a72",
                    marginBottom: "0",
                  }}
                >
                  Recent Articles
                </h2> */}
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

                {/* <Link
                  href=""
                  className="event-read-more text-decoration-none"
                  style={{ paddingLeft: "10px" }}
                >
                  View All Articles →
                </Link> */}
              </div>
            </div>
            {currentItems.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 d-flex mb-4">
                <div className="tp-event-inner-item mb-30">
                  <div className="tp-event-inner-thumb">
                    {/* <Link> */}
                    {/* <Link href={`/event-details/${item.id}`}></Link> */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={384}
                      height={240}
                      style={{ height: "auto" }}
                    />
                    {/* </Link> */}
                  </div>

                  <div className="tp-event-inner-content">
                    <h4 className="tp-event-inner-title">
                      {/* <Link href={`/event-details/${item.id}`}> */}
                      {item.title}
                      {/* </Link> */}
                    </h4>

                    <span className="tp-event-inner-date">
                      {item.date.day} {item.date.month}, {item.date.year}
                    </span>

                    <div className="tp-event-inner-btn-box d-flex align-items-center justify-content-between">
                      {/* <Link
                        href={`/event-details/${item.id}`}
                        className="event-read-more text-decoration-none d-inline-flex align-items-center"
                      > */}
                      <Link href={""}>{item.linkText} →</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* 
            <div className="col-xl-7 col-md-4">
              <div className="tp-event-btn text-md-end mb-5">
                <Link className="tp-btn" href="#">
                  View All Articles
                  <span>
                    <RightArrow />
                  </span>
                </Link>
              </div>
            </div> */}
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
