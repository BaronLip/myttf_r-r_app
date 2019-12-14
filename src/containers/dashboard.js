// Libraries:
import React, { Component } from 'react';
import { connect } from "react-redux";
// Components:
import { Header, Grid, Image, Segment, Divider } from 'semantic-ui-react';
import MatchesForm from '../components/MatchesForm'
import MatchesHeader from '../components/MatchesHeader';
// Functions:


class Dashboard extends Component {
    render() {
        console.log("containers/dashboard.js", this.props.players, this.props.matches)
        const player = this.props.players[0]

        return(
            <div>   
                <Grid stackable columns={2} divided>
                    <Grid.Column textAlign='center'>
                        <Segment style={{height: "33vh"}}>
                            <Header as='h3' block textAlign='center' color='blue'>
                            Profile
                            </Header>
                            <Image bordered rounded size='large' src={ player.profileImage} style={{width: '200px', height: "auto"}}centered />
                            <h5>{player.username}</h5>
                            <p>Win : Loss</p>
                            <span>{player.wins} : {player.losses} </span>          
                        
                        </Segment>
                    </Grid.Column>
                    
                    <Grid.Column>
                        <Segment style={{ height: "33vh" }} >
                            
                            <MatchesForm/>
                        </Segment>
                    </Grid.Column>
                </Grid>
                <Divider />
                
                <MatchesHeader />
                <Grid stackable columns={3} divided>
                
                </Grid>
            </div>
        )
    }
}

// ES6 destructured syntax.
const mapStateToProps = ({players, matches}) => ({
    players,
    matches
})
// const mapStateToProps = (state) => ({
//     players: state
// })

export default connect(mapStateToProps)(Dashboard)

