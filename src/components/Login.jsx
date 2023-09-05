import React from "react";

function Login() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form>
              <span for="uname">
                <b>Email Address</b>
              </span>
              <input
                class=""
                type="text"
                placeholder="Enter your email address"
                name="username"
              />
              <span for="psw">
                <b>Password</b>
              </span>
              <input
                class=""
                type="password"
                placeholder="Enter your Password"
                name="password"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
