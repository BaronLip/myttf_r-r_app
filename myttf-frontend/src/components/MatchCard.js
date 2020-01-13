import React, { Component } from 'react';
import { Grid, Card, Button, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";

let buttonStyle = {
    margin: '0.25em',
    padding: '0.75em .75em .75em',
}

// You must pass in the received props when creating a functional component.
// Imported functions must be passed in as well.
class MatchCard extends Component {
    
    handleDelete = () => {
        console.log("Hitting Delete Button", this.props)
        this.props.deleteMatch(this.props.match)
    }

    handleBookmark = () => {
        console.log("Bookmarking this match.", this.props);
        this.props.bookmark(this.props.match);
    }

    render() {
    console.log("MatchCard.js", this.props);
    let bookmarkedValue = this.props.match.bookmarked
    let bookmarkedIcon = bookmarkedValue === true?
        <Icon 
            className="bookmark"
            name='bookmark'
            size='small'
            color='blue'
        /> :
        <Icon
            className="bookmark outline"
            name='bookmark outline'
            size='small' 
        />

    let games = this.props.games
    let win = 0
    let loss = 0
    let cardHeaderStyle = {}
    
    games.forEach(game => {
        if ( game.player_score > game.opponent_score ) {
            return win += 1
        } else {
            return loss += 1
        }    
    });
    
    cardHeaderStyle = win > loss ? { color: "green" } : { color: "red" }


    return (
            <Grid.Column> 
                <Card>
                    <Card.Content>
                        <Card.Header style={cardHeaderStyle}>Date: {this.props.match.date}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{/*win or loss?*/}</span>
                        </Card.Meta>
                        <Card.Description> Opponent: {this.props.match.opponent_name} </Card.Description>
                        <Card.Description> Match Type: {this.props.match.match_type} </Card.Description>
                        <Card.Description> Notes: {this.props.match.notes} </Card.Description>
                    </Card.Content>
                    <Card.Content>
                        
                        <Button onClick={this.handleBookmark} style= {buttonStyle}>
                            {bookmarkedIcon}    
                        </Button>
                        
                        <Link to={`./api/v1/players/${this.props.match.player_id}/matches/${this.props.match.id}`}>
                            <Button style={buttonStyle}>
                                Edit
                            </Button>
                        </Link>
                        
                        <Button onClick={this.handleDelete} style= {buttonStyle}> 
                            Delete
                        </Button>

                    </Card.Content>
                </Card>
            </Grid.Column>
        )   
    }
}

export default MatchCard