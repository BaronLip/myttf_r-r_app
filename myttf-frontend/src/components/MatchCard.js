import React, { Component } from 'react';
import { Grid, Card, Button, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const buttonStyle = {
    margin: '0.25em',
    padding: '0.75em .75em .75em',
}

// You must pass in the received props when creating a functional component.
// Imported functions must be passed in as well.
class MatchCard extends Component {
    
    handleDelete = () => {
        console.log("Hitting Delete Button", this.props)
        this.props.deleteMatch(this.props.match.id)
    }

    handleBookmark = () => {
        console.log("Bookmarking this match.", this.props);

        this.props.bookmark(this.props.match);
    }

    render() {
    console.log("MatchCard.js", this.props);
        const bookmarkedValue = this.props.match.bookmarked
        const bookmarkedIcon = bookmarkedValue === true ? 
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
                        
                        <Button onClick={this.handleBookmark} style= {buttonStyle}>
                            {bookmarkedIcon}    
                        </Button>
                        
                        <Link to={`./api/v1/match/${this.props.match.id}`}>
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