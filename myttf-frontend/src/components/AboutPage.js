// This is an example of a functional component.

import React from 'react'
import { Header, Container, Input } from 'semantic-ui-react'

const AboutPage = () => {
    return (
        <Container textAlign='left'>
            <Header as='h2' color='blue'>About MyTTF</Header>
            <p>
                MyTTF is a sports journaling app focused on the sport of table tennis. This app helps players record their matches with other players, find other players, locations to play, and upcoming tournaments. It also allows for tournament directors to create leagues and tournaments, share it and attract player into this great sport.
            </p>
            <p>
                Additional features include: a digital scoreboard, video recording and uploads, built-in match tracking with win:loss percentages, progress bars, record wins and trophy badges. 
            </p>
            <p>
                Keep up to date with table tennis in your area and subscribe:
            </p>
            <Input focus placeholder='e-mail' action='Subscribe'/>
        </Container>
    )
}

export default AboutPage