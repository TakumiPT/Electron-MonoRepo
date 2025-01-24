const { app, BrowserWindow } = require('electron');
const path = require('node:path');
const started = require('electron-squirrel-startup');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if(app.isPackaged) {
      // Load the index.html of the renderer-app build. Output location is defined in renderer-app angular.json file
      mainWindow.loadFile(path.join(__dirname, '..', 'dist', 'renderer-app', 'browser', 'index.html'));
  }else {
    mainWindow.loadURL('http://localhost:4200/');
  }


  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron is ready to create browser windows.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
