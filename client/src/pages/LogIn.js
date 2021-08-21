import React from "react";
import "../css/Auth.css";
function Login() {
  return (
    <div className="kauth__outer">
      <div className="kauth__inner">
        <h2>Log in to your Account</h2>
        <form className="kauth__form">
          <div className="kauth__form_row">
            <label htmlFor="email">Username :</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="kauth__form_row">
            <label htmlFor="password">Password :</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="kauth__inner_action">
            <button>LOGIN</button>
            <span>Forgot Password?</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
