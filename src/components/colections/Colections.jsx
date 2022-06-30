import React from "react";
import "./colections.css";
import { CgArrowLongRight } from "react-icons/cg";

export default function Colections() {
  return (
    <div className="collections">
      <div className="container">
        <div className="man_col">
          <div className="description">
            <h1>
              <b>MANS</b> COLLECTION
            </h1>
            <h2>Shoes, pullovers, suits</h2>
            <button>
              <a href="/">
                <CgArrowLongRight className="arrow" />
              </a>
            </button>
          </div>
          <div className="man_img"></div>
        </div>
        <div className="woman_col">
          <div className="description">
            <h1>
              <b>WOMANS</b> COLLECTION
            </h1>
            <h2>Shoes, pullovers, suits</h2>
            <button>
              <a href="/">
                <CgArrowLongRight className="arrow" />
              </a>
            </button>
          </div>
          <div className="woman_img"></div>
        </div>
      </div>
    </div>
  );
}
