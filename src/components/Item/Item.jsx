import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const Item = ({ done, text, id, onDoneChange }) => {
  return (
    <li>
      <label>
      <input
      className="filled-in"
        id={id}
        type="checkbox"
        checked={!!done}
        onChange={(e) => onDoneChange(e.target.checked)}
      />
      <span className="item__input" htmlFor={id}>{text}</span>
      </label>
    </li>
  );
};

Item.propTypes = {
  done: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.string,
  onDoneChange: PropTypes.func,
};
Item.defaultProps = {
  done: false,
  text: "",
  id: "",
  onDoneChange: () => {},
};

export default Item;
