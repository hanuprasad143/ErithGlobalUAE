import Image from "next/image";
import ab_img_5 from "@/assets/img/about/4/industries_1.jpg";
import ab_img_6 from "@/assets/img/about/4/power_generation.jpg";
import ab_img_7 from "@/assets/img/about/4/petro_chemical.jpg";
import ab_img_8 from "@/assets/img/about/4/nuclear.jpg";
import ab_img_9 from "@/assets/img/about/4/marine.jpg";
import ab_img_10 from "@/assets/img/about/4/paper_&_pulp.jpg";
import ab_img_11 from "@/assets/img/about/4/water_management.jpg";
import ab_img_12 from "@/assets/img/about/4/food_pharma.jpg";
import ab_img_13 from "@/assets/img/about/4/steel_manufacture.jpg";
import ab_img_14 from "@/assets/img/about/4/chemical.jpg";
import ab_img_15 from "@/assets/img/about/4/future_energy.jpg";
import ab_img_16 from "@/assets/img/about/4/infrastructure.jpg";
import ab_img_17 from "@/assets/img/about/4/mining.jpg";

const thumbs = [
  { id: 1, img: ab_img_5, title: "Oil & Gas" },
  { id: 2, img: ab_img_6, title: "Power Generation" },
  { id: 3, img: ab_img_7, title: "Petro Chemical" },
  { id: 4, img: ab_img_8, title: "Nuclear" },
  { id: 5, img: ab_img_9, title: "Marine" },
  { id: 6, img: ab_img_10, title: "Paper & Pulp" },
  { id: 7, img: ab_img_11, title: "Water Management" },
  { id: 8, img: ab_img_12, title: "Food, Pharma & Beverage" },
  { id: 9, img: ab_img_13, title: "Steel Manufacturing" },
  { id: 10, img: ab_img_14, title: "Chemical" },
  { id: 11, img: ab_img_15, title: "Future Energy" },
  { id: 12, img: ab_img_16, title: "Infrastructure" },
  { id: 13, img: ab_img_17, title: "Mining" },
];

type IProps = {
  spacing?: string;
};

export default function AboutTwo({ spacing = "pt-0 pb-0" }: IProps) {
  return (
    <section className={`about-area ${spacing} white-bg`}>
      <div className="container">
        <h3
          className="tp-about-campus-title mb-3"
          style={{ marginBottom: "30px", color: "#1d3a72" }}
        >
          Industries We Serve
        </h3>

        <div className="row align-items-stretch">
          {/* Left large image */}
          <div className="col-lg-5 col-md-12 mb-4 mb-lg-0 d-flex">
            <div className="tp-about-big-img flex-fill position-relative">
              <Image
                src={thumbs[0].img}
                alt="Main Image"
                className="img-fluid rounded shadow-sm"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <div className="image-overlay">
                <span>{thumbs[0].title}</span>
              </div>
            </div>
          </div>

          {/* Right grid - 3 images per row */}
          <div className="col-lg-7 col-md-12 d-flex">
            <div className="tp-about-grid flex-fill d-flex flex-column justify-content-between">
              <div className="row g-3 flex-fill">
                {thumbs.slice(1).map((thumb) => (
                  <div key={thumb.id} className="col-lg-4 col-md-4 col-sm-6">
                    <div className="tp-about-small-img h-100 position-relative">
                      <Image
                        src={thumb.img}
                        alt={`thumb-${thumb.id}`}
                        className="img-fluid rounded shadow-sm"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />
                      <div className="image-overlay">
                        <span>{thumb.title}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
