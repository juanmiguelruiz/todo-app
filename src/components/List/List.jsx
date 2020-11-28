import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "react-materialize";
import Item from "../Item";
import "./styles.css";

const List = ({ items, onItemsChange }) => {
  return (
    <div className="row">
      <div className="header__tabs">
        <Tabs>
          <hr></hr>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title="All"
          >
            <ul className="">
              {items.map(({ text, done }, i) => (
                <Item
                  text={text}
                  done={done}
                  onDoneChange={(value) => {
                    const updatedItems = [...items];
                    updatedItems[i].done = value;
                    onItemsChange(updatedItems);
                  }}
                  id={`item${i}`}
                  key={text}
                />
              ))}
            </ul>
          </Tab>
          <Tab
            active
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title="Active"
          >
            <ul className="">
              {items.map(({ text, done }, i) =>
                done === false ? (
                  <Item
                    text={text}
                    done={done}
                    onDoneChange={(value) => {
                      const updatedItems = [...items];
                      updatedItems[i].done = value;
                      onItemsChange(updatedItems);
                    }}
                    id={`item${i}`}
                    key={text + "active"}
                  />
                ) : (
                  ""
                )
              )}
            </ul>
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title="Completed"
          >
            <ul className="">
              {items.map(({ text, done }, i) =>
                done ? (
                  <Item
                    text={text}
                    done={done}
                    onDoneChange={(value) => {
                      const updatedItems = [...items];
                      updatedItems[i].done = value;
                      onItemsChange(updatedItems);
                    }}
                    id={`item${i}`}
                    key={text}
                  />
                ) : (
                  ""
                )
              )}
            </ul>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)),
  onItemsChange: PropTypes.func,
};
List.defaultProps = {
  items: [],
  onItemsChange: () => {},
};

export default List;
