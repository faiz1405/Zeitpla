import React from "react";
import logo from "../components/img/navbar/logo.png";
import { BsArrowRight } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md py-3 px-3">
      <div className="container">
        <a className="navbar-brand" href="#logo">
          <img
            src={logo}
            width="140"
            height="38"
            className="d-inline-block align-top"
            alt="logo navbar"
          />{" "}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto gap-4">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#feature">
                Feature
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                testimoni
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="button button__primary nav-link text-center px-4"
                href="#"
              >
                Download
                <BsArrowRight style={{ color: "white" }} className="ms-2" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
