import React, { Component } from "react";

class Partner extends Component {
  render() {
    var { pClass, pClasst } = this.props;
    return (
      <section style={{ paddingTop: "150px" }} className={`${pClass}`}>
        <div className="container">
          <div className={`partner_logo_area_four ${pClasst}`}>
            <h4
              style={{ letterSpacing: "10px", wordSpacing: "10px" }}
              className="f_size_18 f_400 f_p text-center l_height28 mb_70"
            >
              WE EXPECT ALL CONTENT BUILDERS
            </h4>
            <h4 className="f_size_16 f_400 f_p text-center l_height28 mb_70">
              Our global community consists of social media phenomena that
              create creative content from almost any genre, interests you can
              imagine. It is very easy to connect with all the prominent brands
              of different sectors, from fitness to food. Regardless of your
              age, gender, region of presence or specialty, there is a team here
              that relies on your interests and the power of the content you
              create. We aim to bring together the best and celebrities of all
              social media platforms such as Youtuber, Instagram Phenomena,
              Facebook Popular Pages, Twitter Phenomena, Blogger, Twitch,
              Snapchat with brands.
            </h4>
          </div>
        </div>
      </section>
    );
  }
}

export default Partner;
