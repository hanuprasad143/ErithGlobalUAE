// import Image from "next/image";
import Link from "next/link";
import React from "react";

type ServiceData = {
  id: string | number;
  icon: string;
  title: string;
  text: string;
  img: string;
};

interface SingleServices1Props {
  data: ServiceData;
}

const SingleServices1: React.FC<SingleServices1Props> = ({ data }) => {
  const { title, img } = data;

  return (
    <div className="services-style-one">
      {/* <i className={icon} style={{ color: "#fecb00" }}></i> */}
      <img
        src={img}
        alt="Service Image"
        style={{
          width: "100%",
          marginBottom: "15px",
          borderRadius: "8px",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <h4>
        {/* <Link href={`/services-details/${id}`}>{title}</Link> */}
        <Link href="#" style={{ fontSize: "18px" }}>
          {title}
        </Link>
      </h4>
      {/* <p style={{ color: "#292929", lineHeight: "1.3", fontSize: "15px" }}>
        {text}
      </p> */}
      {/* <div className="image-overlay">
                <span>{img.title}</span>
              </div> */}
    </div>
  );
};

export default SingleServices1;
