import React from "react";
import Link from "next/link";
import { IPagesDropdown } from "@/types/menu-d-t";

type IProps = {
  pages_dropdown: IPagesDropdown[];
};

export default function NavPagesDropdown({ pages_dropdown }: IProps) {
  return (
    <div className="megamenu-demo-fullwidth p-relative">
      <div className="tp-megamenu-fullwidth-list-wrapper">
        <div className="d-flex flex-wrap" style={{ gap: "60px" }}>
          {pages_dropdown.map((pd) => {
            const columns = [];
            for (let i = 0; i < pd.dropdown_menus.length; i += 6) {
              columns.push(pd.dropdown_menus.slice(i, i + 6));
            }

            return (
              <div key={pd.id} style={{ minWidth: "220px" }}>
                <div className="tp-megamenu-fullwidth-list">
                  {/* Title */}
                  <h4
                    className="tp-megamenu-fullwidth-title"
                    style={{
                      marginBottom: "15px",
                      fontSize: "15px",
                      color: "#292929",
                      // fontWeight: "bold",
                    }}
                  >
                    {pd.title}
                  </h4>

                  {/* Products */}
                  <div className="d-flex" style={{ gap: "40px", lineHeight: "1.5" }}>
                    {columns.map((column, index) => (
                      <ul key={index}>
                        {column.map((sm) => (
                          <li key={sm.id}>
                            <Link
                              className="tp-product-link"
                              style={{ fontSize: "12px" }}
                              href={sm.link}
                            >
                              {sm.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
