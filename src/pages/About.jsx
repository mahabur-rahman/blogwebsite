import React from "react";
import singleSidebarImg from "../images/post3.jpg";
import { NavLink } from "react-router-dom";
import {
  FaFacebookSquare,
  FaDribbble,
  FaYoutube,
  FaTwitter,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";
import singlePostImg from "../images/singlePost.jpg";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="container-fluid">
          <div className="row justify-content-around">
            <div className="col-xl-8 col-lg-8 col-md-12 mx-auto">
              <div className="row">
                <div className="col-xl-12 my-3">
                  <div className="card shadow">
                    <img
                      src={singlePostImg}
                      className="card-img-top img-fluid"
                      alt="Single Post"
                    />
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mx-auto">lorem ipsum dolor sit amet.</h5>
                        <div className="edit_delete-icons">
                          <span className="mx-2 edit">
                            <FaEdit />
                          </span>
                          <span className="mx-2 trash">
                            <FaTrashAlt />
                          </span>
                        </div>
                      </div>

                      <div className="singlePostText d-flex justify-content-between">
                        <h6>
                          <span className="author">Author :</span>
                          <span> Safak</span>
                        </h6>
                        <span className="day">1 day ago</span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus minus quas sunt ullam alias ipsam,
                        architecto veniam laborum? Tempora adipisci assumenda
                        inventore perferendis libero odio nam vero! Magni
                        tenetur earum eum nobis ratione hic deserunt expedita
                        recusandae tempora vel facere deleniti explicabo ea id,
                        sit dolorum consequatur repellendus quae quod.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati modi ut rem eos laborum quam sed iusto vitae
                        aspernatur cupiditate voluptatum nemo nobis commodi
                        dicta, hic aut facere repellat, magnam ad officia.
                        Sapiente, ipsum enim qui sunt delectus officia placeat
                        reiciendis eos sint atque quam vel vitae. Rem quis
                        explicabo sit, quaerat officiis ipsa, id suscipit
                        similique earum porro accusamus, praesentium quam
                        perspiciatis. Maiores eum, delectus, exercitationem sit
                        corrupti magni voluptate placeat perspiciatis illo
                        aliquam tempore consectetur accusantium suscipit
                        ducimus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* sidebar */}
            <div className="col-xl-3 col-lg-3">
              <div className="about-details">
                <div className="about-img">
                  <img
                    src={singleSidebarImg}
                    className="img-fluid"
                    alt="About Me"
                  />
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

export default About;
