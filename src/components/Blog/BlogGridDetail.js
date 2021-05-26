import React, { useEffect } from "react";
import { Breadcrumb } from "react-bootstrap";
import { useParams } from "react-router";
import { useAlignmentContext } from "../../contexts/blogContext";
import BlogNavbar from "../BlogNavbar";
import FooterData from "../Footer/FooterData";
import FooterTwo from "../Footer/FooterTwo";
import Blogdetail from "./Blogdetail";
import BlogGrid from "./BlogGrid";

const BlogGridDetail = () => {
  // const { getPostDetail, selectedPost } = useAlignmentContext();
  // const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="body_wrapper">
      <BlogNavbar
        // hover="0.1"
        slogo="sticky_logo"
        mClass="menu_four blognav"
        nClass="w_menu ml-auto mr-auto blognav"
        className="blognav"
      />
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/banner_bg.png"
        Ptitle="Blog Grid"
        Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
      />
      <Blogdetail />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default BlogGridDetail;
