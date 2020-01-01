import React, { Component } from 'react';

import {
    Button,
    Header,
    Form,
    Input,
    Radio,
    TextArea,
} from 'semantic-ui-react'

export default class EditMatchForm extends Component {
    // Setting an initial state allows the first render to complete.
    state = {
        date: "",
        opponent_name: "",
        match_type: "",
        notes: "",
        bookmarked: null
    }

    // Then componentDidMount will overwrite the state upon second render.
    componentDidMount() {
        fetch(`http://localhost:3000/api/v1/matches/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(matchData => this.setState(
            {...matchData}
        ))
        .catch(error => console.log(error))
    }

    handleOnChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    handleChecked = (e, { value }) => this.setState({ match_type: value })

    handleSubmit = (event) => {
        console.log("Patching from MatchesForm.")
        event.preventDefault();
        this.props.patchMatch(this.state);
        // Reset the form below.
        this.setState({
            date: "",
            opponent_name: "",
            match_type: "",
            notes: "",
            bookmarked: false,
        });
    }

    render() {
        console.log("EditMatchForm.js", this.state, this.props)

        return (
            <Form onSubmit={event => this.handleSubmit(event)}>
                <Header as='h3' block textAlign='center' color='blue'>
                    Edit Match
                </Header>
                <Form.Group widths='equal'>
                    <Form.Input
                        fluid label='Date'
                        placeholder='Date:'
                        type="date"
                        name="date"
                        // Date input does not need to be controlled form for value to pass into state. 
                        // value={this.state.date}
                        onChange={this.handleOnChange} />

                    <Form.Field
                        name="opponent_name"
                        control={Input}
                        label='Opponent Name:'
                        placeholder={this.state.opponent_name}
                        // value={this.state.opponent_name}
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
                        onChange={this.handleChecked}
                    />
                    <Form.Field
                        name="match_type"
                        control={Radio}
                        label='Best of 5'
                        value='5'
                        onChange={this.handleChecked}
                    />
                </Form.Group>

                <Form.Field style={{ minHeight: 90 }}
                    name="notes"
                    control={TextArea}
                    label='Notes:'
                    placeholder={this.state.notes}
                    // value={this.state.notes}
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

