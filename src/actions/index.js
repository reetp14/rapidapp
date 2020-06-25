//action creator

export const selectMainListItem = (item) => {
  //return action
  return {
    type: "ITEM_SELECTED",
    payload: item,
  };
};
