import Link from "next/link";
import Image from "next/image";
import { blog_stories_data } from "@/data/blog-data";

export default function BlogSidebarArea() {
  const truncateText = (text: string, limit = 50) =>
    text.length > limit ? text.slice(0, limit) + "..." : text;

  return (
    <div className="tp-sidebar-wrapper pl-55">
      {/* Top Posts */}
      <div className="tp-sidebar-widget mb-50">
        <div className="tp-sidebar-content">
          <h5 className="tp-sidebar-widget-title" style={{ color: "#292929" }}>
            Top Posts
          </h5>

          <ul className="tp-sidebar-post-list">
            {blog_stories_data.slice(0, 5).map((blog, index) => (
              <li key={blog.id} className="tp-sidebar-post-item">
                {/* <Link href={`/blog-details/${blog.id}`} */}
                <Link href={`#`}>
                  <div className="d-flex align-items-start">
                    <span
                      className="tp-sidebar-post-number"
                      style={{
                        marginRight: "12px",
                        fontSize: "32px",
                        fontWeight: "700",
                        lineHeight: "1",
                      }}
                    >
                      {index + 1}
                    </span>

                    <span className="tp-sidebar-post-title">
                      {truncateText(blog.title)}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="tp-sidebar-widget">
        <h5 className="tp-sidebar-widget-title" style={{ color: "#292929" }}>
          Recent Posts
        </h5>

        <div className="tp-recent-post-grid">
          {blog_stories_data.slice(0, 6).map((blog) => (
            <Link
              //   href={`/blog-details/${blog.id}`}
              href="#"
              key={blog.id}
              className="tp-recent-post-item"
            >
              <Image src={blog.img} alt={blog.title} width={300} height={200} />

              <div className="tp-recent-post-overlay">
                <h5>{truncateText(blog.title, 35)}</h5>
                {/* <p>{blog.date || "Read more"}</p> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
