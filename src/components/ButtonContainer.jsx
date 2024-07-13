import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./ButtonContainer.css";

const ButtonContainer = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/login-empty");
  }, [navigate]);

  return (
    <div className={`button-container ${className}`}>
      <div className="logout-button-parent">
        <div className="logout-button">
          <button className="button6" onClick={onButtonClick}>
            <img className="icon10" alt="" src="/icon3.svg" />
            <div className="button7">Go to Tracking Screen</div>
            <img className="icon11" alt="" src="/icon3.svg" />
          </button>
        </div>
        <div className="logout">Logout</div>
      </div>
    </div>
  );
};

ButtonContainer.propTypes = {
  className: PropTypes.string,
};

export default ButtonContainer;
