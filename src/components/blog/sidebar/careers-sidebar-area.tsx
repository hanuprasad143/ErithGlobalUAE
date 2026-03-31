// import Link from "next/link";
// import Image from "next/image";
// import { blog_stories_data } from "@/data/blog-data";

// import { EmailThree, LocationFour, TelSvgTwo } from "../../svg";

export default function ErithCareessidebarArea() {
  //   const truncateText = (text: string, limit = 50) =>
  //     text.length > limit ? text.slice(0, limit) + "..." : text;

  return (
    <div className="tp-sidebar-wrapper">
      {/* Top Posts */}
      <div className="col-lg-12 col-md-12">
        <div className="tp-contact-info-item mb-20">
          <div className="tp-sidebar-content">
            <h2
              style={{
                fontSize: "25px",
                color: "#292929",
                marginBottom: "0",
              }}
            >
              Get Touch in with us
            </h2>
            <p
              style={{
                color: "#292929",
                marginTop: "10px",
                fontSize: "15px",
              }}
            >
              Discover opportunities to learn, grow, and succeed in a supportive
              and forward-thinking workplace.
            </p>

            <ul className="">
              {/* {blog_stories_data.slice(0, 5).map((blog, index) => ( */}
              <li className="tp-sidebar-post-item">
                {/* <Link href={`/blog-details/${blog.id}`} */}
                <div style={{ marginBottom: "10px" }}>
                  <div className="d-flex align-items-start">
                    <p
                      style={{
                        backgroundColor: "#1d3a72",
                        color: "#fff",
                        padding: "2px 12px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        fontWeight: "600",
                        display: "inline-block",
                        fontSize: "12px",
                        marginRight: "20px",
                        marginTop: "10px",
                      }}
                    >
                      <i
                        className="fa fa-map-marker field-icon"
                        style={{ color: "#fff" }}
                      ></i>
                    </p>
                    <p>Office No.3, Plot #84 Mussafah M40, Abu Dhabi</p>
                  </div>
                </div>
                <hr
                  style={{
                    width: "100%",
                    border: "none",
                    borderTop: "1px solid #ddd",
                    margin: "10px 0",
                  }}
                />
                <div style={{ marginBottom: "10px" }}>
                  <div className="d-flex align-items-start">
                    <p
                      style={{
                        backgroundColor: "#1d3a72",
                        color: "#fff",
                        padding: "2px 12px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        fontWeight: "600",
                        display: "inline-block",
                        fontSize: "12px",
                        marginRight: "20px",
                        marginBottom: "0px",
                      }}
                    >
                      <i
                        className="fa fa-envelope field-icon"
                        style={{ color: "#fff" }}
                      ></i>
                    </p>
                    <p>info@erithglobal.com</p>
                  </div>
                </div>
                <hr
                  style={{
                    width: "100%",
                    border: "none",
                    borderTop: "1px solid #ddd",
                    margin: "10px 0",
                  }}
                />
                <div style={{ marginBottom: "10px" }}>
                  <div className="d-flex align-items-start">
                    <p
                      style={{
                        backgroundColor: "#1d3a72",
                        color: "#fff",
                        padding: "2px 12px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        fontWeight: "600",
                        display: "inline-block",
                        fontSize: "12px",
                        marginRight: "20px",
                        marginBottom: "0px",
                      }}
                    >
                      <i
                        className="fa fa-phone field-icon"
                        style={{ color: "#fff" }}
                      ></i>
                    </p>
                    <p>+971 7266 2628</p>
                  </div>
                </div>
                <hr
                  style={{
                    width: "100%",
                    border: "none",
                    borderTop: "1px solid #ddd",
                    margin: "10px 0",
                  }}
                />
              </li>
              {/* ))} */}
            </ul>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      {/* <div className="tp-sidebar-widget">
        <h5 className="tp-sidebar-widget-title" style={{ color: "#292929" }}>
          Recent Posts
        </h5>

        <div className="tp-recent-post-grid">
          {blog_stories_data.slice(0, 6).map((blog) => (
            <Link
                href={`/blog-details/${blog.id}`}
              href="#"
              key={blog.id}
              className="tp-recent-post-item"
            >
              <Image src={blog.img} alt={blog.title} width={300} height={200} />

              <div className="tp-recent-post-overlay">
                <h5>{truncateText(blog.title, 35)}</h5>
                <p>{blog.date || "Read more"}</p>
              </div>
            </Link>
          ))}
        </div>
      </div> */}
    </div>
  );
}
