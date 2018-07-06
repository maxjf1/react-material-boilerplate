# React Material UI Boilerplate

This is an boilerplate for an base React PWApp using Material UI

## Installation

This boilerplate uses `create-react-app`. You can [Download the newest release](https://github.com/maxjf1/react-material-boilerplate/releases) or clone the repository:

    npm install -g create-react-app # If you don't have it installed
    git clone git@github.com:maxjf1/react-material-boilerplate.git my-project
    cd my-project
    npm install
    npm start

To change the Material UI theme check the [App Component](src/App.js)

## Features

This boilerplate setup an project to use Material UI and adds some reusable components

### Service Worker Register

The [default SW register](src/registerServiceWorker.js) was modified to an JS Class. This is useful for reusing the instance.

### Update Handler

The [UpdateHandler](src/components/UpdateHandler.js) component receives the SWRegister and listen for installing and updates. It will automatically show an Snackbar giving feedback for the user.

### Header

The [Header](src/components/Header.js) is a basic Material UI AppBar with some aditional features
