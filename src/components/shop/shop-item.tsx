import Image from "next/image";
import { IBookDT } from "@/types/book-d-t";
import Link from "next/link";

type IProps = {
  item: IBookDT;
};

export default function ShopItem({ item }: IProps) {
  return (
    <div className="tp-shop-product-item text-center mb-50">
      <div className="tp-shop-product-card" style={{ borderRadius: "10px" }}>
        <Link href="/products" className="product-image">
          <Image
            src={item.image || "/placeholder.png"}
            alt={item.title}
            width={282}
            height={380}
            style={{ height: "auto" }}
          />
        </Link>

        <div className="tp-shop-product-content">
          <span className="product-category">{item.category}</span>
        </div>
        {/* <Link href={`/shop-details/${item.id}`} className="product-title"> */}
        <Link href="#" className="product-title">
          {item.title}
        </Link>

        {/* Expand Section */}
        <div className="product-btn-wrapper">
          <Link
            href="/contact"
            className="product-btn-primary"
            style={{
              backgroundColor: "#1d3a72",
              color: "#fff", // black text
              padding: "8px 18px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "600",
              display: "inline-block",
            }}
          >
            Inquire
          </Link>

          <Link
            href="/products"
            className="product-btn-secondary"
            style={{
              // backgroundColor: "#1d3a72",
              // color: "#fff", // black text
              padding: "8px 18px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "600",
              display: "inline-block",
            }}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
