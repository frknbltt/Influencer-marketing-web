import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import AgencyBanner from "../components/Banner/AgencyBanner";
import BannerData from "../components/Banner/BannerData";
import MarketingService from "../components/Service/MarketingService";
import ServiceData from "../components/Service/ServiceData";
import AgencyAbout from "../components/About/AgencyAbout";
import Features from "../components/Features/Features";
import MarketingTestimonial from "../components/Testimonial/MarketingTestimonial";
import AgencyAction from "../components/AgencyAction";
import FooterTwo from "../components/Footer/FooterTwo";
import FooterData from "../components/Footer/FooterData";
import BlogGrid from "../components/Blog/BlogGrid";
import Howitworkscard from "../components/Card";
import Service from "./Service";
import SignNavbar from "../components/SignNavbar";
import Reveal from "react-reveal/Reveal";
import { Link } from "react-router-dom";

const Creator = () => {
  return (
    <div className="body_wrapper">
      <SignNavbar
        mClass="menu_four"
        cClass="custom_container p0"
        nClass="pl_120 mr-auto ml-auto"
        hbtnClass="menu_cus"
      />
      <section id="home" className="agency_banner_area bg_color">
        <img
          style={{ width: "100%", height: "150%" }}
          className="banner_shap mobily"
          src={require("../imgbackground/1691795.jpg")}
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
                          Make a connection
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
      <Features />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default Creator;
