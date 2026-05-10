import { Eye } from "lucide-react";

export const Form = () => {
  return (
    <section className="form-container">
      <div className="sorin">
        {" "}
        <img src="/images/logo.sorin.png" />{" "}
      </div>

      <div>
        <div>
          <h1>Welcome Back</h1>
          <p>Enter your email and password to access your account</p>
        </div>
        <form className="form-content">
          <div className="form">
            <label>Email</label>
            <div className="inp email">
              <input type="text" placeholder="Enter your email" />
            </div>
          </div>
          <div className="form">
            <label>Password</label>
            <div className="inp">
              <input type="text" placeholder="Enter your password" />
              <Eye className="eye" />
            </div>
          </div>{" "}
          <br />
          <div className="remember-me">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a className="pass" href="#">
              Forgot Password
            </a>
          </div>
          <div className="button">
            <button className="sign-btn">Sign In</button>
            <button className="sign-btn-1">Sign in with Google</button>
          </div>
        </form>
      </div>

      <div className="sign-up">
        <p>Don't have an account? <span className="signup-txt">Sign Up</span></p>
      </div>
    </section>
  );
};
