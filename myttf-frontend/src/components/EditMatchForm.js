import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import {
    Button,
    Header,
    Form,
    Input,
    Radio,
    TextArea,
} from 'semantic-ui-react'

class EditMatchForm extends Component {
    // State has the additional key of match because componentDidMount's response is in the same format.
    state = {
        match: {
            date: "",
            opponent_name: "",
            match_type: "",
            notes: "",
            bookmarked: null
        }
    }

    // Then componentDidMount will overwrite the state upon second render. This shows placeholder content.
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

    // handleChecked = ( event ) => {
    //     const { value } = event.target;
    //     this.setState(state => {
    //         const match = { ...state.match };
    //         match.match_type = value;
    //         return { match }
    //     })
    // }

    // handleChecked = ({ value }) => {
    //     this.setState({ match_type: value })
    // }
    
    // Due to semantic UI, value needed to be extracted from parentElement.firstChild.
    // Will this work without a callback function?
    handleChecked = (e) => {
        let value = e.target.parentElement.firstChild.value
        this.setState( state => (
            { ...state, match: { ...state.match, match_type: value } }
            )
        )
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
                bookmarked: null
            }
        });
    }

    render() {
        console.log("EditMatchForm.js", this.state /*, this.props*/)
        // debugger
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
                <Form.Field
                    control={Button}>
                    Submit
                </Form.Field>
            </Form>
        )
    }
}


export default withRouter(EditMatchForm)