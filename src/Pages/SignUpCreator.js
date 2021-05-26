import React from "react";

import Breadcrumb from "../components/Breadcrumb";
import SignUpForm from "../components/SignUpForm";
import FooterTwo from "../components/Footer/FooterTwo";
import FooterData from "../components/Footer/FooterData";
import SignNavbar from "../components/SignNavbar";

const SignUpCreator = () => {
  return (
    <div className="body_wrapper">
      <SignNavbar
        mClass="menu_four"
        cClass="custom_container p0"
        nClass="pl_120 mr-auto ml-auto"
        hbtnClass="menu_cus"
      />
      <SignUpForm />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default SignUpCreator;
