import React, { useEffect, useContext } from "react";
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
import Brandhome from "./Brandhome";
import { useAlignmentContext } from "../contexts/blogContext";

const DigitalMarketing = () => {
  const { getPosts, posts } = useAlignmentContext();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="body_wrapper">
      <CustomNavbar
        mClass="menu_four"
        cClass="custom_container p0"
        nClass="pl_120 mr-auto ml-auto"
        hbtnClass="menu_cus"
      />
      <AgencyBanner BannerData={BannerData} />
      <Howitworkscard />
      <Brandhome />
      <Service />
      <BlogGrid postList={posts} />
      <MarketingTestimonial BannerData={BannerData} />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default DigitalMarketing;
