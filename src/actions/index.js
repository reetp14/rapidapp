//action creator

const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer;

export const selectMainListItem = (item) => {
  ipcRenderer.send("toggle-pop");

  //return action
  return {
    type: "ITEM_SELECTED",
    payload: item,
  };
};
