import React, { Component } from 'react';
import { connect } from "react-redux";
import { Header, Grid, Image, Segment, Divider } from 'semantic-ui-react';
import MatchesForm from '../components/MatchesForm';
import MatchesHeader from '../components/MatchesHeader';
import MatchCard from '../components/MatchCard'
import { fetchPlayer } from "../actions/PlayerActions";
import { deleteMatch, bookmark } from "../actions/MatchActions";

class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchPlayer();
    }

    render() {
        console.log("Dashboard.js", this.props);
        // debugger
        const player = this.props.player.player;
        const matches = this.props.player.matches;

        return(
            <div>   
                <Grid stackable columns={2} divided='vertically'>
                    <Grid.Column textAlign='center'>
                        <Segment style={{height: "57vh"}}>
                            <Header as='h3' block textAlign='center' color='blue'>
                            Profile
                            </Header>
                            <Image bordered rounded src={player.profileImage} size='large' style={{width: '200px', height: "auto"}}centered />
                            <h5>{player.username}</h5>
                            <p>Win : Loss</p>
                            <span>{player.wins} : {player.losses} </span>          
                        </Segment>
                    </Grid.Column>
                    
                    <Grid.Column textAlign='left'>
                        <Segment style={{ height: "57vh" }} >
                            {/* CALLING MATCHESFORM */}
                            <MatchesForm
                                player={player}
                            />
                        </Segment>
                    </Grid.Column>
                </Grid>
                <Divider />
                {/* CALLING MATCHESHEADER */}
                {MatchesHeader()}
                <Grid divided='vertically'>
                    <Grid.Row columns={3}>
                        
                        {/* CALLING MATCHCARDS */}
                        {matches.map(m =>
                            <MatchCard 
                                match={m}
                                key={m.id}
                                player={player.id}
                                // games={}
                                deleteMatch={this.props.deleteMatch}
                                bookmark={this.props.bookmark}    
                            />
                            )
                        }
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

// ES6 syntax.
const mapStateToProps = ({player, matches}) => ({
    player,
    matches
})
// //Longhand of mSTP:
// const mapStateToProps = (state) => ({
//      player: state.player,
//      matches: state.matches
// })

// ES6 syntax for connect.
export default connect(mapStateToProps, { deleteMatch, bookmark, fetchPlayer })(Dashboard);

// // Longhand of mDTP:
// const mapDispatchToProps = (dispatch) => {
//     return {
//         deleteMatch: (matchId) => dispatch(deleteMatch(matchId))  
//     }
// }