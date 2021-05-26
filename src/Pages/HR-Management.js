import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import HRBanner from "../components/Banner/HRBanner";
import HRService from "../components/Service/HRService";
import ServiceData from "../components/Service/ServiceData";
import Video from "../components/Video";
import MarketingGetstarted from "../components/MarketingGetstarted";
import PrototypeFooter from "../components/Footer/PrototypeFooter";
import FooterData from "../components/Footer/FooterData";

import SignUpForm from "../components/SignUpForm";

const HRManagement = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        mClass="menu_four"
        cClass="custom_container p0"
        nClass="pl_120 mr-auto ml-auto"
        hbtnClass="menu_cus"
      />
      <SignUpForm />
    </div>
  );
};
export default HRManagement;
