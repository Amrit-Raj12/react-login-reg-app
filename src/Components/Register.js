import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "./Login";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !profession) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  // Redirect To Login
  function handleClick() {
    setLogin(!login);
  }

  return (
    <div className="body">
      {login ? (
        <div className="task_container">
          <img
            src="https://image.freepik.com/free-vector/online-registration-concept_23-2147980112.jpg"
            alt=""
          />
          <div className="task_container-text">
            <div>
              <form onSubmit={handleFormSubmit}>
                <h2>User Registration</h2>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                ></input>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <input
                  type="phone"
                  placeholder="Enter Phone Number"
                  name="phone"
                  onChange={(event) => setPhone(event.target.value)}
                />
                <label style={{ float: "left" }}>Choose your Profession</label>
                <Form.Control
                  as="select"
                  onChange={(event) => setProfession(event.target.value)}
                >
                  <option>Front-End Developer</option>
                  <option>Back-End Developer</option>
                  <option>Full Stack Developer</option>
                  <option>SEO Manager</option>
                  <option>Tester</option>
                </Form.Control>
                <br />
                <button type="submit">Register</button>
                <p className="forgot-password text-right">
                  Already registered{" "}
                  <Link to="#" onClick={handleClick}>
                    log in?
                  </Link>
                </p>
                {flag && (
                  <Alert color="primary" variant="danger">
                    Please Fill Every-Field!
                  </Alert>
                )}
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Register;
