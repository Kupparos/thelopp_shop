import React from "react";
import "./footer.css";
import { TiPointOfInterest } from "react-icons/ti";
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_info">
          <div className="footer_company_info">
            <div className="footer_logo">
              <TiPointOfInterest className="logo_icon"/> THE LOOP
            </div>
            <p className="footer_logo_text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              ex molestias nam odio voluptas ullam voluptatem voluptatum
              doloremque.
            </p>
          </div>
          <div className="footer_main_links">
            <h2>Main links</h2>
            <a href="/">About company</a>
            <a href="/">Catalog</a>
            <a href="/">Delivery</a>
            <a href="/">Payment</a>
          </div>
          <div className="footer_category">
            <h2>Categories</h2>
            <a href="/">Mans clothing</a>
            <a href="/">Womans clothing</a>
            <a href="/">Kids clothing</a>
            <a href="/">For animals</a>
          </div>
          <div className="footer_useful_links">
            <h2>Useful links</h2>
            <a href="/">Size table</a>
            <a href="/">Fashion blog</a>
            <a href="/">Our goal</a>
          </div>
          <div className="footer_socials">
            <h2>Socials</h2>
            <a href="https://facebook.com">
              <ImFacebook2 className="social_logo"/> Facebook
            </a>
            <a href="https://instagram.com">
              <BsInstagram className="social_logo"/> Instagram
            </a>
            <a href="https://twitter.com">
              <BsTwitter className="social_logo"/> Twitter
            </a>
          </div>
        </div>
        <div className="footer_copyright">
          <p className="copyright">
            Copyright &copy; 2022. All rights reserved
          </p>
          <a href="/">Private policy</a>
        </div>
      </div>
    </div>
  );
}
