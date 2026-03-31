"use client";
import { useState } from "react";

type Props = {
  onChange: (selectedLanguages: string[]) => void;
};

const Industry = [
  "Alternative Fuels",
  "Chemical & Petrochemical",
  "Food & Beverage",
  "General Industry",
  "HVAC",
  "Marine & Shipbuilding",
  "Mining",
  "Oil & Gas",
  "Pharma & Biotech",
  "Power",
  "Pulp & Paper",
  "Sugar & Ethanol",
  "Water & Wastewater",
];

export default function FilterLanguage({ onChange }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (value: string) => {
    setSelected((prev) => {
      const updated = prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value];

      onChange(updated); // send selected languages to parent
      return updated;
    });
  };

  return (
    <div className="product-filter">
      <div className="product-filter-categories">
        <ul>
          {Industry.map((indus) => (
            <li key={indus}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // prevent page jump
                  toggleOption(indus);
                }}
                style={{
                  fontWeight: selected.includes(indus) ? "bold" : "normal",
                }}
              >
                {indus}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
