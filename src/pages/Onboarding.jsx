import Content from "../components/Content";
import "./Onboarding.css";

const Onboarding = () => {
  return (
    <div className="onboarding2">
      <img className="image-8-icon" alt="" src="/image-8@2x.png" />
      <img className="image-7-icon" alt="" src="/image-7@2x.png" />
      <header className="other">
        <div className="iphone-xstatus-barsstatus-ba">
          <div className="status-bar-background" />
          <div className="time-style">
            <div className="time">9:41</div>
          </div>
          <div className="status-icons">
            <div className="connection">
              <img
                className="cellular-connection-icon"
                loading="lazy"
                alt=""
                src="/cellular-connection.svg"
              />
              <img
                className="wifi-icon"
                loading="lazy"
                alt=""
                src="/wifi.svg"
              />
              <div className="battery">
                <div className="border" />
                <img
                  className="cap-icon"
                  loading="lazy"
                  alt=""
                  src="/cap.svg"
                />
                <div className="capacity" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Content />
    </div>
  );
};

export default Onboarding;
