import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="col footer-col-1-style">
        <div className="footer-link">
          <h3>Address</h3>
          <ul>
            <li>Cafe</li>
            <li>Plot No. 45, Street No.14</li>
            <li>Marol MIDC Industry</li>
            <li>Estate</li>
            <li>Andheri</li>
            <li>East,Mumbai-400093</li>
          </ul>
        </div>

        <div className="footer-link">
          <h3>Help & Info</h3>
          <ul>
            <li>
              {/* <a href="./pages/about-us-page.html">About Cafe</a> */}
              <Link to={"/about-us"}>About Cafe</Link>
            </li>
            <li>Careers</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-link">
          <h3>Contact Us</h3>
          <ul>
            <li>1809-908-5647</li>
            <li>Get in Touch</li>
            <li>Chat With Us</li>
          </ul>
        </div>

        <div className="footer-link">
          <h3>Useful Links</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Payment Issues</li>
            <li>Net Banking</li>
            <li>Custom Order</li>
          </ul>
        </div>
      </div>
      <div className="col footer-col-2-style">
        <h3>Follow Us On:</h3>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-whatsapp"></i>
        <i className="fa-brands fa-x-twitter"></i>
      </div>
      <div className="col footer-col-3-style">
        <p>@2023 Railworld India. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
