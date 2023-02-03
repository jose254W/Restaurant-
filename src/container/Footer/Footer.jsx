import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Nairobi, Nairobi, Kenya</p>
        <p className="p__opensans">+254700000000</p>
        <p className="p__opensans">
          <a
            href="mailto:mjdiners@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            mjdiners@gmail.com
          </a>
        </p>
      </div>

      <div className="app__footer-links_logo">
        <p className="app__footer-headtext">M.J Diners</p>
        <p className="p__opensans">
          &quot;The purpose of life is to serve, to give purpose to life and
          have it make a difference.&quot;
        </p>
        <img
          src={images.spoon}
          alt="image_spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <a
            href="https://www.facebook.com/profile.php?id=100090117842791"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <FiFacebook />
          </a>
          <a
            href="https://instagram.com/mj_diners?igshid=ZDdkNTZiNTM="
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FiInstagram />
          </a>
          <a
            href="/M.J Diners.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Menu"
          >
            <MdOutlineRestaurantMenu />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">08:00 am - 03:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 M.J Diners. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
