"use client";
import { useState } from "react";

type Props = {
  onChange: (sizes: string[]) => void;
};

const categories = [
  "Accessory",
  "Actuator",
  "Ball Valve",
  "Butterfly Valve",
  "Check Valve",
  "Knife Gate Valve",
];

export default function FilterCategory({ onChange }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (value: string) => {
    setSelected((prev) => {
      const updated = prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value];

      onChange(updated); // send selected categories to AllProducts
      return updated;
    });
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
                  e.preventDefault(); // prevent page jump
                  toggleOption(cat);
                }}
                style={{
                  fontWeight: selected.includes(cat) ? "bold" : "normal",
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
