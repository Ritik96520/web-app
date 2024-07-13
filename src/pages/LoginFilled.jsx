import FormFields from "../components/FormFields";
import "./LoginFilled.css";

const LoginFilled = () => {
  return (
    <div className="login-filled">
      <main className="other-parent">
        <header className="other2">
          <div className="iphone-xstatus-barsstatus-ba2">
            <div className="status-bar-background2" />
            <div className="time-style2">
              <div className="time2">9:41</div>
            </div>
            <div className="status-bar-right1">
              <div className="connection1">
                <img
                  className="cellular-connection-icon2"
                  loading="lazy"
                  alt=""
                  src="/cellular-connection1.svg"
                />
                <img
                  className="wifi-icon2"
                  loading="lazy"
                  alt=""
                  src="/wifi1.svg"
                />
                <div className="battery2">
                  <div className="border2" />
                  <img
                    className="cap-icon2"
                    loading="lazy"
                    alt=""
                    src="/cap1.svg"
                  />
                  <div className="capacity2" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="login-form">
          <div className="login-title">
            <h1 className="login-to-your">Login to your account.</h1>
            <div className="please-sign-in">{`Please sign in to your account `}</div>
          </div>
        </section>
        <FormFields />
      </main>
      <footer className="other3">
        <div className="bottom-bar-background" />
        <div className="home-indicator" />
      </footer>
    </div>
  );
};

export default LoginFilled;
