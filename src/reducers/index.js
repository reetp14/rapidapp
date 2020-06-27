import { combineReducers } from "redux";

const mainListReducer = () => {
  return [
    { item: "item1", id: 1 },
    { item: "item2", id: 2 },
    { item: "item3", id: 3 },
  ];
};

const selectedItemReducer = (selectedItem = null, action) => {
  if (action.type === "ITEM_SELECTED") {
    return action.payload;
  }

  return selectedItem;
};

export default combineReducers({
  item: mainListReducer,
  selectedItem: selectedItemReducer,
});
