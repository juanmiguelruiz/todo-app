import React, { useState } from "react";
import PropTypes from "prop-types";

import "./styles.css";

const createItem = (text) => ({ done: false, text });

const SearchBar = ({ defaultValue, onNewItem }) => {
  const [newItem, setNewItem] = useState(defaultValue);

  return (
    <div className="row search-bar__container">
      <div className="col s6">
      <input
        className="search-bar"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter" && newItem.length) {
            onNewItem(createItem(newItem));
            setNewItem(defaultValue);
          }
        }}
        type="text"
        placeholder="add details"
      />
      </div>
      <div className="col s2 button__container">
      <a href
      className="btn search-bar__button"
        onClick={(e) => {
          if (newItem.length) {
            onNewItem(createItem(newItem));
            setNewItem(defaultValue);
          }
        }}
      >
        <span>Add</span>
      </a>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  defaultValue: PropTypes.string,
  onNewItem: PropTypes.func,
};

SearchBar.defaultProps = {
  defaultValue: "",
  onNewItem: () => {},
};

export default SearchBar;
