import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Breadcrumbx from "../components/Breadcrumbx";
import HRService from "../components/Service/HRService";
import PrototypeService from "../components/Service/Sservice/PrototypeService";
import Partner from "../components/Partner";
import ServiceSubscribe from "../components/ServiceSubscribe";
import FooterTwo from "../components/Footer/FooterTwo";
import ServiceData from "../components/Service/ServiceData";
import FooterData from "../components/Footer/FooterData";
import DarkSoftwareServiceItem from "../components/Service/DarkSoftwareServiceItem";

const Brandhome = () => {
  return (
    <div id="brand" className="body_wrapper">
      <br />
      <br />
      <br />

      <Breadcrumbx
        breadcrumbClass="breadcrumb_area breadcrumb_areax"
        imgName="Yenivideo.mp4"
        Ptitle="Brand"
        Pdescription="Tell Us About Your Requests"
      />
    </div>
  );
};
export default Brandhome;
