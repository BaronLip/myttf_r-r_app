import React from "react";
import { Link } from "react-router-dom";
import { Header, Button, Grid } from 'semantic-ui-react';

const header = () => {
    console.log("Header.js");
    return (
        <Header as='h1' block textAlign='center' color='blue'>
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column>
                        {/*Blank column as spacer*/}
                    </Grid.Column>

                    <Grid.Column>
                        Welcome to MyTTF
                    </Grid.Column>
                    
                    <Grid.Column>
                        <Link to='./dashboard'>
                            <Button floated='right'>Dashboard</Button>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Header>
    )
}

export default header