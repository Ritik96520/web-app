import { useCallback } from "react";
import InputFields from "../components/InputFields";
import LoginButton from "../components/LoginButton";
import { useNavigate } from "react-router-dom";
import "./RegisterFilled.css";

const RegisterFilled = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/post-login");
  }, [navigate]);

  const onHaveAnAccountClick = useCallback(() => {
    navigate("/login-empty");
  }, [navigate]);

  return (
    <div className="register-filled">
      <header className="other4">
        <div className="iphone-xstatus-barsstatus-ba3">
          <div className="status-bar-background3" />
          <div className="time-style3">
            <div className="time3">9:41</div>
          </div>
          <div className="connectivity">
            <div className="connection-icons">
              <img
                className="cellular-connection-icon3"
                loading="lazy"
                alt=""
                src="/cellular-connection1.svg"
              />
              <img
                className="wifi-icon3"
                loading="lazy"
                alt=""
                src="/wifi1.svg"
              />
              <div className="battery3">
                <div className="border3" />
                <img
                  className="cap-icon3"
                  loading="lazy"
                  alt=""
                  src="/cap1.svg"
                />
                <div className="capacity3" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="signup-title-parent">
        <section className="signup-title">
          <h1 className="create-your-new">Create your new account</h1>
        </section>
        <InputFields />
        <LoginButton
          icon="/icon3.svg"
          button="Register"
          icon1="/icon3.svg"
          propPadding="0rem var(--padding-5xl) var(--padding-base)"
        />
        <div className="divider-wrapper">
          <div className="divider">
            <div className="divider-inner">
              <img
                className="frame-child"
                loading="lazy"
                alt=""
                src="/vector-3.svg"
              />
            </div>
            <div className="or-sign-in">Or sign in with</div>
            <div className="divider-child">
              <img
                className="frame-item"
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
            </div>
          </div>
        </div>
        <div className="social-login">
          <div className="button" onClick={onButtonContainerClick}>
            <img className="icon" loading="lazy" alt="" src="/icon-1.svg" />
          </div>
        </div>
        <div className="frame-parent">
          <div className="have-an-account-sign-in-wrapper">
            <div
              className="have-an-account-container"
              onClick={onHaveAnAccountClick}
            >
              <span className="have-an-account">Have an account?</span>
              <span className="span">{` `}</span>
              <span className="sign-in">Sign In</span>
            </div>
          </div>
          <div className="other5">
            <footer className="home-indicator-background" />
            <div className="home-indicator1" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterFilled;
