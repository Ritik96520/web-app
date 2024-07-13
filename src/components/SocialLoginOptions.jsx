import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./SocialLoginOptions.css";

const SocialLoginOptions = ({
  className = "",
  propGap,
  onOtherMethodLoginClick,
  onButtonClick,
}) => {
  const socialLoginOptionsStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/post-login");
  }, [navigate]);

  return (
    <div
      className={`social-login-options ${className}`}
      style={socialLoginOptionsStyle}
    >
      <div className="divider1">
        <div className="frame-div">
          <img
            className="frame-inner"
            loading="lazy"
            alt=""
            src="/vector-3.svg"
          />
        </div>
        <div className="or-sign-in1">Or sign in with</div>
        <div className="divider-inner1">
          <img
            className="vector-icon"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
      </div>
      <div className="social-button" onClick={onOtherMethodLoginClick}>
        <div className="button3" onClick={onButtonClick}>
          <img className="icon5" loading="lazy" alt="" src="/icon-1.svg" />
        </div>
      </div>
    </div>
  );
};

SocialLoginOptions.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,

  /** Action props */
  onOtherMethodLoginClick: PropTypes.func,
  onButtonClick: PropTypes.func,
};

export default SocialLoginOptions;
