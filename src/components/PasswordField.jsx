import PropTypes from "prop-types";
import "./PasswordField.css";

const PasswordField = ({
  className = "",
  enterEmailPlaceholder,
  onInputFieldContainerClick,
}) => {
  return (
    <div className={`password-field ${className}`}>
      <div className="input-field1" onClick={onInputFieldContainerClick}>
        <div className="password">Password</div>
        <div className="input2">
          <div className="input3">
            <input
              className="enter-email"
              placeholder={enterEmailPlaceholder}
              type="text"
            />
            <img className="icon2" alt="" src="/icon1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

PasswordField.propTypes = {
  className: PropTypes.string,
  enterEmailPlaceholder: PropTypes.string,

  /** Action props */
  onInputFieldContainerClick: PropTypes.func,
};

export default PasswordField;
