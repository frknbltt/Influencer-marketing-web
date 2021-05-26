import React, { Component } from "react";
import { Link } from "react-router-dom";
class BlogGridItem extends Component {
  render() {
    let { date, month, Title, description, comment, image, id } = this.props;
    return (
      <Link className="col-lg-6 hovercard" to={`/blog/${id}`}>
        <div className="blog_list_item blog_list_item_two">
          <p className="post_date">
            <h2>
              {date} <span>{month}</span>
            </h2>
          </p>
          <p>
            <img className="img-fluid" src={image} alt="" />
          </p>
          <div className="blog_content">
            <h3>{Title}</h3>
            <p>{description}</p>
            <div className="post-info-bottom">
              <p className="post-info-comments">
                <i className="icon_comment_alt" aria-hidden="true"></i>
                <span>{comment} Comments</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
export default BlogGridItem;
