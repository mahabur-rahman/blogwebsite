import React from "react";
import writeImg from "../images/write.jpg";
import { FaPlusCircle } from "react-icons/fa";

const Write = () => {
  return (
    <>
      <section id="write">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-10 col-md-12 mx-auto">
              <div className="write-box">
                <div className="write-img">
                  <img src={writeImg} alt="Write Something" />
                </div>
                <form>
                  <div className="d-flex align-items-center">
                    <label
                      htmlFor="fileInput"
                      style={{ cursor: "pointer", marginRight: "10px" }}
                    >
                      <FaPlusCircle className="circle" />
                    </label>
                    <input
                      type="file"
                      id="fileInput"
                      style={{ display: "none" }}
                    />
                    <input
                      type="text"
                      className="form-control my-3"
                      placeholder="Title"
                    />
                  </div>
                  <div>
                    <textarea
                      className="form-control my-3"
                      rows="3"
                      placeholder="Tell your story"
                    />
                  </div>
                  <div className="mt-5">
                    <button type="submit" className="btn btn-success">
                      Publish
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Write;
