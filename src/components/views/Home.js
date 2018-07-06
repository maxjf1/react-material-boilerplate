import React, { Component, Fragment } from 'react';
import Header from '../Header';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header title="React Material-UI Boilerplate" />
                <main>
                    <Typography gutterBottom>
                        This is a Boilerplate
                    </Typography>
                    <Button component={Link} to="about" variant="contained" color="secondary" >Go to about</Button>
                </main>
            </Fragment>
        );
    }
}

export default Home;