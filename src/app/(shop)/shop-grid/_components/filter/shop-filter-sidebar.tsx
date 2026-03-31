import React, { useState } from "react";
import PriceFilter from "./price-filter";
import FilterCategory from "./filter-category";
import FilterAges from "./filter-ages";
import FilterAuthor from "./filter-author";
import FilterLanguage from "./filter-language";
import TorqueFilter from "./torque-filter";

type Props = {
  onProductChnage: (sizes: string[]) => void;
  onSizeChange: (sizes: string[]) => void;
  onPressureChange: (sizes: string[]) => void;
  onTorqueChange: (sizes: string[]) => void;
  onIndustryChange: (sizes: string[]) => void;
};

export default function ShopFilterSidebar({
  onProductChnage,
  onSizeChange,
  onPressureChange,
  onTorqueChange,
  onIndustryChange,
}: Props) {
  const [open, setOpen] = useState(true);

  return (
    <div className="tp-shop-grid-sidebar mr-10">
      {/* Price Filter */}
      <div className="tp-shop-widget mb-35">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 className="tp-shop-widget-title no-border">Filter</h3>
          <PriceFilter />
        </div>
      </div>

      {/* Product Type */}
      <div className="tp-shop-widget">
        <h3 className="tp-shop-widget-title">Product Type</h3>
        <FilterCategory onChange={onProductChnage} />
      </div>

      {/* Size */}
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Size</h3>
        <FilterAges onChange={onSizeChange} />
      </div>

      {/* Pressure */}
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">
          Maximum Allowable Pressure Rating
        </h3>
        <FilterAuthor onChange={onPressureChange} />
      </div>

      {/* Torque */}
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Torque</h3>
        <TorqueFilter onChange={onTorqueChange} />
      </div>

      {/* Industry */}
      <div className="tp-shop-widget mb-50">
        <h3
          className="tp-shop-widget-title tp-widget-toggle"
          onClick={() => setOpen(!open)}
        >
          Industry
          <span className={`tp-widget-arrow ${open ? "open" : ""}`}>▼</span>
        </h3>

        {open && (
          <div className="tp-widget-content">
            <FilterLanguage onChange={onIndustryChange} />
          </div>
        )}
      </div>
    </div>
  );
}
