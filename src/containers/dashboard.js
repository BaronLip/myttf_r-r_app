// Libraries:
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components:
import { Grid } from 'semantic-ui-react';
// Functions:


class Dashboard extends Component {
    render() {
        console.log("You are in containers/dashboard.js")
        return(
            <div>   
                This is the dashboard
            </div>
        )
    }
}

export default Dashboard

