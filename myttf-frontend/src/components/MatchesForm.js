import React, { Component } from 'react';
import { connect } from "react-redux";
import { createMatch } from "../actions/MatchActions";

import {
    Button,
    Header,
    Form,
    Input,
    Radio,
    TextArea,
} from 'semantic-ui-react'

class MatchesForm extends Component {
    constructor () {
        super();
        this.state = {
            opponent_name: "",
            match_type: "",
            notes: "",
            bookmarked: false,
        }   
    }

    handleOnChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }
    
    handleChecked = (e, { value }) => {
        debugger
        this.setState({ match_type: value })
    }

    handleSubmit = event => {
        console.log("Submitting from MatchesForm.", this.props.player);
        event.preventDefault();
        // debugger
        this.props.createMatch({...this.state, bookmarked: false }, this.props.player);
        // // Reset the form below.
        this.setState({
            date: "",
            opponent_name: "",
            match_type: "",
            notes: "",
            bookmarked: false,
        });
    }

    render() {
        console.log("MatchesForm.js", this.state, this.props)
        
        // From Semantic UI but not needed.
        // const { value } = this.state
        return (
            <Form onSubmit={ event => this.handleSubmit(event) }>
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
                        name="match_type"
                        control={Radio}
                        label='Best of 7'
                        value='7'
                        checked={this.state.match_type === "7"}
                        onChange={this.handleChecked}
                    />
                    <Form.Field
                        name="match_type"
                        control={Radio}
                        label='Best of 5'
                        value='5'
                        checked={this.state.match_type === "5"}
                        onChange={this.handleChecked}
                    />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Field inline>
                        <label>Game 1:</label>
                        <Input
                            placeholder='your score'
                            name="game_one_player_score"
                            // value={this.state.match}
                            onChange={this.handleOnChange} 
                        />
                        <label> : </label>
                        <Input
                            name="game_one_opponent_score"
                            placeholder='opponent score'
                            // value={this.state.opponent_name}
                            onChange={this.handleOnChange}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field inline>
                        <label>Game 2:</label>
                        <Input
                            placeholder='your score'
                            name="game_one_player_score"
                            // value={this.state.match}
                            onChange={this.handleOnChange} 
                        />
                        <label> : </label>
                        <Input
                            name="game_one_opponent_score"
                            placeholder='opponent score'
                            // value={this.state.opponent_name}
                            onChange={this.handleOnChange}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field inline>
                        <label>Game 3:</label>
                        <Input
                            placeholder='your score'
                            name="game_one_player_score"
                            // value={this.state.match}
                            onChange={this.handleOnChange} 
                        />
                        <label> : </label>
                        <Input
                            name="game_one_opponent_score"
                            placeholder='opponent score'
                            // value={this.state.opponent_name}
                            onChange={this.handleOnChange}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field inline>
                        <label>Game 4:</label>
                        <Input
                            placeholder='your score'
                            name="game_one_player_score"
                            // value={this.state.match}
                            onChange={this.handleOnChange} 
                        />
                        <label> : </label>
                        <Input
                            name="game_one_opponent_score"
                            placeholder='opponent score'
                            // value={this.state.opponent_name}
                            onChange={this.handleOnChange}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field inline>
                        <label>Game 5:</label>
                        <Input
                            placeholder='your score'
                            name="game_one_player_score"
                            // value={this.state.match}
                            onChange={this.handleOnChange} 
                        />
                        <label> : </label>
                        <Input
                            name="game_one_opponent_score"
                            placeholder='opponent score'
                            // value={this.state.opponent_name}
                            onChange={this.handleOnChange}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field inline>
                        <label>Game 6:</label>
                        <Input
                            placeholder='your score'
                            name="game_one_player_score"
                            // value={this.state.match}
                            onChange={this.handleOnChange} 
                        />
                        <label> : </label>
                        <Input
                            name="game_one_opponent_score"
                            placeholder='opponent score'
                            // value={this.state.opponent_name}
                            onChange={this.handleOnChange}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field inline>
                        <label>Game 7:</label>
                        <Input
                            placeholder='your score'
                            name="game_one_player_score"
                            // value={this.state.match}
                            onChange={this.handleOnChange} 
                        />
                        <label> : </label>
                        <Input
                            name="game_one_opponent_score"
                            placeholder='opponent score'
                            // value={this.state.opponent_name}
                            onChange={this.handleOnChange}
                        />
                    </Form.Field>
                </Form.Group>
                

                <Form.Field style={{ minHeight: 30 }}
                    name="notes"
                    control={TextArea}
                    label='Notes:'
                    placeholder='Notes'
                    value={this.state.notes}
                    onChange={this.handleOnChange}
                />
                <Form.Field 
                    control={Button}>
                    Submit
                </Form.Field>
            </Form>
        )
    }
}

//Is ES6 syntax able to take multiple arguments?
const mapDispatchToProps = (dispatch) => {
    return {
        createMatch: (formData, player) => dispatch(createMatch(formData, player))
    };
};

export default connect(null, mapDispatchToProps)(MatchesForm);