import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Sticky from "react-stickynode";
import { Link } from "react-scroll";
class CustomNavbar extends Component {
  render() {
    var { mClass, nClass, cClass, slogo, hbtnClass } = this.props;

    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <div className="nav">
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
                        to="home"
                      >
                        Home
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        title="Brand"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        to="brand"
                      >
                        Brand
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        title="Influencers"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        to="influencers"
                      >
                        Influencers
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        title="Howitworks"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        to="howitworks"
                      >
                        How it works
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        title="Blog"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        to="blog"
                      >
                        Blog
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        title="Pricing"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        to="testimonials"
                      >
                        Testimonials
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        title="About"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        to="about"
                      >
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        </div>
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
                        to="home"
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
                        to="about"
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
                        to="howitworks"
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
                        to="brand"
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
                        to="blog"
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
                        to="influencers"
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
                        to="testimonials"
                      >
                        Testimonials
                      </Link>
                    </p>
                  </div>
                </div>
                {/*<DropdownButton title="asd" menuAlign="bottom">
                  <Dropdown.Item eventKey="1">
                    <Link
                      title="Home"
                      className="nav-link"
                      spy={true}
                      smooth={true}
                      to="home"
                    >
                      Home
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2">
                    <Link
                      title="About"
                      className="nav-link"
                      spy={true}
                      smooth={true}
                      to="about"
                    >
                      About
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    <Link
                      title="Howitworks"
                      className="nav-link"
                      spy={true}
                      smooth={true}
                      to="howitworks"
                    >
                      How it works
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">
                    <Link
                      title="Brand"
                      className="nav-link"
                      spy={true}
                      smooth={true}
                      to="brand"
                    >
                      Brand
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="5">
                    <Link
                      title="Blog"
                      className="nav-link"
                      spy={true}
                      smooth={true}
                      to="blog"
                    >
                      Blog
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="6">
                    <Link
                      title="Influencers"
                      className="nav-link"
                      spy={true}
                      smooth={true}
                      to="influencers"
                    >
                      Influencers
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="7">
                    <Link
                      title="Pricing"
                      className="nav-link"
                      spy={true}
                      smooth={true}
                      to="testimonials"
                    >
                      Testimonials
                    </Link>
                  </Dropdown.Item>
                </DropdownButton> */}
              </div>
            </nav>
          </header>
        </div>
      </Sticky>
    );
  }
}

export default CustomNavbar;
