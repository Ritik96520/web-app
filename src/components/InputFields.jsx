import InputField from "./InputField";
import PropTypes from "prop-types";
import "./InputFields.css";

const InputFields = ({ className = "" }) => {
  return (
    <section className={`input-fields ${className}`}>
      <div className="credentials">
        <div className="create-an-account">
          Create an account to start looking for the food you like
        </div>
        <InputField enterEmailaPlaceholder="Albertstevano@gmail.com" />
        <div className="input-field2">
          <div className="user-name">User Name</div>
          <div className="input4">
            <div className="input5">
              <div className="enter-emaila1">Alber tstevano</div>
            </div>
          </div>
        </div>
        <div className="input-field3">
          <div className="password1">Password</div>
          <div className="input6">
            <div className="input7">
              <input
                className="enter-email1"
                placeholder="**********"
                type="text"
              />
              <img className="icon6" alt="" src="/icon1.svg" />
            </div>
          </div>
        </div>
        <div className="checkbox">
          <img className="icon7" loading="lazy" alt="" src="/icon-11.svg" />
          <div className="i-agree-with-container">
            <span className="i-agree-with">{`I Agree with `}</span>
            <span className="terms-of-service">Terms of Service</span>
            <span className="and">{` and `}</span>
            <span className="privacy-policy">{`Privacy Policy `}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

InputFields.propTypes = {
  className: PropTypes.string,
};

export default InputFields;
