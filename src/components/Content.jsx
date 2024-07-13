import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSkipTextClick = useCallback(() => {
    navigate("/login-empty");
  }, [navigate]);

  const onNextButtonContainerClick = useCallback(() => {
    navigate("/onboarding3");
  }, [navigate]);

  return (
    <div className={`content ${className}`}>
      <div className="header">
        <div className="title">
          <div className="background1" />
          <div className="headline-parent">
            <h1 className="headline">We serve incomparable delicacies</h1>
            <div className="description">
              <div className="all-the-best">
                All the best restaurants with their top menu waiting for you,
                they cant’t wait for your order!!
              </div>
            </div>
            <div className="pagination">
              <div className="indicator1">
                <div className="page-dots" />
                <div className="page-dots1" />
                <div className="page-dots2" />
              </div>
            </div>
          </div>
          <div className="navigation">
            <div className="onboarding-navigation">
              <div className="skip" onClick={onSkipTextClick}>
                Skip
              </div>
              <div className="next-button" onClick={onNextButtonContainerClick}>
                <div className="next">Next</div>
                <img className="icon1" loading="lazy" alt="" src="/icon.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="other11">
        <div className="background2" />
        <div className="home-indicator5" />
      </footer>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
