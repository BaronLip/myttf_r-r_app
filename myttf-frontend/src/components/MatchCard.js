import React, { Component } from 'react';
import { Grid, Card, Button, Icon } from 'semantic-ui-react';

// import { connect } from 'react-redux';
// import { deleteMatch } from "../actions/MatchActions";

// You must pass in the received props when creating a functional component.
// Imported functions must be passed in as well.
class MatchCard extends Component {
    
    handleDelete = () => {
        console.log("Hitting Delete Button", this.props)
        this.props.deleteMatch(this.props.match.id)
    }

    handleBookmark = (event) => {
        console.log("Bookmarking this match.", this.props)
        this.props.bookmark(this.props.match, event)
    }

    render() {
    console.log("MatchCard.js", this.props);
        const bookmarkedValue = this.props.match.bookmarked
        const bookmarkedIcon = bookmarkedValue === true ? 
            <Icon 
                className="bookmark"
                name='bookmark'
                size='small'
            /> :
            <Icon
                className="bookmark outline"
                name='bookmark outline'
                size='small'
            />
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
                        {/*CALLING BOOKMARK*/}
                        <Button onClick={this.handleBookmark} id="bookmarkButton">
                            {bookmarkedIcon}    
                        </Button>

                        <Button onClick={this.handleDelete}> 
                            Delete
                        </Button>
                    </Card.Content>
                </Card>
            </Grid.Column>
        )   
    }
}
// const mapDispatchToProps = ({deleteMatch}) => ({deleteMatch})
// Longhand version:
// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeMatch: () => { dispatch(removeMatch()) },
//     }
// }

// export default connect(null, mapDispatchToProps)(MatchCard)
export default MatchCard

// onClick = {()=> removeMatch(match.id)}> Delete