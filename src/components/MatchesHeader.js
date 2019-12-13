import React from 'react'
import { Header } from 'semantic-ui-react'

export const MatchesHeader = () => (
    // console.log("MatchesHeader")
    <Header as='h2' style={{ color: "blue" }}>
        All your matches
        <Header.Subheader>
            Manage your account settings and set email preferences
        </Header.Subheader>
    </Header>
)

export default MatchesHeader