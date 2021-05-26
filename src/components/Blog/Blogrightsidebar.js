import React, { Component } from "react";
import { Link } from "react-router-dom";

class Blogrightsidebar extends Component {
  render() {
    let { date, month, Title, description, comment, image, id } = this.props;
    return (
      <Link className="col-lg-6 hovercard" to={`/blog/${id}`}>
        <div className="blog-sidebar" style={{ marginBottom: "20px" }}>
          {/* <div className="widget sidebar_widget widget_search">
          <form action="#" className="search-form input-group">
            <input
              type="search"
              className="form-control widget_input"
              placeholder="Search"
            />
            <button type="submit">
              <i className="ti-search"></i>
            </button>
          </form>
        </div> */}
          <div className="widget sidebar_widget widget_recent_post mt_50">
            {/* <div className="widget_title">
            <h3 className="f_p f_size_20 t_color3">Recent posts</h3>
            <div className="border_bottom"></div>
          </div> */}

            <div className="media post_item" key={id}>
              <img
                style={{ width: "90px", maxHeight: "60px" }}
                src={image}
                alt=""
              />
              <div className="media-body">
                <h3 className="f_size_16 f_p f_400">{Title}</h3>

                <div className="entry_post_info">{date}</div>
              </div>
            </div>
          </div>
          {/* <div className="widget sidebar_widget widget_categorie mt_50">
          <div className="widget_title">
            <h3 className="f_p f_size_20 t_color3">Categories</h3>
            <div className="border_bottom"></div>
          </div>
          <ul className="list-unstyled">
            <li>
              {" "}
              
                <span>Fashion</span>
                <em>(54)</em>
            {" "}
            </li>
            <li>
              {" "}
              
                <span>Food for thought</span>
                <em>(83)</em>
            {" "}
            </li>
            <li>
              {" "}
              
                <span>Gaming</span>
                <em>(96)</em>
            {" "}
            </li>
            <li>
              {" "}
              
                <span>Music</span>
                <em>(38)</em>
            {" "}
            </li>
            <li>
              {" "}
              
                <span>Uncategorized</span>
                <em>(44)</em>
            {" "}
            </li>
            <li>
              {" "}
              
                <span>SaasLand</span>
                <em>(44)</em>
            {" "}
            </li>
            <li>
              {" "}
              
                <span>Project Management</span>
                <em>(44)</em>
            {" "}
            </li>
            <li>
              {" "}
              
                <span>Wireframing</span>
                <em>(44)</em>
            {" "}
            </li>
          </ul>
        </div> */}
          {/* <div className="widget sidebar_widget widget_tag_cloud mt_50">
          <div className="widget_title">
            <h3 className="f_p f_size_20 t_color3">Tags</h3>
            <div className="border_bottom"></div>
          </div>
          <div className="post-tags">
            SaasLand
            Web Design
            Saas
            Cooling System
            Corporate
            Software
            Landing
            Wheels
          </div>
        </div> */}
        </div>
      </Link>
    );
  }
}
export default Blogrightsidebar;
