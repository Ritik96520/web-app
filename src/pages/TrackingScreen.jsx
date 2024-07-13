import "./TrackingScreen.css";
import { useEffect, useState } from "react";
const TrackingScreen = () => {
  return (
    <div className="tracking-screen">
      <header className="other">
        <div className="iphone-xstatus-barsstatus-ba">
          <div className="status-bar-background" />
          <div className="time-style">
            <div className="time">9:41</div>
          </div>
          <div className="connectivity">
            <div className="signals">
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
      <section className="instructions">
        <div className="tracking-screen-parent">
          <h2 className="tracking-screen1">Tracking Screen</h2>
          <div className="read-the-project">
            (Read the project guidelines for this screen)
          </div>
        </div>
      </section>
      <footer className="other1">
        <div className="background" />
        <div className="home-indicator" />
      </footer>
    </div>
  );
};

export default TrackingScreen;