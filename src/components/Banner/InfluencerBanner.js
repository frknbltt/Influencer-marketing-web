import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import Slider from "../Slider";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
class InfluencersBanner extends Component {
  render() {
    let BannerData = this.props.BannerData;
    return (
      <section id="home" className="agency_banner_area bg_color">
        <img
          style={{ width: "100%", height: "150%" }}
          className="banner_shap mobily"
          src={require("../../imgbackground/035244_5599655f001a46ba9751b76615b316be.webp")}
          alt="First slide"
        />

        <div className="container custom_container">
          <div
            style={{ justifyContent: "center" }}
            className="row align-items-center"
          >
            <div
              style={{ justifyContent: "center" }}
              className="col-lg-5 d-flex text-center"
            >
              <div>
                <Reveal>
                  {BannerData.AgencyText.map((Agency) => {
                    return (
                      <React.Fragment key={Agency.id}>
                        <h2
                          style={{ fontSize: "25px" }}
                          className="f_p f_700 f_size_50 w_color l_height50 mb_20"
                          data-wow-delay="0.3s"
                        >
                          Become a MicroGlober
                        </h2>
                        <p
                          className="f_400 l_height28 wow fadeInLeft w_color"
                          data-wow-delay="0.4s"
                        >
                          Show Yourself!
                        </p>
                      </React.Fragment>
                    );
                  })}
                  <div
                    style={{ marginTop: "0" }}
                    className="action_btn d-flex align-items-center mt_60"
                  >
                    <Link
                      to="/influencers/signupcreator"
                      className="agency_banner_btn_tree"
                      data-wow-delay="0.5s"
                    >
                      Sign Up
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default InfluencersBanner;
