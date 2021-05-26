import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
class AboutWidget extends Component {
  render() {
    let FooterData = this.props.FooterData;
    var { ftitle } = this.props;
    return (
      <Reveal effect="fadeInUp" duration={1200}>
        <div className="react-reveal fadeInUp col-lg-3 col-md-6">
          <div
            className="f_widget company_widget wow fadeInLeft"
            data-wow-delay="0.4s"
          >
            <h3 className="f-title f_600 t_color f_size_18 ">{ftitle}</h3>
            <ul className="list-unstyled f_list">
              MicroGlobe is a data-driven automated influencer marketing
              platform for brands and influencers to create value-added
              collaboration and manage campaigns using real-time analytics.
            </ul>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default AboutWidget;
