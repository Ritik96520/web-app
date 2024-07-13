import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import SocialLoginOptions from "./SocialLoginOptions";
import PropTypes from "prop-types";
import "./InputFields1.css";

const InputFields1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onInputFieldContainerClick = useCallback(() => {
    navigate("/login-filled");
  }, [navigate]);

  const onOtherMethodLoginClick = useCallback(() => {
    navigate("/post-login");
  }, [navigate]);

  return (
    <section className={`input-fields1 ${className}`}>
      <form className="email-field1">
        <InputField
          enterEmailaPlaceholder="Enter Email"
          onInputFieldContainerClick={onInputFieldContainerClick}
        />
        <PasswordField
          enterEmailPlaceholder="Password"
          onInputFieldContainerClick={onInputFieldContainerClick}
        />
        <div className="login-actions">
          <div className="forgot-password-link">
            <div className="forgot-password2">Forgot password?</div>
          </div>
          <button className="button4">
            <img className="icon8" alt="" src="/icon2.svg" />
            <div className="button5">Sign In</div>
            <img className="icon9" alt="" src="/icon2.svg" />
          </button>
        </div>
        <SocialLoginOptions
          propGap="24px"
          onOtherMethodLoginClick={onOtherMethodLoginClick}
        />
      </form>
    </section>
  );
};

InputFields1.propTypes = {
  className: PropTypes.string,
};

export default InputFields1;
