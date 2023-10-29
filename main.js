const {app, BrowserWindow} = require("electron");

function createWindow() {
    
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        webPrefrences: {
            nodeIntegration: true
        }
    });

    win.loadFile( "index.html" );
}

app.whenReady().then( createWindow );