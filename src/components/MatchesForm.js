import React, { Component } from 'react'
import {
    Button,
    Header,
    Form,
    Input,
    Radio,
    TextArea,
} from 'semantic-ui-react'

export class MatchesForm extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <Form>
                <Header as='h3' block textAlign='center' color='blue'>
                    Create a Match
                </Header>
                <Form.Group widths='equal'>
                    <Form.Field
                        control={Input}
                        label='Opponent Name'
                        placeholder='Opponent Name'
                    />
                </Form.Group>
                <Form.Group inline>
                    <label>Match Type</label>
                    <Form.Field
                        control={Radio}
                        label='Best of 7'
                        value='7'
                        checked={value === '7'}
                        onChange={this.handleChange}
                    />
                    <Form.Field
                        control={Radio}
                        label='Best of 5'
                        value='5'
                        checked={value === '5'}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Field
                    control={TextArea}
                    label='Notes'
                    placeholder='Think and record the significant moments of this match and what you want to remember.'
                />
                <Form.Field control={Button}>Submit</Form.Field>
            </Form>
        )
    }
}

export default MatchesForm
