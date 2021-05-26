import React, { Component } from "react";
import Reveal from "react-reveal/Reveal/";
import { Link } from "react-router-dom";
class Breadcrumb extends Component {
  render() {
    var { Ptitle, Pdescription, breadcrumbClass, imgName } = this.props;
    return (
      <>
        <section style={{ height: "auto" }} className={`${breadcrumbClass}`}>
          <img
            style={{ width: "100%", height: "130%" }}
            className="breadcrumb_shap"
            src={require("../imgbackground/" + imgName)}
            alt=""
          />
          <div className="container">
            <div className="breadcrumb_content  ">
              <Reveal effect="">
                <h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20 h4mobil">
                  {Ptitle}
                </h1>
              </Reveal>
              <p className="f_400 w_color f_size_16 l_height26 mobilp">
                {Pdescription}
              </p>
              <Link to="/influencers">
                <button className="agency_banner_btn_treee">
                  View Content
                </button>
              </Link>
            </div>
          </div>
        </section>
        <h4
          style={{
            paddingTop: "15px",
            letterSpacing: "10px",
            wordSpacing: "10px",
          }}
          className="f_size_18 f_400 f_p text-center l_height28 mb_70"
        >
          WE EXPECT ALL CONTENT BUILDERS
        </h4>
      </>
    );
  }
}
export default Breadcrumb;
