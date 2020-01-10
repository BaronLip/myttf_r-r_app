import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

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

class EditMatchForm extends Component {
    // State has the additional key of match because componentDidMount's response is in the same format.
    // The initial state structure is based on fetch from componentDidMount's fetch call.
    state = {
        match: {
            id: "",
            date: "",
            opponent_name: "",
            match_type: "",
            notes: "",
            bookmarked: null,
            player_id: null,
            games: [

            ]
        }
    }

    // Then componentDidMount will overwrite the state upon second render. This shows placeholder content.
    // Props.match is provided by React router.
    componentDidMount() {
        fetch(`http://localhost:3000${this.props.match.url}`)
        // fetch(`http://localhost:3000/api/v1/players/${this.props.match.player_id}/matches/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(matchData => this.setState(
            {...matchData}
            ))
            .catch(error => console.log(error))
    }

    handleOnChange = event => {
        const { name, value } = event.target;
        // const name = event.target.name;
        // const value = event.target.value;
        
        // This sets State for match since it is nested within State.
        this.setState( state => (
                {...state, match: { ...state.match, [name] : value  } }
            )
        )
    }

    handleChecked = (e) => {
        let value = e.target.parentElement.firstChild.value
        this.setState( state => (
            { ...state, match: { ...state.match, match_type: value } }
            )
        )
    }

    onChangeForGames = (event) => {
        // debugger
        let { name, value } = event.target;
        value = parseInt(value, 10);
        // Create index by taking the dataset-id of the input element.
        let index = parseInt(event.target.parentElement.dataset.id) - 1
        // Create a duplicate of the current array of games.
        const newGames = [...this.state.games]
        // Working backwards, add the object properties to a new game with the index of the dataset-id.
        newGames[index] = { ...newGames[index], [name]: value }
        // Assign the value of newGames, an array of games, to the key of games within this.state.
        this.setState({ ...this.state, games: newGames });
        // debugger
    }

    handleSubmit = (event) => {
        console.log("Patching from MatchesForm.")
        event.preventDefault();
        this.props.patchMatch(this.state, this.props.history);
        // Reset the form below.
        this.setState({
            match: {
                date: "",
                opponent_name: "",
                match_type: "",
                notes: "",
                bookmarked: null,
                games: []
            }
        });
    }

    render() {
        console.log("EditMatchForm.js", this.state /*, this.props*/)
        
        let gameCount = parseInt(this.state.match.match_type);
        let gameInputs
        const gridRowStyle = {
            paddingTop: ".1rem",
            paddingBottom: ".1rem"
        }
        // debugger
        // let playerScorePlaceholder
        // let opponentScorePlaceholder
        if (this.state.match.match_type) {

            gameInputs = [...Array(gameCount)].map((game, i) => {
                // Attempt to create placeholder scores from each match. Not working. 
                // if (this.state.games[i].player_score) {
                //     return playerScorePlaceholder = this.state.games[i].player_score
                // } else {
                //     return playerScorePlaceholder = ""
                // }
                
                return (
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
                                placeholder="you"
                                name="player_score"
                                onChange={this.onChangeForGames}
                            />
                        </Grid.Column>

                        <Grid.Column>
                            <Input
                                data-id={i + 1}
                                name="opponent_score"
                                placeholder="opponent"
                                onChange={this.onChangeForGames}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                )
            })
        }
        return (
            <Form onSubmit={event => this.handleSubmit(event)}>
                <Header as='h3' block textAlign='center' color='blue'>
                    Edit Match
                </Header>
                <Form.Group widths='equal'>
                    <Form.Input
                        fluid label='Date'
                        id='date'
                        type="date"
                        name="date"
                        // Value will create a preview of the match date but it does not update with handleOnChange. Needs more research.
                        // value={this.state.match.date}
                        onChange={this.handleOnChange} />

                    <Form.Field
                        name="opponent_name"
                        control={Input}
                        label='Opponent Name:'
                        placeholder={this.state.match.opponent_name}
                        value={this.state.opponent_name}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>

                <Form.Group inline>
                    <label>Match Type:</label>
                    <Form.Field>
                        <Radio
                            label='Best of 7'
                            name="match_type"
                            // control={Radio}
                            value='7'
                            checked={this.state.match.match_type === "7"}
                            onChange={(e) => this.handleChecked(e)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Best of 5'
                            name="match_type"
                            // control={Radio}
                            value='5'
                            checked={this.state.match.match_type === "5"}
                            onChange={(e) => this.handleChecked(e)}
                        />
                    </Form.Field>
                </Form.Group>

                <Form.Field style={{ minHeight: 90 }}
                    name="notes"
                    control={TextArea}
                    label='Notes:'
                    placeholder={this.state.match.notes}
                    // value={this.state.notes}
                    onChange={this.handleOnChange}
                />

                <Form.Field>
                    {gameInputs}
                </Form.Field>

                <Form.Field
                    control={Button}>
                    Submit
                </Form.Field>
            </Form>
        )
    }
}

export default withRouter(EditMatchForm)