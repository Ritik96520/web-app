import PropTypes from "prop-types";
import "./InputField.css";

const InputField = ({
  className = "",
  enterEmailaPlaceholder,
  onInputFieldContainerClick,
}) => {
  return (
    <div
      className={`input-field ${className}`}
      onClick={onInputFieldContainerClick}
    >
      <div className="email-address">Email Address</div>
      <div className="input">
        <div className="input1">
          <input
            className="enter-emaila"
            placeholder={enterEmailaPlaceholder}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

InputField.propTypes = {
  className: PropTypes.string,
  enterEmailaPlaceholder: PropTypes.string,

  /** Action props */
  onInputFieldContainerClick: PropTypes.func,
};

export default InputField;
