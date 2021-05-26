import React from "react";
import { Link } from "react-router-dom";
import Blogrightsidebar from "./Blogrightsidebar";
import BlogGridItem from "./BlogGridItem";
import ServiceData from "../Service/ServiceData";
import { convertToSlug } from "../../helpers";

const BlogGrid = ({ postList }) => {
  return (
    <section id="blog" className="blog_area_two sec_pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 blog_grid_info">
            <div className="row">
              {postList?.slice(1, 7).map((post) => {
                const { publishDate, image, text, likes, id } = post;
                return (
                  <BlogGridItem
                    id={id}
                    date={publishDate}
                    // month="jan"
                    image={image}
                    Title={text}
                    description="Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!"
                    comment={likes}
                    slug={convertToSlug(text)}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-lg-4">
            {postList?.slice(7, 19).map((post) => {
              const { publishDate, image, text, likes, id } = post;
              return (
                <Blogrightsidebar
                  id={id}
                  date={publishDate}
                  // month="jan"
                  image={image}
                  Title={text}
                  description="Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!"
                  comment={likes}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogGrid;
