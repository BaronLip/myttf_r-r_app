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
    Grid,
    Menu
} from 'semantic-ui-react'

const gridRowStyle = {
    paddingTop:".5rem",
    paddingBottom:".5rem"
}

class MatchesForm extends Component {
    constructor () {
        super();
        this.state = {
            opponent_name: "",
            match_type: "",
            notes: "",
            bookmarked: null,
            games: []
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

    onChangeForGames = event => {
        let { name, value } = event.target;
        debugger
        value = parseInt(value, 10);
        this.setState( {...this.state, games: { ...this.state.games, [name]: value } } );
    }

    onSubmitForGames = () => {
        console.log("game submit")
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
            bookmarked: null,
            games: [ ]
        });
    }

    render() {
        console.log("MatchesForm.js", this.state, this.props)
        
        let matchType = this.state.match_type;
        let gameForm;
        
        if (matchType === "5") {
            gameForm = 
                <Form id="game-form" onSubmit={this.onSubmitForGames}>
                <Grid columns='equal'>
                    <Grid.Row style={gridRowStyle}>
                        <Grid.Column>
                            <Menu fluid vertical>
                                <Menu.Item className='header'>Game 1</Menu.Item>
                            </Menu>
                        </Grid.Column>
                        <Grid.Column>
                            <Input
                                placeholder='you'
                                name="player_score"
                                onChange={this.onChangeForGames}
                            />
                        </Grid.Column>
                    
                        <Grid.Column>
                            <Input
                                name="opponent_score"
                                placeholder='opponent'
                                // value={this.state.opponent_name}
                                onChange={this.onChangeForGames}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Button form="game-form">Save</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                
                <Grid columns='equal'>
                    <Grid.Row style={gridRowStyle}>
                        <Grid.Column>
                            <Menu fluid vertical>
                                <Menu.Item className='header'>Game 2</Menu.Item>
                            </Menu>
                        </Grid.Column>
                        <Grid.Column>
                            <Input
                                placeholder='you'
                                name="player_score"
                                onChange={this.onChangeForGames}
                            />
                        </Grid.Column>

                        <Grid.Column>
                            <Input
                                name="opponent_score"
                                placeholder='opponent'
                                // value={this.state.opponent_name}
                                onChange={this.onChangeForGames}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Button>Save</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid columns='equal'>
                    <Grid.Row style={gridRowStyle}>
                        <Grid.Column>
                            <Menu fluid vertical>
                                <Menu.Item className='header'>Game 3</Menu.Item>
                            </Menu>
                        </Grid.Column>
                        <Grid.Column>
                            <Input
                                placeholder='you'
                                name="player_score"
                                onChange={this.onChangeForGames}
                            />
                        </Grid.Column>

                        <Grid.Column>
                            <Input
                                name="opponent_score"
                                placeholder='opponent'
                                // value={this.state.opponent_name}
                                onChange={this.onChangeForGames}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Button>Save</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid columns='equal'>
                    <Grid.Row style={gridRowStyle}>
                        <Grid.Column>
                            <Menu fluid vertical>
                                <Menu.Item className='header'>Game 4</Menu.Item>
                            </Menu>
                        </Grid.Column>
                        <Grid.Column>
                            <Input
                                placeholder='you'
                                name="player_score"
                                onChange={this.onChangeForGames}
                            />
                        </Grid.Column>

                        <Grid.Column>
                            <Input
                                name="opponent_score"
                                placeholder='opponent'
                                // value={this.state.opponent_name}
                                onChange={this.onChangeForGames}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Button>Save</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid columns='equal'>
                    <Grid.Row style={gridRowStyle}>
                        <Grid.Column>
                            <Menu fluid vertical>
                                <Menu.Item className='header'>Game 5</Menu.Item>
                            </Menu>
                        </Grid.Column>
                        <Grid.Column>
                            <Input
                                placeholder='you'
                                name="player_score"
                                onChange={this.onChangeForGames}
                            />
                        </Grid.Column>

                        <Grid.Column>
                            <Input
                                name="opponent_score"
                                placeholder='opponent'
                                // value={this.state.opponent_name}
                                onChange={this.onChangeForGames}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Button>Save</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Form>
        } else if (matchType === "7") {
            gameForm = 
                <Form onSubmit={this.onSubmitFor}>
                    <Grid columns='equal'>
                        <Grid.Row style={gridRowStyle}>
                            <Grid.Column>
                                <Menu fluid vertical>
                                    <Menu.Item className='header'>Game 1</Menu.Item>
                                </Menu>
                            </Grid.Column>
                            <Grid.Column>
                                <Input
                                    placeholder='you'
                                    name="player_score"
                                    onChange={this.onChangeForGames}
                                />
                            </Grid.Column>

                            <Grid.Column>
                                <Input
                                    name="opponent_score"
                                    placeholder='opponent'
                                    // value={this.state.opponent_name}
                                    onChange={this.handleOnChangeForGames}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Button>Save</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Grid columns='equal'>
                        <Grid.Row style={gridRowStyle}>
                            <Grid.Column>
                                <Menu fluid vertical>
                                    <Menu.Item className='header'>Game 2</Menu.Item>
                                </Menu>
                            </Grid.Column>
                            <Grid.Column>
                                <Input
                                    placeholder='you'
                                    name="player_score"
                                    onChange={this.handleOnChangeForGames}
                                />
                            </Grid.Column>

                            <Grid.Column>
                                <Input
                                    name="opponent_score"
                                    placeholder='opponent'
                                    // value={this.state.opponent_name}
                                    onChange={this.handleOnChangeForGames}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Button>Save</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Grid columns='equal'>
                        <Grid.Row style={gridRowStyle}>
                            <Grid.Column>
                                <Menu fluid vertical>
                                    <Menu.Item className='header'>Game 3</Menu.Item>
                                </Menu>
                            </Grid.Column>
                            <Grid.Column>
                                <Input
                                    placeholder='you'
                                    name="player_score"
                                    onChange={this.handleOnChangeForGames}
                                />
                            </Grid.Column>

                            <Grid.Column>
                                <Input
                                    name="opponent_score"
                                    placeholder='opponent'
                                    // value={this.state.opponent_name}
                                    onChange={this.handleOnChangeForGames}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Button>Save</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Grid columns='equal'>
                        <Grid.Row style={gridRowStyle}>
                            <Grid.Column>
                                <Menu fluid vertical>
                                    <Menu.Item className='header'>Game 4</Menu.Item>
                                </Menu>
                            </Grid.Column>
                            <Grid.Column>
                                <Input
                                    placeholder='you'
                                    name="player_score"
                                    onChange={this.handleOnChangeForGames}
                                />
                            </Grid.Column>

                            <Grid.Column>
                                <Input
                                    name="opponent_score"
                                    placeholder='opponent'
                                    // value={this.state.opponent_name}
                                    onChange={this.handleOnChangeForGames}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Button>Save</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Grid columns='equal'>
                        <Grid.Row style={gridRowStyle}>
                            <Grid.Column>
                                <Menu fluid vertical>
                                    <Menu.Item className='header'>Game 5</Menu.Item>
                                </Menu>
                            </Grid.Column>
                            <Grid.Column>
                                <Input
                                    placeholder='you'
                                    name="player_score"
                                    onChange={this.handleOnChangeForGames}
                                />
                            </Grid.Column>

                            <Grid.Column>
                                <Input
                                    name="opponent_score"
                                    placeholder='opponent'
                                    // value={this.state.opponent_name}
                                    onChange={this.handleOnChangeForGames}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Button>Save</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                <Grid columns='equal'>
                    <Grid.Row style={gridRowStyle}>
                        <Grid.Column>
                            <Menu fluid vertical>
                                <Menu.Item className='header'>Game 6</Menu.Item>
                            </Menu>
                        </Grid.Column>
                        <Grid.Column>
                            <Input
                                placeholder='you'
                                name="player_score"
                                onChange={this.handleOnChangeForGames}
                            />
                        </Grid.Column>

                        <Grid.Column>
                            <Input
                                name="opponent_score"
                                placeholder='opponent'
                                // value={this.state.opponent_name}
                                onChange={this.handleOnChangeForGames}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Button>Save</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid columns='equal'>
                    <Grid.Row style={gridRowStyle}>
                        <Grid.Column>
                            <Menu fluid vertical>
                                <Menu.Item className='header'>Game 7</Menu.Item>
                            </Menu>
                        </Grid.Column>
                        <Grid.Column>
                            <Input
                                placeholder='you'
                                name="player_score"
                                onChange={this.handleOnChangeForGames}
                            />
                        </Grid.Column>

                        <Grid.Column>
                            <Input
                                name="opponent_score"
                                placeholder='opponent'
                                // value={this.state.opponent_name}
                                onChange={this.handleOnChangeForGames}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Button>Save</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Form>
        }

        return (
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
                
                {gameForm}
            
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