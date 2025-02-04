import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container padding">
        <div className="box logo">
          <h1>LUCKY LEARNING</h1>
          <span>ONLINE EDUCATION & LEARNING</span>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>

          <i className="fab fa-facebook-f icon"></i>

          <i className="fab fa-twitter icon"></i>
          <i className="fab fa-instagram icon"></i>
        </div>
        <div className="box link">
          <h3>Explore</h3>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Courses</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="box link">
          <h3>Quick Links</h3>
          <ul>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy</li>
            <li>Feedbacks</li>
          </ul>
        </div>
        <div className="box">
          <h3>Recent Post</h3>
        </div>
        <div className="box last">
          <h3>Have a Questions?</h3>
          <ul>
            <li>
              <i className="fa fa-map"></i>
              subhash chandra academy in kasganj
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              +91 1452563547
            </li>
            <li>
              <i className="fa fa-paper-plane"></i>
              info@yourdomain.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
