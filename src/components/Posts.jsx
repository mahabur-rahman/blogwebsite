import React from "react";
import BlogPostCard from "./BlogPostCard";
import blogPostData from "../Data/BlogPostData";
import aboutImg from "../images/about.jpg";
import { NavLink } from "react-router-dom";
import {
  FaFacebookSquare,
  FaDribbble,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Posts = () => {
  return (
    <>
      <section id="posts">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-xl-8 col-lg-8 col-md-11 mx-auto">
              <div className="row">
                {blogPostData.map((data) => (
                  <BlogPostCard key={data.id} {...data} />
                ))}
              </div>
            </div>

            {/* sidebar */}
            <div className="col-xl-3 col-lg-3 col-md-6 mt-5 mt-lg-0 mx-auto">
              <div className="about-details">
                <h5 className="text-uppercase text-center">about me</h5>
                <div className="about-img">
                  <img src={aboutImg} className="img-fluid" alt="About Me" />
                </div>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa deserunt beatae magni odio tempora explicabo.
                  </p>
                  <div className="categories">
                    <h4 className="text-center">Categories</h4>

                    <div className="cat-lists d-flex justify-content-around my-3">
                      <div className="cat-list1">
                        <ul>
                          <li>
                            <NavLink to="/">Life</NavLink>
                          </li>
                          <li>
                            <NavLink to="/">Sports</NavLink>
                          </li>
                          <li>
                            <NavLink to="/">Tech</NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="cat-list2">
                        <ul>
                          <li>
                            <NavLink to="/">Music</NavLink>
                          </li>
                          <li>
                            <NavLink to="/">Style</NavLink>
                          </li>
                          <li>
                            <NavLink to="/">Cinema</NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="follow-us">
                      <div className="about-social-link">
                        <h4 className="text-center">Follow us</h4>
                        <div className="icons text-center">
                          <NavLink to="/">
                            <FaFacebookSquare />
                          </NavLink>
                          <NavLink to="/">
                            <FaDribbble />
                          </NavLink>
                          <NavLink to="/">
                            <FaYoutube />
                          </NavLink>
                          <NavLink to="/">
                            <FaTwitter />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end of sidebar */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
