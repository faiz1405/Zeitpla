import React from "react";
import logo from "../components/img/fitur/Group 20 (2).png";
import { BsCloudSlash, BsTrash } from "react-icons/bs";
import { SlCamrecorder } from "react-icons/sl";
import { AiOutlineBell } from "react-icons/ai";

const Fitur = () => {
  return (
    <section id="fitur">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={logo}
              style={{
                boxShadow: "0px 30px 60px rgba(254, 94, 68, 0.1)",
              }}
              alt="logo"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h1 className="hero__heading">
              Are there any features in this cool application? So I'm curious~
            </h1>
            <p className="hero__desc">
              An application as cool as this will make you unable to give any
              reason to skip lectures (HAHA DONE!). Besides, you're in college
              but you rarely attend, just leave it absent!
            </p>
            <div className="row align-items-center gap-3 gap-md-0">
              <div className="col-md-6">
                <BsCloudSlash size={30} style={{ color: "#fe5e44" }} />
                <h4 className="whyus__heading__card">Not Auto Saved</h4>
                <p className="fitur__desc__card">
                  If you forget, that's it, your schedule won't be saved.
                </p>
              </div>
              <div className="col-md-6">
                <SlCamrecorder size={30} style={{ color: "#fe5e44" }} />
                <h4 className="whyus__heading__card">Si John Never Ngonten</h4>
                <p className="fitur__desc__card">
                  It's true that he has never uploaded content, I pray so that
                  he will upload it.
                </p>
              </div>
            </div>
            <div className="row align-items-center mt-3 gap-3 gap-md-0">
              <div className="col-md-6">
                <BsTrash size={30} style={{ color: "#fe5e44" }} />
                <h4 className="whyus__heading__card">Auto Delete</h4>
                <p className="fitur__desc__card">
                  Your data will be deleted automatically every day, to save our
                  server.
                </p>
              </div>
              <div className="col-md-6">
                <AiOutlineBell size={30} style={{ color: "#fe5e44" }} />
                <h4 className="whyus__heading__card">I don't know anymore</h4>
                <p className="fitur__desc__card">
                  Thinking about text for content is difficult, bro, this just
                  sucks, it's still difficult!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fitur;
