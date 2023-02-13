import React from "react";
import logo from "../components/img/navbar/logo.png";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row ">
          <div className="col-md-4">
            <img
              src={logo}
              width="140"
              height="38"
              className="d-inline-block align-top"
              alt="logo navbar"
            />
            <p className="mt-2">
              An application that helps you to make class schedules, mabar
              schedules, meal schedules, English league schedules, and other
              schedules. Even though there are many errors, at least we have
              tried our best.
            </p>
            <p className="footer__copy">COPYRIGHT (C) 2021. DESIGN BY NAUVAL</p>
          </div>
          <div className="col-md-2 ">
            <h3 className="heading__footer">Sitemap</h3>

            <ul className="list-unstyled d-flex flex-column gap-3">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Feature</a>
              </li>
              <li>
                <a>Price</a>
              </li>
              <li>
                <a>Testimoni</a>
              </li>
              <li>
                <a>Download</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 ">
            <h3 className="heading__footer">Partner</h3>

            <ul className="list-unstyled d-flex flex-column gap-3">
              <li>
                <a>Ganol</a>
              </li>
              <li>
                <a>Waptrick</a>
              </li>
              <li>
                <a>Zelda</a>
              </li>
              <li>
                <a>Stafaband</a>
              </li>
              <li>
                <a>MyWapBlog</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 ">
            <h3 className="heading__footer mb-2">Stay Conencted</h3>
            <p>Check out our pansos on the following social media:</p>
            <div className="d-flex">
              <div className="bg__icon d-flex align-items-center justify-content-center">
                <a>
                  {" "}
                  <AiOutlineInstagram style={{ color: "#fe5e44" }} size={30} />
                </a>
              </div>
              <div className="bg__icon d-flex align-items-center justify-content-center">
                <a>
                  {" "}
                  <AiOutlineFacebook style={{ color: "#fe5e44" }} size={30} />
                </a>
              </div>
              <div className="bg__icon d-flex align-items-center justify-content-center">
                <a>
                  {" "}
                  <CiTwitter style={{ color: "#fe5e44" }} size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
