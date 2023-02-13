import React from "react";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

const Download = () => {
  return (
    <section id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <h2 className="hero__heading-2 mb-1">
              Download This Cool Application Now!
            </h2>
            <p className="hero__desc mb-5 ">
              Please download this application, it's been a lot of effort to
              make, which is when it makes you stay up all night, then also add
              weekends. So, please download it.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              <button className="button__hero button__primary">
                <AiFillApple className="mb-1 text-white" size={20} />
                Get on App Store
              </button>

              <button className="button__hero button__primary">
                <FaGooglePlay className="me-1 text-white" size={15} />
                Get on Play Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
