"use client";
import { useState } from "react";

type Props = {
  onChange: (category: string | null) => void;
};

const categories = [
  "Success Stories",
  "Webinars",
  "Videos",
  "Application Guides",
  "Published Papers",
];

export default function KnowledgeCenterFilterCategory({ onChange }: Props) {
  const [active, setActive] = useState<string | null>(null);

  const handleSelect = (category: string) => {
    setActive(category);
    onChange(category); // ✅ send single category
  };

  return (
    <div className="product-filter">
      <div className="product-filter-categories">
        <ul>
          {categories.map((cat) => (
            <li key={cat}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleSelect(cat);
                }}
                style={{
                  fontWeight: active === cat ? "bold" : "normal",
                }}
              >
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
