import React from 'react';
import "./LoginStyles.css";
import loginimg from "../images/logincreenpng2.png";
import googleicon from "../images/googlelogo.png";

function Login() {

  const googleAuthSignIn = () => {
    window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};
  return (
    <>

      <section className='login-section'>
        <div className="login-container">

          <div className="login-title-container">
          <h1 className="login-titile">
            Sign Up Form
          </h1>
          <hr className="login-hr" />
          </div>

          <div className="login-form-container">
            <div className="img-container">
              <img src={loginimg} alt="login" className="login-img" />
            </div>
            <div className="form-container">
              <h2 className="form2-title">
                Sign Up with email
              </h2>
              <input type="text" className="login-form-input" placeholder='Email'/><br />
              <input type="text" className="login-form-input" placeholder='Password'/><br />
              <button className="login-btn">
                Sign Up
              </button>
              <p className="login-p">or</p>
              <button className="google-btn" onClick={googleAuthSignIn}>
                <img src={googleicon} alt="google" className="google-icon" />
                <span className="btn-span">Sign up with Google</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login;
