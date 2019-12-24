import React, { Component } from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';

// import { connect } from 'react-redux';
// import { removeMatch } from "../actions/MatchActions";

// You must pass in the received props when creating a functional component.
// Imported functions must be passed in as well.
class MatchCard extends Component {
    handleDelete = () => {
        console.log("Hitting Delete Button", this.props)
        this.props.removeMatch(this.props.match.id)
    }
    
    render() {
    console.log("MatchCard.js");
    // debugger;
        return (
            <Grid.Column>
                <Card>
                    <Card.Content>
                        <Card.Header>Date: {this.props.match.date}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{/*win or loss?*/}</span>
                        </Card.Meta>
                        <Card.Description> Opponent: {this.props.match.opponent_name} </Card.Description>
                        <Card.Description> Match Type: {this.props.match.match_type} </Card.Description>
                        <Card.Description> Notes: {this.props.match.notes} </Card.Description>
                    </Card.Content>
                    <Card.Content>                
                        <Button 
                            onClick={this.handleDelete}
                            > 
                            Delete
                        </Button>
                    </Card.Content>
                </Card>
            </Grid.Column>
        )   
    }
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