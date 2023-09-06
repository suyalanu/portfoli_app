import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      userEmail,
      password,
    };

    const response = await axios
      .get("https://localhost:7183/api/login", {
        headers: {
          UserEmail: userEmail,
          Password: password,
          Authorization: "abc",
        },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("userData", JSON.stringify(res.data));
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(response.data);
  };

  return (
    <>
      <div className="Auth-form-container">
        <form onSubmit={handleSubmit} className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">LOG IN</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
// suyalanushka88@gmail.com
//Anushka11@
