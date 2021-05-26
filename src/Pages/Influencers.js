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
import Influencers from "../components/Influencers";
import SignNavbar from "../components/SignNavbar";
import Partner from "../components/Partner";
import HRService from "../components/Service/HRService";
import InfluencersBanner from "../components/Banner/InfluencerBanner";

const DigitalMarketing = () => {
  return (
    <div className="body_wrapper">
      <SignNavbar
        mClass="menu_four"
        cClass="custom_container p0"
        nClass="pl_120 mr-auto ml-auto"
        hbtnClass="menu_cus"
      />
      <InfluencersBanner BannerData={BannerData} />
      <Partner pClass="partner_logo_area_two" pClasst="pt-0 mb-0" />
      <HRService ServiceData={ServiceData} />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default DigitalMarketing;
