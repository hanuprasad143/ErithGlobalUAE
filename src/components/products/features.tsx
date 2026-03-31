// import Link from "next/link";
// import Image from "next/image";
// import ProgramSlider from "../slider/program-slider";
// import shape_line from "@/assets/img/unlerline/program-1-svg-1.svg";
// import { RightSmArrowThree } from "../svg";

export default function Features() {
  return (
    <section className="program-area mb-75">
      <div className="container mt-5">
        <h5
          className=""
          style={{ color: "#292929", marginBottom: "30px", fontSize: "25px" }}
        >
          More Details
        </h5>
        <p
          style={{
            fontSize: "28px",
            color: "#000",
            marginBottom: "16px",
          }}
        >
          Features & Benefits
        </p>

        <ul
          style={{
            fontSize: "16px",
            color: "#000",
            lineHeight: "1.8",
            paddingLeft: "0",
            listStyle: "none",
          }}
        >
          <li
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "8px",
            }}
          >
            <ul
              style={{
                fontSize: "16px",
                color: "#000",
                lineHeight: "1.8",
                paddingLeft: "24px", // 👉 overall left space
                listStyle: "none",
              }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    width: "16px",
                    marginRight: "8px",
                    fontSize: "20px",
                    lineHeight: "1.4",
                    flexShrink: 0,
                  }}
                >
                  •
                </span>
                <span>
                  Designed for easy, quick conversion between manual and
                  pneumatic actuation. Featuring a lubricant injection port for
                  continuous, smooth operation with minimal maintenance.
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    width: "16px",
                    marginRight: "8px",
                    fontSize: "20px",
                    lineHeight: "1.4",
                    flexShrink: 0,
                  }}
                >
                  •
                </span>
                <span>
                  Clevis design and horizontal bolting stabilizes gate ensuring
                  proper alignment
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    width: "16px",
                    marginRight: "8px",
                    fontSize: "20px",
                    lineHeight: "1.4",
                    flexShrink: 0,
                  }}
                >
                  •
                </span>
                <span>
                  Clevis design and horizontal bolting stabilizes gate ensuring
                  proper alignment
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    width: "16px",
                    marginRight: "8px",
                    fontSize: "20px",
                    lineHeight: "1.4",
                    flexShrink: 0,
                  }}
                >
                  •
                </span>
                <span>
                  Standard multi-layer square packing provides exceptional gland
                  sealing.
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    width: "16px",
                    marginRight: "8px",
                    fontSize: "20px",
                    lineHeight: "1.4",
                    flexShrink: 0,
                  }}
                >
                  •
                </span>
                <span>
                  Optional energized quad seal packing for enhanced gland
                  sealing
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    width: "16px",
                    marginRight: "8px",
                    fontSize: "20px",
                    lineHeight: "1.4",
                    flexShrink: 0,
                  }}
                >
                  •
                </span>
                <span>
                  Unrestricted flow path with minimal pressure drop achieved
                  through full port valve design
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    width: "16px",
                    marginRight: "8px",
                    fontSize: "20px",
                    lineHeight: "1.4",
                    flexShrink: 0,
                  }}
                >
                  •
                </span>
                <span>
                  Replaceable steel reinforced elastomer perimeter seat ensures
                  bidirectional zero leakage shutoff
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    width: "16px",
                    marginRight: "8px",
                    fontSize: "20px",
                    lineHeight: "1.4",
                    flexShrink: 0,
                  }}
                >
                  •
                </span>
                <span>
                  Two piece bolted body for easy maintenance and seat
                  replacement
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    width: "16px",
                    marginRight: "8px",
                    fontSize: "20px",
                    lineHeight: "1.4",
                    flexShrink: 0,
                  }}
                >
                  •
                </span>
                <span>
                  Polyurethane liner bonded to both halves of the body (755P)
                  completely protect valve body from media
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    width: "16px",
                    marginRight: "8px",
                    fontSize: "20px",
                    lineHeight: "1.4",
                    flexShrink: 0,
                  }}
                >
                  •
                </span>
                <span>
                  Polyurethane bore liner provides total protection from
                  abrasive media
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
