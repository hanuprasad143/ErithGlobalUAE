import React from "react";
// import shape10 from "@/assets/img/shape/yellow_triangless.png";
import Services1TabData from "@/assets/jsonData/services/Services1TabData.json";
import SingleServices1 from "./SingleServices1";
// import Image from "next/image";

const ServicesStyle1 = () => {
  return (
    <>
      <div className="services-style-one-area bg-white  pl-15">
        <div className="triangle-shape">
          {/* <Image src={shape10} alt="Shape" /> */}
        </div>
        <div
          className="center-shape"
          style={{ backgroundImage: `url(/assets/img/shape/5.png)` }}
        ></div>
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-5 mb-md-60">
              <div className="service-nav-info">
                <h4 className="h4 sub-heading" style={{ fontSize: "18px" }}>
                  What we do
                </h4>
                <h2 style={{ color: "#292929", fontSize: "25px" }}>
                  Excellent service and support for you
                </h2>
                <div
                  className="nav nav-tabs service-tab-navs"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="nav-id-1"
                    data-bs-toggle="tab"
                    data-bs-target="#tab1"
                    type="button"
                    role="tab"
                    aria-controls="tab1"
                    aria-selected="true"
                  >
                    <i className="flaticon-sustainable"></i>
                    Sustainable Solutions
                  </button>
                  <button
                    className="nav-link"
                    id="nav-id-2"
                    data-bs-toggle="tab"
                    data-bs-target="#tab2"
                    type="button"
                    role="tab"
                    aria-controls="tab2"
                    aria-selected="false"
                  >
                    <i className="flaticon-innovation"></i>
                    Inspired Solutions
                  </button>
                  <button
                    className="nav-link"
                    id="nav-id-3"
                    data-bs-toggle="tab"
                    data-bs-target="#tab3"
                    type="button"
                    role="tab"
                    aria-controls="tab3"
                    aria-selected="false"
                  >
                    <i className="flaticon-quality"></i>
                    Trusted Solutions
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-7 pl-50 pl-md-15 pl-xs-15 pr-20">
              <div
                className="tab-content services-tab-content"
                id="nav-tabContent"
              >
                {Services1TabData.map((service) => (
                  <div
                    className={`tab-pane fade ${service.tabClass}`}
                    id={service.tabId}
                    role="tabpanel"
                    aria-labelledby={service.ariaLabelled}
                    key={service.id}
                  >
                    <div className="row" style={{ textAlign: "left" }}>
                      {service.tabData.map((data) => (
                        <div
                          className="col-lg-6 col-md-6 mt-30 mt-md-20 mt-xs-20"
                          key={data.id}
                        >
                          <SingleServices1 data={data} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesStyle1;
