import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Breadcrumb from "../components/Breadcrumb";
import HRService from "../components/Service/HRService";
import PrototypeService from "../components/Service/Sservice/PrototypeService";
import Partner from "../components/Partner";
import ServiceSubscribe from "../components/ServiceSubscribe";
import FooterTwo from "../components/Footer/FooterTwo";
import ServiceData from "../components/Service/ServiceData";
import FooterData from "../components/Footer/FooterData";
import DarkSoftwareServiceItem from "../components/Service/DarkSoftwareServiceItem";

const Influencers = () => {
  return (
    <div id="influencers" className="body_wrapper">
      <br />
      <br />
      <br />

      <Breadcrumb
        breadcrumbClass="breadcrumb_area breadcrumb_areax"
        imgName="beautiful-girl-4k (1).jpg"
        Ptitle="Influencers"
        Pdescription="Discover the
        most creative and inspiring campaings!"
      />
      <Partner pClass="partner_logo_area_two" pClasst="pt-0 mb-0" />
      <HRService ServiceData={ServiceData} />
    </div>
  );
};
export default Influencers;
