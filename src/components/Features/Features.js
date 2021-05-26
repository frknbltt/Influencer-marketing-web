import React, { Component } from "react";
import Featuresitems from "./Featuresitems";

class Brand extends Component {
  render() {
    var { aClass } = this.props;
    return (
      <section id="brand" className={`agency_featured_area bg_color ${aClass}`}>
        <div className="container">
          <h2
            className="f_size_30 f_600 t_color3 l_height40 text-center wow fadeInUp"
            data-wow-delay="0.3s"
          >
            Brand
          </h2>
          <div className="features_info">
            <img
              className="dot_img"
              src={require("../../img/home4/dot.png")}
              alt=""
            />
            <Featuresitems
              rowClass="row flex-row-reverse"
              aClass="pr_70 pl_70"
              fimage="kimlerle-calisiyoruz.jpg"
              ftitle="WHY MICROGLOBE ?"
              descriptions="We provide a unique experience for all companies in the successful development, maintenance, measurement and optimizing of effective marketing programs. Find the phenomena closest to your brand with the custom selection filter See and collaborate on statistics of all influencers registered in our system, such as YouTube, Facebook, Twitter, Instagram, Snapchat, TikTok vb."
              to="orta"
              button2="none"
            />
            <Featuresitems
              id="orta"
              rowClass="row agency_featured_item_two"
              aClass="pl_100"
              fimage="influencer-faydalari.jpg"
              ftitle="BENEFİTS OF MICROGLOBE"
              descriptions="To promote your product and service. To increase brand awareness. To increase the reliability of your company, product, service.
              Allows you to find potential customers and increases your sales.
               To create an effective feedback mechanism."
              to="alt"
              button2="none"
            />
            <Featuresitems
              id="alt"
              rowClass="row flex-row-reverse"
              aClass="pr_70 pl_70"
              fimage="daha-fazlasi.jpg"
              ftitle="WHO DO WE WORK WİTH?"
              descriptions="Phenomenon, influencer, talent we work with the most creative influencers on all social media platforms and well-known, no matter what you call them.

              – Social Media Phenomena (Youtube, Twitter, Instagram, etc.)
              – Singers, Actors, TV
              and Radio Presenters – Bloggers, Instructors, Journalists, Photos
              – Experts, Managers, Analysts, Writers
              – Social media pages and groups, Channels"
              button="none"
            />

            <div className="dot middle_dot">
              <span className="dot1"></span>
              <span className="dot2"></span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Brand;
