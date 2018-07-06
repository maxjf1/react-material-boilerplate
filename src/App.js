import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { blue as primary, pink as secondary } from '@material-ui/core/colors'
import 'typeface-roboto'

import UpdateHandler from './components/UpdateHandler'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/views/Home';
import About from './components/views/About';


/**
 * Material UI theme feature
 * @see https://material-ui.com/customization/themes/
 * @see https://material-ui.com/style/color/
 */
const theme = createMuiTheme({
    palette: {
        primary,
        secondary,
    },
});

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
