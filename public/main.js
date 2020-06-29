const electron = require("electron");
const app = electron.app;
const ipcMain = electron.ipcMain;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev");

let mainWindow;
let popWindow;

function createWindow() {
  //creating main window
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: true,
    },
  });

  popWindow = new BrowserWindow({
    width: 600,
    height: 454,
    parent: mainWindow,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: true,
    },
  });

  //conditional loading for dev environment
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  popWindow.loadURL(
    isDev
      ? "http://localhost:3000/image"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  //mainWindow.webContents.openDevTools();
  mainWindow.on("closed", () => (mainWindow = null));

  popWindow.on("closed", (e) => {
    e.preventDefault();
    popWindow.hide();
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on("toggle-pop", (event, arg) => {
  popWindow.show();
  //   console.log("arg", arg);
  popWindow.webContents.send("image", arg);
});

app.on("activate", () => {
  if (popWindow === null) {
    createWindow();
  }
});
