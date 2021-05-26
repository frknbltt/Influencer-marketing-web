import React from "react";
import SignUpImg from "../img/new/solution_02.jpg";
const SignUpFormBrand = () => {
  return (
    <section
      className="agency_banner_area bg_color"
      style={{ paddingTop: "100px" }}
    >
      <div className="banner_shap">
        <img
          style={{ width: "100%", height: "800px" }}
          src={SignUpImg}
          alt="s"
        />
      </div>
      <div
        className="container"
        style={{ width: "60%", display: "flex", justifyContent: "center" }}
      >
        <div
          className="sign_info shadowDiv"
          style={{
            border: "none",
            borderLeft: "15px solid red",
            padding: "30px",
          }}
        >
          <div className="column">
            <h2 className="f_p f_600 f_size_24 t_color3 mb_40">
              Brand Registration
            </h2>
            <form action="#" className="login-form sign-in-form">
              <div className="form-group text_box">
                <label className="f_p text_c f_400">Username</label>
                <input type="text" placeholder="Name" />
              </div>
              <div className="form-group text_box">
                <label className="f_p text_c f_400">Email Address</label>
                <input type="email" placeholder="Microglobe@gmail.com" />
              </div>
              <div className="form-group text_box">
                <label className="f_p text_c f_400">Password</label>
                <input type="password" placeholder="******" />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <button type="submit" className="btn_three">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUpFormBrand;
