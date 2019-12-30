import React, { Component } from 'react';
import EditMatchForm from '../components/EditMatchForm';
import { connect } from "react-redux";
import { Grid, Segment} from 'semantic-ui-react';
import { fetchMatch, patchMatch } from '../actions/MatchActions';

class EditMatchContainer extends Component {
    
    render() {
        console.log("You've reached EditMatchContainer.", this.props)
        return(
            <Grid
                textAlign='center'
                style={{ height: '90vh' }}
                verticalAlign='top'
            >
                <Grid.Column style={{ maxWidth: 600 }} textAlign='left'>
                    <Segment style={{ height: "50vh" }} >
                        <EditMatchForm 
                            match={this.props.match}
                            fetchMatch={this.props.fetchMatch}
                            patchMatch={this.props.patchMatch}
                        />
                    </Segment>    
                </Grid.Column>
            </Grid>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMatch: (matchId) => dispatch(fetchMatch()),
        patchMatch: (matchId) => dispatch(patchMatch())
    }
}

export default connect(null, mapDispatchToProps)(EditMatchContainer);



