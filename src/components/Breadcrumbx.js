import React, { Component } from "react";
import Reveal from "react-reveal/Reveal/";
import { Link } from "react-router-dom";
class Breadcrumbx extends Component {
  render() {
    var { Ptitle, Pdescription, breadcrumbClass, imgName } = this.props;
    return (
      <section id="brand" className={`${breadcrumbClass}`}>
        <video
          video
          autoPlay="autoplay"
          loop="true"
          style={{ width: "100%" }}
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
            <Link to="/brand">
              <button className="agency_banner_btn_treee">View Content</button>
            </Link>
          </div>
        </div>
        <h4
          style={{
            paddingTop: "40px",
            letterSpacing: "10px",
            wordSpacing: "10px",
          }}
          className="f_size_18 f_400 f_p text-center l_height28 mb_70 mobil"
        ></h4>
      </section>
    );
  }
}
export default Breadcrumbx;
