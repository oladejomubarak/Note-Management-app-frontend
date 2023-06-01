import { useState } from "react";
import "../src/styles/Register.css";
import LoginSideImage from "../src/assets/notePictures/images6.png";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const registerApi = "http://localhost:8082/api/v1/register";

  const data = {
    firstname: "",
    lastname: "",
    emailAddress: "",
    password: "",
    password: "",
  };

  const [registerData, setRegisterData] = useState(data);

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicking is working");
    console.log(registerData);

    Axios.post(registerApi, registerData)
      .then((res) => {
        console.log(res);
        res.status === 200 && navigate("/verify-token");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="register-page">
      <div className="register-bg-image">
        <img
          className="register-image"
          src={LoginSideImage}
          alt="register-image"
        />
      </div>
      <div className="register-welcome-div">
        <div className="welcome-div">
          <h1>NOTE MANAGEMENT</h1>
          <h2>Create an account</h2>
        </div>
        <div className="register-form-div">
          <form onSubmit={handleSubmit}>
            <label>First Name:</label>
            <input
              name="firstname"
              type="text"
              onChange={handleChange}
              required
            />
            <label>Last Name:</label>
            <input
              name="lastname"
              type="text"
              onChange={handleChange}
              required
            />
            <label>E-mail Address:</label>
            <input
              name="emailAddress"
              type="text"
              onChange={handleChange}
              required
            />
            <label>Password:</label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              required
            />
            <label>Confirm Password:</label>
            <input
              name="confirmPassword"
              type="password"
              onChange={handleChange}
              required
            />
            <button type="submit">Sign up</button>

            <p>
              Already have an account? <Link to="/">Log in instead</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;