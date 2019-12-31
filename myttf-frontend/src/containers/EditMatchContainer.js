import React, { Component } from 'react';
import EditMatchForm from '../components/EditMatchForm';
import { connect } from "react-redux";
import { Grid, Segment} from 'semantic-ui-react';
import { patchMatch } from '../actions/MatchActions';

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
        patchMatch: (match) => dispatch(patchMatch(match))
    }
}

export default connect(null, mapDispatchToProps)(EditMatchContainer);



