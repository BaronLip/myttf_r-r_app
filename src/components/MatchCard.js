import React from 'react'
import { Grid, Card, Icon } from 'semantic-ui-react'

// You must pass in the received prop when creating a functional component.
const MatchCard = (match) => {
    console.log("MatchCard.js", match);
    return (
        <Grid.Column>
            <Card>
                <Card.Content>
                    <Card.Header>Date: {match.match.date}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{/*win or loss?*/}</span>
                    </Card.Meta>
                    <Card.Description> Opponent: {match.match.opponent_name} </Card.Description>
                    <Card.Description> Match Type: {match.match.match_type} </Card.Description>
                    <Card.Description> Notes: {match.match.notes} </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                </Card.Content>
            </Card>
        </Grid.Column>
    )
        
}

export default MatchCard