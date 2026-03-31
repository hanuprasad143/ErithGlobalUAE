import React from "react";
// import Image from "next/image";
// import calling from "@/assets/img/icon/calling.svg";
// import HeaderLanguage from "./header-language";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function HeaderTopArea() {
  return (
    <div
      className="tp-header-top grey-bg"
      style={{ backgroundColor: "#f3f4f8" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tp-heder-info d-flex justify-content-center justify-content-lg-start align-items-center ">
              {/* <div className="tp-header-info-item d-none d-md-block"> */}
              <div className="tp-header-info-item">
                <Link href="/about">
                  <span style={{ color: "#292929" }}>About</span>
                </Link>
              </div>
              <div className="tp-header-info-item">
                <Link href="/contact">
                  <span style={{ color: "#292929" }}>Contact Us</span>
                </Link>
              </div>
              <div className="tp-header-info-item">
                <Link href="/careers">
                  <span style={{ color: "#292929" }}>Careers</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tp-heder-info d-flex justify-content-center justify-content-lg-end align-items-center ms-lg-5">
              <div className="tp-header-info-item d-none d-md-block">
                <Link href="/contact#nearby-locations">
                  <span style={{ color: "#292929" }}>Near By Locations</span>
                </Link>
              </div>
              <div className="tp-header-info-item">
                <Link href="https://ae.linkedin.com/company/erith-global">
                  <FaLinkedin />
                  <span style={{ color: "#292929" }}>LinkedIn</span>
                </Link>
              </div>
              <div className="tp-header-info-item">
                <Link href="https://www.instagram.com/erithgroup/">
                  <FaInstagram />
                  <span style={{ color: "#292929" }}>Instagram</span>
                </Link>
              </div>
              <div className="tp-header-info-item">
                <Link href="https://www.youtube.com/@erithme2020">
                  <FaYoutube />
                  <span style={{ color: "#292929" }}>Youtube</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
