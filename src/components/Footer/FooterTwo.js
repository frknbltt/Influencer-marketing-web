import React, { Component } from "react";
import AboutWidget from "./FooterWidget/AboutWidget";
import SolutionWidget from "./FooterWidget/SolutionWidget";
import TeamWidget from "./FooterWidget/TeamWidget";
import Reveal from "react-reveal/Reveal";
class FooterTwo extends Component {
  render() {
    var { fClass } = this.props;
    let FooterData = this.props.FooterData;
    return (
      <footer
        id="about"
        className={`footer_area footer_area_four f_bg ${fClass}`}
      >
        <div className="footer_top">
          <div className="container">
            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="row "
            >
              {FooterData.CompanyWidget.map((widget) => {
                return (
                  <Reveal effect="fadeInUp" key={widget.id}>
                    <div className="col-lg-3 col-md-6">
                      <div
                        className="f_widget company_widget wow fadeInLeft"
                        data-wow-delay="0.2s"
                      >
                        <div className={`navbar-brand logox`} to="/">
                          <h1 style={{ marginBottom: "0" }}>MicroGlobe</h1>
                        </div>
                        <div className="widget-wrap">
                          <p className="f_400 f_p f_size_15 mb-0 l_height34">
                            <span>Email:</span>{" "}
                            <a
                              href="mailto:saasland@gmail.com"
                              className="f_400"
                            >
                              saasland@gmail.com
                            </a>
                          </p>
                          <p className="f_400 f_p f_size_15 mb-0 l_height34">
                            <span>Phone:</span>{" "}
                            <a href="tel:948256347968" className="f_400">
                              +948 256 347 968
                            </a>
                          </p>
                        </div>
                        <form
                          action="#"
                          className="f_subscribe mailchimp"
                          method="post"
                        >
                          <input
                            type="text"
                            name="EMAIL"
                            className="form-control memail"
                            placeholder="Email"
                          />
                          <button className="btn btn-submit" type="submit">
                            <i className="ti-arrow-right"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
              <AboutWidget ftitle="About" FooterData={FooterData} />
              <TeamWidget
                ftitle="Terms and Conditions"
                FooterData={FooterData}
              />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default FooterTwo;
