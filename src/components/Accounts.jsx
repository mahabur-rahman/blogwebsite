import React, { useState, useEffect } from "react";
import accountSidebarImg from "../images/accounts.jpg";
import accountProfile from "../images/post2.jpg";
import { NavLink } from "react-router-dom";
import {
  FaFacebookSquare,
  FaDribbble,
  FaYoutube,
  FaTwitter,
  FaSmile,
} from "react-icons/fa";

const Accounts = () => {
  // form
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setMsg(false);
    }, 5000);
  }, [info]);

  const eventChange = (e) => {
    const { name, value } = e.target;

    setInfo((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg(true);
    alert(
      `UserName : ${info.name} Email : ${info.email} Password : ${info.password}`
    );
  };

  return (
    <>
      <section id="accounts">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-xl-8 col-lg-8 col-md-12 mx-auto">
              <div className="row">
                <div className="col-xl-12">
                  <div className="d-flex justify-content-between align-item-center mb-5">
                    <h5 className="update">Update your account</h5>
                    <span
                      className="delete-account"
                      onClick={() => alert("Nothing Happen !")}
                    >
                      Delete Account
                    </span>
                  </div>
                  <div className="accounts-img d-flex align-items-center">
                    <img src={accountProfile} alt="Account Profile" />
                    <div className="smile">
                      <FaSmile />
                    </div>
                  </div>
                  {/* form  */}
                  <form className="mt-5" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        name="name"
                        value={info.name}
                        onChange={eventChange}
                        autoFocus={true}
                        type="text"
                        className="form-control my-4"
                        id="exampleFormControlInput1"
                        placeholder="UserName"
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        name="email"
                        value={info.email}
                        onChange={eventChange}
                        type="email"
                        className="form-control my-4"
                        id="exampleFormControlInput1"
                        placeholder="abc@gmail.com"
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        name="password"
                        value={info.password}
                        onChange={eventChange}
                        type="password"
                        className="form-control my-4"
                        id="exampleFormControlInput1"
                        placeholder="******"
                      />
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-success mb-2">
                        Update
                      </button>
                      {msg ? (
                        <div className="text-success">
                          Your account is created 😀
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* sidebar */}
            <div className="col-xl-3 col-lg-3 col-md-12 mx-auto mt-5 mt-lg-0">
              <div className="about-details">
                <h5 className="text-uppercase text-center">about me</h5>
                <div className="about-img">
                  <img
                    src={accountSidebarImg}
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

export default Accounts;
