import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import LoginButton from "./LoginButton";
import SocialLoginOptions from "./SocialLoginOptions";
import PropTypes from "prop-types";
import "./FormFields.css";

const FormFields = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/post-login");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/register-filled");
  }, [navigate]);

  return (
    <section className={`form-fields ${className}`}>
      <form className="email-field">
        <InputField enterEmailaPlaceholder="Albertstevano@gmail.com" />
        <PasswordField enterEmailPlaceholder="**********" />
        <div className="forgot-password">
          <div className="forgot-password1">Forgot password?</div>
        </div>
        <LoginButton icon="/icon2.svg" button="Sign In" icon1="/icon2.svg" />
        <div className="social-login1">
          <SocialLoginOptions onButtonClick={onButtonContainerClick} />
          <div className="register1">
            <div
              className="dont-have-an-container1"
              onClick={onDontHaveAnClick}
            >
              <span className="dont-have-an1">Don't have an account?</span>
              <span className="span2">{` `}</span>
              <span className="register2">Register</span>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

FormFields.propTypes = {
  className: PropTypes.string,
};

export default FormFields;
