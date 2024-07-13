import { useCallback } from "react";
import InputFields1 from "../components/InputFields1";
import { useNavigate } from "react-router-dom";
import "./LoginEmpty.css";

const LoginEmpty = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/register-filled");
  }, [navigate]);

  return (
    <div className="login-empty">
      <main className="other-group">
        <header className="other6">
          <div className="iphone-xstatus-barsstatus-ba4">
            <div className="status-bar-background4" />
            <div className="time-style4">
              <div className="time4">9:41</div>
            </div>
            <div className="connection-icons-wrapper">
              <div className="connection-icons1">
                <img
                  className="cellular-connection-icon4"
                  loading="lazy"
                  alt=""
                  src="/cellular-connection1.svg"
                />
                <img
                  className="wifi-icon4"
                  loading="lazy"
                  alt=""
                  src="/wifi1.svg"
                />
                <div className="battery4">
                  <div className="border4" />
                  <img
                    className="cap-icon4"
                    loading="lazy"
                    alt=""
                    src="/cap1.svg"
                  />
                  <div className="capacity4" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="login-form1">
          <div className="login-title1">
            <h1 className="login-to-your1">Login to your account.</h1>
            <div className="please-sign-in1">{`Please sign in to your account `}</div>
          </div>
        </section>
        <InputFields1 />
        <div className="dont-have-an-account-registe-wrapper">
          <div className="dont-have-an-container" onClick={onDontHaveAnClick}>
            <span className="dont-have-an">Don't have an account?</span>
            <span className="span1">{` `}</span>
            <span className="register">Register</span>
          </div>
        </div>
      </main>
      <footer className="other7">
        <div className="background-shape" />
        <div className="home-indicator2" />
      </footer>
    </div>
  );
};

export default LoginEmpty;
