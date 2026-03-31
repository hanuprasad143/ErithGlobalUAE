// import { RightArrowTwo } from "@/components/svg";
// import Link from "next/link";
// import HeroSection from "@/components/slider/Heroslider";

type IProps = {
  title?: string;
  subtitle?: string;
  admission?: boolean;
};

export default function AboutBanner(
  {
    // title = "About Us",
    // subtitle = "We provide the best quality products.",
    // admission,
  }: IProps,
) {
  return (
    <>
      <section
        className="tp-breadcrumb__area pt-160 pb-150 p-relative z-index-1 fix"
        style={{ height: "400px" }}
      >
        {/* Background Image */}
        <div
          className="tp-breadcrumb__bg overlay"
          style={{ backgroundImage: "url(/assets/img/live/ABOUT-ERITH.jpg)" }}
        ></div>

        {/* Content Section */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="tp-breadcrumb__content">
                <div className="tp-breadcrumb__list inner-after">
                  {/* {admission && <span className="white">Admission</span>}
                  {title && <span className="white">{title}</span>}
                  {subtitle && <span className="white">{subtitle}</span>} */}
                  <h3 className="tp-breadcrumb__title color">About</h3>
                  <span className="white ">
                    At Erith, our business is helping our customers with their
                    flow control requirements.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Hero Section (if needed later) */}
        {/* <HeroSection /> */}
      </section>
    </>
  );
}
