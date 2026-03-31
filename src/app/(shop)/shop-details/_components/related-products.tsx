import ShopItem from "@/components/shop/shop-item";
import bookData from "@/data/book-shop-data";
import Link from "next/link";

export default function RelatedProducts() {
  return (
    <section className="tp-product-related-area pt-30 pb-10">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-12">
            <div className="tp-product-related-heading text-center mb-30">
              <h4
                className="tp-product-related-title"
                style={{ color: "#fecb00" }}
              >
                Related Products
              </h4>
              <p
                style={{
                  fontSize: "40px",
                  color: "#000",
                  marginBottom: "16px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  lineHeight: "1.4",
                }}
              >
                Looking for More Solutions?
              </p>
            </div>
          </div> */}
          <div className="col-lg-12">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h5
                style={{
                  color: "#fecb00",
                  marginBottom: "20px",
                  marginTop: "30px",
                  fontSize: "25px",
                }}
              >
                Our Portfolio
              </h5>
            </div>
            <p
              style={{
                fontSize: "40px",
                color: "#000",
                marginBottom: "16px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              Looking for More Solutions?
            </p>
            <p
              style={{
                fontSize: "18px",
                color: "#000",
                marginBottom: "40px",
                justifyContent: "center",
                alignItems: "start",
                display: "flex",
              }}
            >
              Discover Our Range of Products Built for Your Industry&apos;s
              Challenges
            </p>
          </div>
        </div>
        <div className="row">
          {bookData.slice(0, 4).map((item) => (
            <div key={item.id} className="col-lg-3 col-sm-6">
              <ShopItem item={item} />
            </div>
          ))}
        </div>
        <div className="col-12">
          {/* <div className="tp-program-all text-end"> */}
          <div className="text-end">
            <p>
              {/* Explore the most appropriate promgram.​​ */}
              <Link className="event-read-more text-decoration-none" href="#">
                View all Products → <span>{/* <RightSmArrowThree /> */}</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
