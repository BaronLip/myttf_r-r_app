// External imports:
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Header, Grid, Image, Segment, Divider } from 'semantic-ui-react';

// Local imports:
import MatchesForm from '../components/MatchesForm';
import MatchesHeader from '../components/MatchesHeader';
import MatchCard from '../components/MatchCard'
// import { fetchPlayer } from "../actions/PlayerActions";
import { deleteMatch, bookmark } from "../actions/MatchActions";

class Dashboard extends Component {


    // Do not need componentDidMount since fetchPlayer is no longer needed.
    // Also removed fetchPlayer from connect statement.
    // componentDidMount() {
    //     console.log("Component Did Mount", this.props);
    //     console.log(store.getState());
    //     this.props.fetchPlayer();
    // }

    render() {
        console.log("PlayerContainer.js", this.props);
        // console.log(player)
        let {player, matches, games} = this.props.player
        // let player = this.props.player.player;
        // let matches = this.props.player.matches;
        // let games = this.props.player.games;

        matches.sort((a,b) => b.bookmarked - a.bookmarked);
        
        console.log(matches);
        
        let wins = matches.filter(match => match.win).length

        return(
            <>   
                <Grid stackable columns={2} divided='vertically'>
                    <Grid.Column textAlign='center'>
                        <Segment style={{height: "57vh"}}>
                            <Header as='h3' block textAlign='center' color='blue'>
                            Profile
                            </Header>
                            <Image bordered rounded src={player.profileImage} size='large' style={{width: '200px', height: "auto"}}centered />
                            <h5>{player.username}</h5>
                            <p>Win : Loss</p>
                            <span>{wins} : {matches.length - wins} </span>          
                        </Segment>
                    </Grid.Column>
                    
                    <Grid.Column textAlign='left'>
                        <Segment style={{ height: "57vh" }} >
                            {/* CALLING MATCHESFORM */}
                            <MatchesForm
                                player={player}
                                matches={matches}
                                games={games}
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
                                games={ games.filter(game => game.match_id === m.id) }
                                deleteMatch={this.props.deleteMatch}
                                bookmark={this.props.bookmark}    
                            />
                            )
                        }
                    </Grid.Row>
                </Grid>
            </>
        )
    }
}

// ES6 syntax.
const mapStateToProps = ({player}) => ({
    player
})
// // Longhand of mSTP:
// const mapStateToProps = (state) => ({
//      player: state.player,
//      matches: state.matches
// })


// ES6 syntax for connect.
export default connect(mapStateToProps, { deleteMatch, bookmark })(Dashboard);

// // Longhand of mDTP:
// const mapDispatchToProps = (dispatch) => {
//     return {
//         deleteMatch: (matchId) => dispatch(deleteMatch(matchId))  
//     }
// }

