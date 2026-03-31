"use client";
// import { GridSvg, ListSvg } from "@/components/svg";
import ShopFilterSidebar from "@/app/(shop)/shop-grid/_components/filter/shop-filter-sidebar";
import usePagination from "@/hooks/use-pagination";
import bookData from "@/data/book-shop-data";
import Pagination from "@/components/ui/pagination";
import ShopItem from "@/components/shop/shop-item";
import ShopListItem from "@/components/shop/shop-list-item";
// import NiceSelect from "@/components/ui/nice-select";
// import FooterSocial from "./footer-social";
import { useState } from "react";

type Props = {
  showVerticalLine?: boolean;
  showHorizontalLine?: boolean;
};

export default function AllProducts({
  showVerticalLine,
  showHorizontalLine,
}: Props) {
  const columnStyle = {
    borderRight: showVerticalLine ? "none" : "1px solid #ccc",
  };

  const horizontalStyle = {
    borderBottom: showHorizontalLine ? "none" : "1px solid #ccc",
  };

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedPressureRating, setselectedPressureRating] = useState<
    string[]
  >([]);

  const [selectedTorque, setSelectedTorque] = useState<string[]>([]);
  const [selectIndustry, setSelectIndustry] = useState<string[]>([]);
  const [selectProduct, setSelectProduct] = useState<string[]>([]);

  const { currentItems, handlePageClick, pageCount } = usePagination(
    [...bookData],
    9,
  );
  // function handleSortBy(item: { value: string; label: string }) {
  //   console.log(item);
  // }

  return (
    <>
      <section
        className="tp-breadcrumb__area pt-160  p-relative z-index-1 fix"
        style={{ height: "400px" }}
      >
        <div
          className="tp-breadcrumb__bg overlay"
          style={{ backgroundImage: "url(/assets/img/live/ABOUT-ERITH.jpg)" }}
        ></div>
        <div className="tp-breadcrumb__bg overlay">
          <video autoPlay loop muted playsInline width={"100%"}>
            <source src="/assets/videos/erith_.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="tp-breadcrumb__content">
                <div className="tp-breadcrumb__list inner-after">
                  {/* {admission && <span className="white">Admission</span>}
                  {title && <span className="white">{title}</span>}
                  {subtitle && <span className="white">{subtitle}</span>} */}
                  <h3 className="tp-breadcrumb__title color">All Products</h3>
                  <span className="white">
                    Explore our complete range of high-quality products designed
                    to meet your needs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tp-shop-grid-area pt-10">
        <div className="container">
          <p
            style={{
              fontSize: "40px",
              color: "#292929",
              lineHeight: "1.2",
              marginTop: "30px",
              fontWeight: "bold",
            }}
          >
            Valves, Actuators and Controls
          </p>
          <hr style={{ marginTop: "40px" }} />

          <div className="row">
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
              style={columnStyle}
            >
              {/* <ShopFilterSidebar /> */}
              <ShopFilterSidebar
                onProductChnage={setSelectProduct}
                onSizeChange={setSelectedSizes}
                onPressureChange={setselectedPressureRating}
                onTorqueChange={setSelectedTorque}
                onIndustryChange={setSelectIndustry}
              />
            </div>

            <div className="col-lg-9 order-1 order-lg-1">
              <p style={horizontalStyle}>
                {selectProduct.length > 0 && (
                  <>
                    <span style={{ color: "#000" }}>Filters:- </span>
                  </>
                )}

                {selectProduct.length > 0 && (
                  <>
                    <span style={{ color: "#000", fontWeight: "bold" }}>
                      Product Type:{" "}
                    </span>
                    {selectProduct.join(", ")}
                    {"."}
                  </>
                )}

                {selectedSizes.length > 0 && (
                  <>
                    <span style={{ color: "#000", fontWeight: "bold" }}>
                      Sizes:{" "}
                    </span>
                    {selectedSizes.join(", ")}
                    {"."}
                  </>
                )}

                {selectedPressureRating.length > 0 && (
                  <>
                    <span style={{ color: "#000", fontWeight: "bold" }}>
                      Pressure:{" "}
                    </span>
                    {selectedPressureRating.join(", ")}
                    {"."}
                  </>
                )}

                {selectedTorque.length > 0 && (
                  <>
                    <span style={{ color: "#000", fontWeight: "bold" }}>
                      Torque:{" "}
                    </span>
                    {selectedTorque.join(", ")}
                    {"."}
                  </>
                )}

                {selectIndustry.length > 0 && (
                  <>
                    <span style={{ color: "#000", fontWeight: "bold" }}>
                      Industry:{" "}
                    </span>
                    {selectIndustry.join(", ")}
                  </>
                )}
              </p>

              <div className="row">
                <div className="col-lg-8">
                  <div className="tp-shop-grid-sidebar-left d-flex align-items-center mb-20">
                    {/* <div className="tp-course-grid-sidebar-tab tp-tab">
                    <ul className="nav nav-tabs" id="filterTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#home"
                          type="button"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                          tabIndex={0}
                        >
                          <GridSvg />
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#profile"
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                          tabIndex={-1}
                        >
                          <ListSvg />
                        </button>
                      </li>
                    </ul>
                  </div> */}

                    {/* <div className="tp-course-filter-top-result">
                    <p>
                      Showing 1–{currentItems.length} of {bookData.length}{" "}
                      results
                    </p>
                  </div> */}
                  </div>
                </div>
                {/* <div className="col-lg-4">
                <div className="tp-shop-grid-sidebar-right d-flex justify-content-start justify-content-lg-end mb-20">
                  <div className="tp-course-grid-select tp-course-grid-sidebar-select">
                    <NiceSelect
                      cls="wide"
                      options={[
                        { value: "", label: "Short by" },
                        { value: "low", label: "Price Low to High" },
                        { value: "high", label: "Price High to Low" },
                        { value: "latest", label: "Short by:  Latest" },
                      ]}
                      defaultCurrent={0}
                      onChange={(item) => handleSortBy(item)}
                      name="ShortBy"
                    />
                  </div>
                </div>
              </div> */}
              </div>

              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    {currentItems.map((book) => (
                      <div key={book.id} className="col-lg-4 col-sm-6">
                        <ShopItem item={book} />
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      {currentItems.map((book) => (
                        <ShopListItem key={book.id} item={book} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="tp-event-inner-pagination pb-10">
                    <div className="tp-dashboard-pagination pt-20">
                      <div className="tp-pagination ">
                        <Pagination
                          handlePageClick={handlePageClick}
                          pageCount={pageCount}
                          isCenter={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 style={horizontalStyle}></h1>
      </section>
    </>
  );
}
