import React from "react";
import { NavLink } from "react-router-dom";
const BlogPostCard = ({
  imgSrc,
  topTitle1,
  topTitleTwo,
  title,
  time,
  text,
}) => {
  return (
    <>
      <div className="col-xl-6 col-lg-6 col-md-6 my-3">
        <NavLink to="/about">
          <div className="card text-center shadow">
            <img src={imgSrc} className="card-img-top img-fluid" alt={title} />
            <div className="card-body">
              <span className="topTitle"> {topTitle1} </span>
              <span className="topTitle mx-"> {topTitleTwo} </span>
              <h5 className="card-title my-3"> {title} </h5>
              <span className="cardDate"> {time} </span>
              <p className="card-text mt-2"> {text} </p>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default BlogPostCard;
