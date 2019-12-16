import React from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';
// import { connect } from 'react-redux';
// import { removeMatch } from "../actions/MatchActions";

// You must pass in the received props when creating a functional component.
// Imported functions must be passed in as well.
const MatchCard = ({match, removeMatch}) => {
    console.log("MatchCard.js", match);
    debugger
    return (
        <Grid.Column>
            <Card>
                <Card.Content>
                    <Card.Header>Date: {match.date}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{/*win or loss?*/}</span>
                    </Card.Meta>
                    <Card.Description> Opponent: {match.opponent_name} </Card.Description>
                    <Card.Description> Match Type: {match.match_type} </Card.Description>
                    <Card.Description> Notes: {match.notes} </Card.Description>
                </Card.Content>
                <Card.Content extra>                
                    <Button 
                        onClick={() => removeMatch()}> Delete
                    </Button>
                </Card.Content>
            </Card>
        </Grid.Column>
    )   
}

// const mapDispatchToProps = ({removeMatch}) => ({removeMatch})
// Longhand version:
// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeMatch: () => { dispatch(removeMatch()) },
//     }
// }

// export default connect(null, mapDispatchToProps)(MatchCard)
export default MatchCard

// onClick = {()=> removeMatch(match.id)}> Delete