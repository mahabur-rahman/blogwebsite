import React, { useState, useEffect } from "react";

const Logout = () => {
  const [info, setInfo] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setMsg(false);
    }, 5000);
  }, [info]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setMsg(true);
    alert(
      `UserName : ${info.userName} Email : ${info.email} Password : ${info.password}`
    );
  };

  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-6 mx-auto">
              <div className="logInForm">
                <h2 className="text-white text-center">Register</h2>
                {/* form  */}
                <form className="mt-5" onSubmit={submitForm}>
                  <div className="mb-3">
                    <label
                      htmlFor="userName"
                      className="form-label text-light text-capitalize"
                    >
                      UserName
                    </label>
                    <input
                      name="userName"
                      value={info.username}
                      onChange={handleChange}
                      autoFocus={true}
                      type="text"
                      className="form-control"
                      id="userName"
                      placeholder="xyz@gmail.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="form-label text-light text-capitalize"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      value={info.email}
                      onChange={handleChange}
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="xyz@gmail.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="pass"
                      className="form-label text-light text-capitalize"
                    >
                      Password
                    </label>
                    <input
                      name="password"
                      value={info.password}
                      onChange={handleChange}
                      type="password"
                      className="form-control"
                      id="pass"
                      rows="3"
                      placeholder="******"
                    />
                  </div>

                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">
                      Register
                    </button>
                  </div>
                  {msg ? (
                    <div className="text-success text-capitalize text-center mt-3">
                      Very Good Job 👍
                    </div>
                  ) : (
                    ""
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Logout;
