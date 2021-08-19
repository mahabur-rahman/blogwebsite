import React from "react";
import profile from "../images/post2.jpg";
import { NavLink } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";

import { navbarSocialIcons, listItems } from "../Data/NavbarData";

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <div className="navbar-left">
              <ul className="list-inline">
                {navbarSocialIcons.map((data) => (
                  <li className="list-inline-item px-1" key={data.id}>
                    <NavLink to={data.visit}>
                      <span>{data.icon}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="bars">
                <FaBars />
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 mt-4 mt-lg-0">
                {listItems.map((data) => {
                  return (
                    <li className="nav-item my-1 my-lg-0" key={data.id}>
                      <NavLink
                        exact
                        activeClassName="active-menu"
                        to={data.src}
                        className="nav-link text-center text-lg-left"
                        aria-current="page"
                      >
                        {data.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <div className="navbar-right d-flex align-items-center justify-content-center mt-4 mt-lg-0">
                <div className="profile-img">
                  <NavLink to="/accounts">
                    <img src={profile} alt="Profile" />
                  </NavLink>
                </div>
                <div className="search-icon">
                  <span
                    className="mx-2"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@mdo"
                  >
                    <FaSearch />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* modal implement  */}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <input
                    autoFocus={true}
                    type="search"
                    class="form-control mt-2"
                    id="search"
                    placeholder="Search here..."
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* end of modal implement  */}
    </>
  );
};

export default Navbar;
