# React Material UI Boilerplate

This is an Ract APP boilerplate based on CRA using Material UI

## Installation

This boilerplate uses `create-react-app`. You can [Download the newest release](https://github.com/maxjf1/react-material-boilerplate/releases) or clone the repository:

```sh
    npm install -g create-react-app # If you don't have it installed
    git clone git@github.com:maxjf1/react-material-boilerplate.git my-project
    cd my-project
    yarn install
    rm -rf .git # To remove boilerplate git reference
```

Now you can change :

- [`package.json`](package.json) project name and GitHub pages URL
- [Project Settings](src/settings.js) such as Material UI theme colors and settings 
- The [Manifest File](public/manifest.json) and [Index Page](public/index.html) (for Project title, name, meta tags and theme colors to math project settings).

After setup, you can start the project

```sh
    npm start
```

to deploy the project to GitHub Pages, run:

```sh
    npm run deploy
```

You can check an demo at [https://maxjf1.github.io/react-material-boilerplate/](https://maxjf1.github.io/react-material-boilerplate/).

## Features

This boilerplate setup an project to use Material UI and adds some reusable components

### Service Worker Register

The [default SW register](src/registerServiceWorker.js) was modified to an JS Class. This is useful for reusing the instance.

### Update Handler

The [UpdateHandler](src/components/UpdateHandler.js) component receives the SWRegister and listen for installing and updates. It will automatically show an Snackbar giving feedback for the user.

### Header

The [Header](src/components/Header.js) is a basic Material UI AppBar with some aditional features
