import Link from "next/link";
import Image from "next/image";
import { IBlogDT } from "@/types/blog-d-t";
import { RightArrowSeven, ShareSvg } from "@/components/svg";
import { LeftArrowSeven } from "@/components/svg/arrow-svg";

type IProps = {
  blog: IBlogDT;
};

export default function BlogStandardItem({ blog }: IProps) {
  return (
    <div className="tp-postbox-item p-relative mb-40">
      <div className="tp-postbox-thumb">
        {/* <Link href={`/blog-details/${blog.id}`}> */}
        {/* <Link href={`#`}> */}
        <Image
          src={blog.img}
          alt={blog.title}
          width={793}
          height={420}
          style={{ height: "auto" }}
        />
        {/* </Link> */}
      </div>
      <div className="tp-postbox-content">
        {/* <div className="tp-blog-stories-tag-wrap d-flex">
          <a href="#">Education</a>
         
        </div> */}
        <span>{blog.date}</span>
        <h3
          className="tp-postbox-title"
          style={{ fontSize: "25px", color: "#292929" }}
        >
          {/* <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link> */}
          {blog.title}
        </h3>
        <p>{blog.desc}</p>
        <div className="tp-postbox-btn-box d-flex align-items-center justify-content-between">
          <div className="tp-postbox-btn">
            {/* <Link href={`/blog-details/${blog.id}`}>
              Read More{" "}
              <span>
                <RightArrowSeven />
              </span>
            </Link> */}
          </div>
          <div className="tp-postbox-share">
            <button className="p-relative">
              Share this post
              <span>
                <ShareSvg />
              </span>
            </button>

            <ul className="tp-postbox-share-hover">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i> <b>Facebook</b>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i> <b>Twitter</b>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube"></i> <b>Youtube</b>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin"></i> <b>Linkedin</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tp-postbox-content">
        <div className="tp-postbox-btn-box d-flex align-items-center justify-content-between">
          <div className="tp-postbox-btn">
            {/* <Link href={`/blog-details/${blog.id}`}> */}
            <Link href="#">
              <span style={{ marginRight: "8px" }}>
                <LeftArrowSeven />
              </span>
              Previous{" "}
            </Link>
          </div>
          <div className="tp-postbox-btn">
            {/* <Link href={`/blog-details/${blog.id}`}> */}
            <Link href="#">
              Next{" "}
              <span>
                <RightArrowSeven />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
