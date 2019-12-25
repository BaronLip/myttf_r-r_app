import React from 'react'
import { Header } from 'semantic-ui-react'

const MatchesHeader = () => {
    console.log("MatchesHeader");
    return (
        <Header block as='h3' color='blue' textAlign='center'>
            Match History
            <Header.Subheader>
            </Header.Subheader>
        </Header>
    )
}

export default MatchesHeader