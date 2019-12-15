import React from 'react'
import { connect } from 'react-redux';
import { removeMatch } from '../actions/MatchActions';

import { Grid, Card, Icon, Button } from 'semantic-ui-react'

// You must pass in the received prop when creating a functional component.
const MatchCard = (match) => {
    console.log("MatchCard.js", match, this.props);
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
                    <Button delete removeMatch={this.props.removeMatch}>Delete</Button>
                </Card.Content>
            </Card>
        </Grid.Column>
    )   
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeMatch: () => { dispatch(removeMatch()) },
    }

}

export default connect(null, mapDispatchToProps)(MatchCard)