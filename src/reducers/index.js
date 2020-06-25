import { combineReducers } from "redux";

import axios from "axios";

const mainListReducer = () => {
  const fetchData = async () => {
    try {
      var results = await axios.get("https://www.reddit.com/r/aww.json", {});

      return await results.data.data.children;
    } catch (error) {
      alert(error);
    }
  };

  let data = fetchData();

  return data;
};

const selectedItemReducer = (selectedItem = null, action) => {
  if (action.type === "ITEM_SELCTED") {
    return action.payload;
  }

  return selectedItem;
};

export default combineReducers({
  item: mainListReducer,
  selectedItem: selectedItemReducer,
});
