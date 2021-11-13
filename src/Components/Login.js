import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";

const Login = () => {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    // .replace(/"/g,"") is used to remove the double quotes for the string

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div>
      {home ? (
        <div className="task_container">
          <img
            src="https://image.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg"
            alt=""
          />
          <div className="task_container-text">
            <div>
              <form onSubmit={handleLogin}>
                <h2>User Login</h2>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmaillog(event.target.value)}
                  required
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPasswordlog(event.target.value)}
                  required
                />
                <button type="submit" className="btn btn-dark btn-lg btn-block">
                  Login
                </button>

                <p className="forgot-password text-right">
                  Not A User, Click To <a href="/">Register?</a>
                </p>
                {flag && (
                  <Alert color="primary" variant="danger">
                    Invalid Credentials!
                  </Alert>
                )}
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default Login;
