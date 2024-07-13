import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Content1.css";

const Content1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onProgressButtonContainerClick = useCallback(() => {
    navigate("/login-empty");
  }, [navigate]);

  return (
    <div className={`content1 ${className}`}>
      <div className="content-inner">
        <div className="background-parent">
          <div className="background3" />
          <div className="headline-group">
            <h1 className="headline1">We serve incomparable delicacies</h1>
            <div className="description1">
              <div className="all-the-best1">
                All the best restaurants with their top menu waiting for you,
                they cant’t wait for your order!!
              </div>
            </div>
            <div className="page-indicator">
              <div className="indicator-container">
                <div className="indicator2">
                  <div className="indicator-child" />
                </div>
                <div className="inactive-indicator">
                  <img
                    className="inactive-indicator-child"
                    loading="lazy"
                    alt=""
                    src="/rectangle-5630.svg"
                  />
                  <div className="inactive-indicator-background" />
                </div>
              </div>
            </div>
          </div>
          <div className="progress-button-wrapper">
            <div
              className="progress-button"
              onClick={onProgressButtonContainerClick}
            >
              <div className="progress-button1">
                <div className="buttonfullcircle">
                  <img
                    className="arrow-right"
                    loading="lazy"
                    alt=""
                    src="/arrow--right.svg"
                  />
                </div>
                <div className="button-background" />
                <img
                  className="progress-button-child"
                  alt=""
                  src="/ellipse-191.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="other12">
        <div className="background4" />
        <div className="home-indicator6" />
      </footer>
    </div>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
