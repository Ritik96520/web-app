import Content1 from "../components/Content1";
import "./Onboarding1.css";

const Onboarding1 = () => {
  return (
    <div className="onboarding3">
      <img className="image-9-icon" alt="" src="/image-9@2x.png" />
      <header className="other1">
        <div className="iphone-xstatus-barsstatus-ba1">
          <div className="status-bar-background1" />
          <div className="time-style1">
            <div className="time1">9:41</div>
          </div>
          <div className="status-bar-right">
            <div className="connection-indicators">
              <img
                className="cellular-connection-icon1"
                loading="lazy"
                alt=""
                src="/cellular-connection.svg"
              />
              <img
                className="wifi-icon1"
                loading="lazy"
                alt=""
                src="/wifi.svg"
              />
              <div className="battery1">
                <div className="border1" />
                <img
                  className="cap-icon1"
                  loading="lazy"
                  alt=""
                  src="/cap.svg"
                />
                <div className="capacity1" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Content1 />
    </div>
  );
};

export default Onboarding1;
