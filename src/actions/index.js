//action creator

const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer;

export const selectMainListItem = (item) => {
  console.log("action", item);
  ipcRenderer.send("toggle-pop", item);

  //return action
  return {
    type: "ITEM_SELECTED",
    payload: item,
  };
};
