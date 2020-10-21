const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
const devMode = (process.argv || []).indexOf("--dev") !== -1;

const createWindow = () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (isDev) {
    win.loadURL("http://localhost:9090");
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, "../build/index.html"));
  }

  if (devMode) {
    // load the app dependencies
    const PATH_APP_NODE_MODULES = path.join(
      __dirname,
      "..",
      "..",
      "app",
      "node_modules"
    );
    require("module").globalPaths.push(PATH_APP_NODE_MODULES);
  }
};

app.whenReady().then(createWindow);
