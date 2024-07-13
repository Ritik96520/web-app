import ButtonContainer from "../components/ButtonContainer";
import "./PostLogin.css";

const PostLogin = () => {
  return (
    <div className="post-login">
      <img className="image-7-icon1" alt="" src="/image-7@2x.png" />
      <div className="other8">
        <div className="other-child" />
        <div className="home-indicator3" />
      </div>
      <header className="other9">
        <div className="iphone-xstatus-barsstatus-ba5">
          <div className="status-bar-background5" />
          <div className="time-style5">
            <div className="time5">9:41</div>
          </div>
          <div className="connectivity1">
            <div className="signal">
              <img
                className="cellular-connection-icon5"
                loading="lazy"
                alt=""
                src="/cellular-connection.svg"
              />
              <img
                className="wifi-icon5"
                loading="lazy"
                alt=""
                src="/wifi.svg"
              />
              <div className="battery5">
                <div className="border5" />
                <img
                  className="cap-icon5"
                  loading="lazy"
                  alt=""
                  src="/cap.svg"
                />
                <div className="capacity5" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="drawer">
        <div className="system-drawer-pull">
          <div className="container" />
          <div className="indicator" />
        </div>
        <div className="success-illustration">
          <img
            className="illustration-success-icon"
            loading="lazy"
            alt=""
            src="/illustration-success.svg"
          />
        </div>
        <h2 className="login-successful">Login Successful</h2>
        <ButtonContainer />
      </div>
      <footer className="other10">
        <div className="background" />
        <div className="home-indicator4" />
      </footer>
    </div>
  );
};

export default PostLogin;
