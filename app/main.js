'use strict';

const {app, BrowserWindow} = require('electron')


// var env = require('./vendor/electron_boilerplate/env_config');
// var devHelper = require('./vendor/electron_boilerplate/dev_helper');
 // var windowStateKeeper = require('./vendor/electron_boilerplate/window_state');
//require('browser-window').addDevToolsExtension('../react-devtools');
var mainWindow;

// Preserver of the window size and position between app launches.
// var mainWindowState = windowStateKeeper('main', {
//     width: 1000,
//     height: 600
// });

app.on('ready', function () {

    mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        kiosk: true
    });

    mainWindow.setMenu(null);

    // if (mainWindowState.isMaximized) {
    //     mainWindow.maximize();
    // }

    // mainWindow.fullscreen = true;

    mainWindow.loadURL('file://' + __dirname + '/app.html');

    // if (env.name === 'development') {
    //     //devHelper.setDevMenu();
    //     mainWindow.openDevTools();
    // }

    mainWindow.openDevTools();

    mainWindow.on('close', function () {
        console.log('window closed')
    });
});

app.on('window-all-closed', function () {
    app.quit();
});
