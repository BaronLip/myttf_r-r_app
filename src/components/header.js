import React from "react";
import { Link } from "react-router-dom";
import { Header, Button } from 'semantic-ui-react';

const header = () => {
    console.log("You've reached Header.js");
    return (
        <Header as='h1' block textAlign='center' color='blue'>
            Welcome to MyTTF
            <Link to='./dashboard'>
                <Button floated='right'>Dashboard</Button>
            </Link>
        </Header>
    )
}

export default (header)