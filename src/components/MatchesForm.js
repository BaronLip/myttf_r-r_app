import React, { Component } from 'react';
import { connect } from "react-redux";
import { addMatch } from "../actions/MatchActions";
import uuid from 'uuid'

import {
    Button,
    Header,
    Form,
    Input,
    Radio,
    TextArea,
} from 'semantic-ui-react'

class MatchesForm extends Component {
    debugger
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
        this.props.addMatch({ ...this.state, id: uuid() });
        this.setState({
            date: "",
            opponent_name: "",
            match_type: "",
            notes: "",
            checked: false
        });
        console.log("Submit")
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
                
                <Form.Input 
                    fluid label='Date' 
                    placeholder='Date:' 
                    type="date" 
                    name="date"
                    // Date input does not need to be controlled form for value to pass into state. 
                    // value={this.state.date}
                    onChange={this.handleOnChange}/>

                <Form.Field
                    name="opponent_name"
                    control={Input}
                    label='Opponent Name:'
                    placeholder='Opponent Name'
                    value={this.state.opponent_name}
                    onChange={this.handleOnChange}
                />

                <Form.Group inline>
                    <label>Match Type:</label>
                    <Form.Radio
                        name="match_type"
                        control={Radio}
                        label='Best of 7'
                        value='7'
                        checked={this.state.match_type === "7"}
                        onChange={this.handleChecked}
                    />
                    <Form.Radio
                        name="match_type"
                        control={Radio}
                        label='Best of 5'
                        value='5'
                        checked={this.state.match_type === "5"}
                        onChange={this.handleChecked}
                    />
                </Form.Group>

                <Form.TextArea
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

const mapDispatchToProps = (dispatch) => {
    return {
        addMatch: (formData) => dispatch(addMatch(formData))
    };
};

export default connect(null, mapDispatchToProps)(MatchesForm);