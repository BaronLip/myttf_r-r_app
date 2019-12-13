import React, { Component } from 'react';
import { connect } from "react-redux";
import { addMatch } from "../actions/MatchActions";

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
        }   
    }

    handleOnChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }
    
    handleChecked = (e, { value }) => this.setState({ match_type: value })

    handleSubmit = event => {
        event.preventDefault();
        this.props.addMatch({...this.state});
        this.setState({
            date: "",
            opponent_name: "",
            match_type: "",
            notes: ""
        });
        console.log("Submit")
    }

    render() {
        // const { value } = this.state
        console.log("MatchesForm", this.state, this.props)
        return (
            <Form onSubmit={ event => this.handleSubmit(event)}>
                <Header as='h3' block textAlign='center' color='blue'>
                    Create a Match
                </Header>

                    <label>Date:</label><br>
                    </br>
                    <div class="ui input left icon">
                        <i class="calendar icon"></i>
                        <input
                            type="date" 
                            placeholder="Date"
                            name="date"
                            onChange={this.handleOnChange}
                            value={this.state.date}
                        />
                    </div>


                <Form.Group widths='equal'>
                    <Form.Field
                        name="opponent_name"
                        control={Input}
                        label='Opponent Name'
                        placeholder='Opponent Name'
                        value={this.state.opponent_name}
                        onChange={this.handleOnChange}
                    />
                    
                </Form.Group>
                    <Form.Group inline>
                        <label>Match Type</label>
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

                <Form.Field
                    name="notes"
                    control={TextArea}
                    label='Notes'
                    placeholder='Think and record the significant moments of this match and what you want to remember.'
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

const mapDispatchToProps = (dispatch) => {
    return {
        addMatch: (formData) => dispatch(addMatch(formData))
    };
};

export default connect(null, mapDispatchToProps)(MatchesForm);