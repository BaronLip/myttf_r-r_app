import React, { Component } from 'react';
import { connect } from "react-redux";
import { createMatch } from "../actions/MatchActions";
import { createGame } from "../actions/GameActions"
import {
    Button,
    Header,
    Form,
    Input,
    Radio,
    TextArea,
    Grid,
    Menu,
} from 'semantic-ui-react'

const gridRowStyle = {
    paddingTop:".1rem",
    paddingBottom:".1rem"
}

class MatchesForm extends Component {
    constructor () {
        super();
        this.state = {
            opponent_name: "",
            match_type: "",
            notes: "",
            bookmarked: null,
            games: [
                {
                    // player_score: "",
                    // opponent_score: ""
                }
            ]
        }   
    }

    handleOnChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    
    handleChecked = (e, { value }) => {
        this.setState({ match_type: value })
    }

    onChangeForGames = (event) => {
        let { name, value } = event.target;
        value = parseInt(value, 10);
        // Create index by taking the dataset-id of the input element.
        let index = parseInt(event.target.parentElement.dataset.id) - 1
        // Create a duplicate of the current array of games.
        const newGames = [...this.state.games]
        // Working backwards, add the object properties to a new game with the index of the dataset-id.
        newGames[index] = {...newGames[index], [name]: value}
        // Assign the value of newGames, an array of games, to the key of games within this.state.
        this.setState( {...this.state, games: newGames } );
    }
       

    handleSubmit = event => {
        console.log("Submitting from MatchesForm.", this.props.player);
        event.preventDefault();
        // const player = this.props.player;
        // const matches = this.props.matches;
        // const games = this.props.games;
        // const matchGames = []

        // matches.forEach(match => {
        //     matchGames = games.filter(game => {
        //         return game.match_id === match.id
        //     })
        //     // debugger
        //     let gameWin = 0
        //     let gameLoss = 0
        //     matchGames.forEach(game => {
        //         if (game.player_score > game.opponent_score) {
        //             return gameWin += 1
        //         } else {
        //             return gameLoss += 1
        //         }
        //     });
        //     // debugger
        //     gameWin > gameLoss ? player.wins += 1 : player.losses += 1
        // });

        this.props.createMatch({...this.state, bookmarked: false }, this.props.player);
        // Reset the form below.
        this.setState({
            date: "",
            opponent_name: "",
            match_type: "",
            notes: "",
            bookmarked: null,
            games: [ ]
        });
    }

    render() {
        console.log("MatchesForm.js", this.state, this.props)
        let gameCount = parseInt(this.state.match_type);
        let gameInputs

        if (this.state.match_type) {
            gameInputs = [...Array(gameCount)].map((game, i) => ( 
                <Grid columns='equal' key={i}>
                    <Grid.Row style={gridRowStyle}>
                        <Grid.Column>
                            <Menu fluid vertical>
                                <Menu.Item className='header'>Game {i + 1}</Menu.Item>
                            </Menu>
                        </Grid.Column>
                        <Grid.Column>
                            <Input
                                data-id={i + 1}
                                placeholder='you'
                                name="player_score"
                                onChange={this.onChangeForGames}
                            />
                        </Grid.Column>

                        <Grid.Column>
                            <Input
                                data-id={i + 1}
                                name="opponent_score"
                                placeholder='opponent'
                                // value={this.state.opponent_name}
                                onChange={this.onChangeForGames}
                            />
                        </Grid.Column>
                        {/* <Grid.Column>
                            <Button form="game-form">Save</Button>
                        </Grid.Column> */}
                    </Grid.Row>
                </Grid>
                )
            )
        }

        return (
        <>
            <Form id="match-form" onSubmit={ event => this.handleSubmit(event) }>
                <Header as='h3' block textAlign='center' color='blue'>
                    Create a Match
                </Header>
                <Form.Group widths='equal'>
                    <Form.Input 
                        fluid label='Date' 
                        placeholder='Date:' 
                        type="date" 
                        name="date"
                        // Date input does not need to be controlled for value to pass into state. Uncommenting below causes an error.
                        // value={new Date().toISOString().slice(0, 10)}
                        onChange={this.handleOnChange}/>

                    <Form.Field
                        name="opponent_name"
                        control={Input}
                        label='Opponent Name:'
                        placeholder='Opponent Name'
                        value={this.state.opponent_name}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>

                <Form.Group inline>
                    <label>Match Type:</label>
                    <Form.Field
                        data-index="1"
                        name="match_type"
                        control={Radio}
                        label='Best of 7'
                        value='7'
                        checked={this.state.match_type === "7"}
                        onChange={this.handleChecked}
                    />
                    <Form.Field
                        data-index="1"
                        name="match_type"
                        control={Radio}
                        label='Best of 5'
                        value='5'
                        checked={this.state.match_type === "5"}
                        onChange={this.handleChecked}
                    />
                </Form.Group>
                
                <Form.Field>
                    {gameInputs}                
                </Form.Field>
                
                <Form.Field style={{ height: 50 }}
                    name="notes"
                    control={TextArea}
                    label='Notes:'
                    placeholder='Notes'
                    value={this.state.notes}
                    onChange={this.handleOnChange}
                />
                
                <Form.Field form="match-form"
                    control={Button}>
                    Submit
                </Form.Field>
            </Form>

        </>
        )
    }
}

//Is ES6 syntax able to take multiple arguments?
const mapDispatchToProps = (dispatch) => {
    return {
        createMatch: (formData, player) => dispatch(createMatch(formData, player)),
        createGame: (gameData) => dispatch(createGame(gameData))
    };
};

export default connect(null, mapDispatchToProps)(MatchesForm);