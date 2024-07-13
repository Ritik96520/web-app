import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./LoginButton.css";

const LoginButton = ({ className = "", icon, button, icon1, propPadding }) => {
  const loginButtonStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/post-login");
  }, [navigate]);

  return (
    <div className={`login-button ${className}`} style={loginButtonStyle}>
      <button className="button1" onClick={onButtonClick}>
        <img className="icon3" alt="" src={icon} />
        <div className="button2">{button}</div>
        <img className="icon4" alt="" src={icon1} />
      </button>
    </div>
  );
};

LoginButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  button: PropTypes.string,
  icon1: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default LoginButton;
