import React, { Component } from "react";

import Sticky from "react-stickynode";
import { Link } from "react-router-dom";
class SignNavbar extends Component {
  render() {
    var { mClass, nClass, cClass, slogo, hbtnClass, hover } = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
          <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass}`}>
              <Link className={`navbar-brand ${slogo} logox`} to="/">
                <h1 style={{ marginBottom: "0" }}>MicroGlobe</h1>
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                  <li className="nav-item">
                    <Link
                      title="Home"
                      className="nav-link"
                      spy={true}
                      smooth={true}
                      to="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      title="About"
                      className="nav-link"
                      spy={true}
                      smooth={true}
                      to="/"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      title="Howitworks"
                      className="nav-link"
                      spy={true}
                      smooth={true}
                      to="/"
                    >
                      How it works
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      title="Brand"
                      className="nav-link"
                      spy={true}
                      smooth={true}
                      to="/"
                    >
                      Brand
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      title="Blog"
                      className="nav-link"
                      spy={true}
                      smooth={true}
                      to="/"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      title="Influencers"
                      className="nav-link"
                      spy={true}
                      smooth={true}
                      to="/"
                    >
                      Influencers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      title="Pricing"
                      className="nav-link"
                      spy={true}
                      smooth={true}
                      to="/"
                    >
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div className="mobilnav">
          <header className="header_area">
            <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
              <div className={`container ${cClass}`}>
                <Link className={`navbar-brand ${slogo} logox`} to="/">
                  <h1 style={{ marginBottom: "0" }}>MicroGlobe</h1>
                </Link>
                <div class="dropdown">
                  <span>
                    <div class="container">
                      <div class="bar1"></div>
                      <div class="bar2"></div>
                      <div class="bar3"></div>
                    </div>
                  </span>
                  <div class="dropdown-content">
                    <p>
                      <Link
                        title="Home"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        to="/"
                      >
                        Home
                      </Link>
                    </p>
                    <p>
                      <Link
                        title="About"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        to="/"
                      >
                        About
                      </Link>
                    </p>
                    <p>
                      <Link
                        title="Howitworks"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        to="/"
                      >
                        How it works
                      </Link>
                    </p>
                    <p>
                      <Link
                        title="Brand"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        to="/"
                      >
                        Brand
                      </Link>
                    </p>
                    <p>
                      <Link
                        title="Blog"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        to="/"
                      >
                        Blog
                      </Link>
                    </p>
                    <p>
                      <Link
                        title="Influencers"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        to="/"
                      >
                        Influencers
                      </Link>
                    </p>
                    <p>
                      <Link
                        title="Pricing"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        to="/"
                      >
                        Testimonials
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </Sticky>
    );
  }
}

export default SignNavbar;
