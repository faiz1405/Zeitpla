import React from "react";
import { FiDatabase } from "react-icons/fi";
import { BsWifiOff, BsCode } from "react-icons/bs";
import { RiChatPrivateLine } from "react-icons/ri";

const Whyus = () => {
  return (
    <>
      <section id="whyus">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero">
                <h1 className="hero__heading">
                  Why Do You Really Have to Use This Cool Application?
                </h1>
                <p className="hero__desc">
                  To be honest, our application is often problematic. Sometimes
                  I can't submit data, sometimes it opens slowly, sometimes it
                  suddenly logs out by itself, fortunately not both.
                </p>
              </div>

              <div className="d-flex gap-2 mt-5">
                <div>
                  <p>TOTAL DON’TLOUD</p>
                  <h3>1,501,234</h3>
                </div>
                <div className="divider"></div>
                <div>
                  <p>TOTAL USERS</p>
                  <h3>1,318,829</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row gap-3 gap-md-0">
                <div className="col-md-6">
                  <div className="card__whyus ">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="bg__icon__whyus d-flex justify-content-center align-items-center">
                        <FiDatabase style={{ color: "#fe5e44" }} />
                      </div>
                      <h4 className="whyus__heading__card">Free Application</h4>
                    </div>
                    <p className="whyus__desc__card">
                      All features in this application are free, but we will
                      sell your privacy data to US special agents.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card__whyus">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="bg__icon__whyus d-flex justify-content-center align-items-center">
                        <BsWifiOff style={{ color: "#fe5e44" }} />
                      </div>
                      <h4 className="whyus__heading__card">OTP Error Code</h4>
                    </div>
                    <p className="whyus__desc__card">
                      When you log in, your OTP code isn't sent sometimes, then
                      you have to try several times until you can.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-3 gap-3 gap-md-0">
                <div className="col-md-6">
                  <div className="card__whyus">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="bg__icon__whyus d-flex justify-content-center align-items-center">
                        <RiChatPrivateLine style={{ color: "#fe5e44" }} />
                      </div>
                      <h4 className="whyus__heading__card">Insecure Data</h4>
                    </div>
                    <p className="whyus__desc__card">
                      Data is not stored properly and is prone to leaks, don't
                      be surprised if your data is suddenly on the deep web.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="card__whyus">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="bg__icon__whyus d-flex justify-content-center align-items-center">
                        <BsCode style={{ color: "#fe5e44" }} />
                      </div>
                      <h4 className="whyus__heading__card">Usually Errors</h4>
                    </div>
                    <p className="whyus__desc__card">
                      When submitting data, there's usually an error in the ajax
                      section, uh, no, that's a government application~
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whyus;
