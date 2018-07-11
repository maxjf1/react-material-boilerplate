import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import 'typeface-roboto'

import { theme } from './settings'
import UpdateHandler from './components/UpdateHandler'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/views/Home';
import About from './components/views/About';

class App extends Component {
    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <UpdateHandler appServiceWorker={this.props.appServiceWorker}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                        </Switch>
                    </UpdateHandler>
                </MuiThemeProvider>
            </Router>
        );
    }
}

export default App;
