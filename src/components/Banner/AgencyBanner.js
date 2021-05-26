import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import Slider from "../Slider";
import { Carousel } from "react-bootstrap";
import { Link } from "react-scroll";
class AgencyBanner extends Component {
  render() {
    let BannerData = this.props.BannerData;
    return (
      <section id="home" className="agency_banner_area bg_color">
        <Carousel className="banner_shap">
          <Carousel.Item interval={4000}>
            <img
              style={{ width: "auto", height: "800px" }}
              className="d-block w-100 mobilx"
              src={require("../../imgbackground/iStock-1280349927-1260x840.jpg")}
              alt="First slide"
            />
          </Carousel.Item>{" "}
          <Carousel.Item interval={4000}>
            <img
              style={{ width: "auto", height: "800px" }}
              className="d-block w-100 mobilx"
              src={require("../../imgbackground/343635.jpg")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              style={{ width: "auto", height: "800px" }}
              className="d-block w-100 mobilx"
              src={require("../../imgbackground/1547231575-og-blog_instagram.jpg")}
              alt="First slide"
            />
          </Carousel.Item>{" "}
          <Carousel.Item interval={4000}>
            <img
              style={{ width: "auto", height: "800px" }}
              className="d-block w-100 mobilx"
              src={require("../../imgbackground/182-1826005_family-travel-photos-hd.jpg")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              style={{ width: "auto", height: "800px" }}
              className="d-block w-100 mobilx"
              src={require("../../imgbackground/KF5QIGBF3FAC5CGOKHTGDWIF7A.jpg")}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>

        <div className="container custom_container">
          <div className="row">
            <div className="col-lg-5 d-flex align-items-center">
              <div className="agency_content">
                <Reveal className="blur" effect="fadeInUp ">
                  {BannerData.AgencyText.map((Agency) => {
                    return (
                      <React.Fragment className="blur" key={Agency.id}>
                        <h2
                          className="f_700 t_color3 mb_40 wow fadeInLeft "
                          data-wow-delay="0.3s"
                        >
                          Become a MicroGlober
                        </h2>
                        <p
                          className="f_400 l_height28 wow fadeInLeft t_color4"
                          data-wow-delay="0.4s"
                        >
                          Create Stories. Make Impact.
                        </p>
                      </React.Fragment>
                    );
                  })}
                  <div className="action_btn d-flex align-items-center mt_60">
                    <Link
                      spy={true}
                      smooth={true}
                      to="influencers"
                      className="btn_hover agency_banner_btn wow fadeInLeft"
                      data-wow-delay="0.5s"
                    >
                      I'M A CREATOR
                    </Link>
                    <Link
                      spy={true}
                      smooth={true}
                      to="brand"
                      className="agency_banner_btn_two wow fadeInLeft"
                      data-wow-delay="0.7s"
                    >
                      I'M A BRAND
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="partner_logo none">
            {BannerData.ClientsLogo.map((item) => {
              return (
                <Reveal key={item.id} effect="fadeInLeft" duration={1500}>
                  <div className="p_logo_item">
                    <a href="/#">
                      <img
                        src={require("../../img/home3/" + item.image)}
                        alt=""
                      />
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
export default AgencyBanner;
