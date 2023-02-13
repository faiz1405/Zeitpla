import React from "react";
import {
  AiFillStar,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import testimonial from "../components/img/hero/testimonial.png";
import logoHero from "../components/img/hero/hero__image.png";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="hero">
                <h1 className="hero__heading">
                  An easy way to organize your lecture schedule
                </h1>
                <p className="hero__desc">
                  It doesn't matter if you come to class late because you
                  overslept; coming to college because you forgot the schedule
                  is really not cool. This app is your best friend now, brodie~
                </p>
              </div>

              <div className="d-flex flex-column flex-md-row gap-2 mt-5">
                <button className="button__hero button__primary">
                  Learn More
                </button>
                <button className="button__hero button__secondary">
                  Play Demo
                </button>
              </div>

              <div className="card">
                <div className="d-flex gap-2">
                  <div className="bg__icon text-center">
                    <AiFillStar style={{ color: "white" }} className="mb-2" />
                  </div>
                  <div className="bg__icon-gray text-center">
                    <AiFillStar style={{ color: "white" }} className="mb-2" />
                  </div>
                  <div className="bg__icon-gray text-center">
                    <AiFillStar style={{ color: "white" }} className="mb-2" />
                  </div>
                  <div className="bg__icon-gray text-center">
                    <AiFillStar style={{ color: "white" }} className="mb-2" />
                  </div>
                  <div className="bg__icon-gray text-center">
                    <AiFillStar style={{ color: "white" }} className="mb-2" />
                  </div>
                </div>
                <p className="card__testimonial my-3">
                  “Damn application, I can't give any more excuses for skipping
                  class, the fierce Mr. Sanusi! But now I study diligently,
                  thank you Garena!”
                </p>

                <div className="d-flex align-items-center gap-3">
                  <img src={testimonial} alt="testimonial" />
                  <div>
                    <h1 className="card__heading">Jhon IQ 7</h1>
                    <p className="card__desc">
                      {" "}
                      Mahasiswa Boating School Ny. Puff
                    </p>
                  </div>
                  <div className="button__testimonial  d-flex align-items-center justify-content-center">
                    <AiOutlineArrowLeft
                      style={{ color: "#fe5e44" }}
                      className="text-center"
                    />
                  </div>
                  <div className="button__testimonial d-flex align-items-center justify-content-center">
                    <AiOutlineArrowRight
                      style={{ color: "#fe5e44" }}
                      className="text-center"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={logoHero} className="img-fluid" alt="logo hero" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
