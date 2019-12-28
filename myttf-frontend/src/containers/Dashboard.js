// Libraries:
import React, { Component } from 'react';
import { connect } from "react-redux";
// Components:
import { Header, Grid, Image, Segment, Divider } from 'semantic-ui-react';
import MatchesForm from '../components/MatchesForm';
import MatchesHeader from '../components/MatchesHeader';
import MatchCard from '../components/MatchCard'
// Functions:
import { fetchPlayer } from "../actions/PlayerActions";
import { fetchMatches, deleteMatch, bookmark } from "../actions/MatchActions";


class Dashboard extends Component {
    
    componentDidMount() {
        this.props.fetchPlayer();
        this.props.fetchMatches();
    }

    render() {
        console.log("containers/dashboard.js", this.props.players, this.props.matches);
        const player = this.props.players[0];
        const matches = this.props.matches;
        // debugger;
        return(
            <div>   
                <Grid stackable columns={2} divided='vertically'>
                    <Grid.Column textAlign='center'>
                        <Segment style={{height: "33vh"}}>
                            <Header as='h3' block textAlign='center' color='blue'>
                            Profile
                            </Header>
                            <Image bordered rounded size='large' style={{width: '200px', height: "auto"}}centered />
                            <h5>{/*player.username*/}</h5>
                            <p>Win : Loss</p>
                            <span>{/*player.wins*/} : {/*player.losses*/} </span>          
                        </Segment>
                    </Grid.Column>
                    
                    <Grid.Column textAlign='left'>
                        <Segment style={{ height: "33vh" }} >
                            {/* CALLING MATCHESFORM */}
                            <MatchesForm />
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
const mapStateToProps = ({players, matches}) => ({
    players,
    matches
})

// //Longhand of mSTP:
// const mapStateToProps = (state) => ({
//      players: state.players,
//      matches: state.matches
// })

// ES6 syntax for connect.
export default connect(mapStateToProps, { deleteMatch, bookmark, fetchPlayer, fetchMatches })(Dashboard);

// // Longhand of mDTP:
// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeMatch: (matchId) => dispatch(removeMatch())
//     }
// }