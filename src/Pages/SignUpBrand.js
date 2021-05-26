import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Breadcrumb from "../components/Breadcrumb";
import FooterTwo from "../components/Footer/FooterTwo";
import FooterData from "../components/Footer/FooterData";
import SignNavbar from "../components/SignNavbar";
import SignUpFormBrand from "../components/SignUpFormBrand";

const SignUpBrand = () => {
  return (
    <div className="body_wrapper">
      <SignNavbar
        mClass="menu_four"
        cClass="custom_container p0"
        nClass="pl_120 mr-auto ml-auto"
        hbtnClass="menu_cus"
      />
      <SignUpFormBrand />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default SignUpBrand;
