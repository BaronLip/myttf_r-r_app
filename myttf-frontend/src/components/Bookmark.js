import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react';

export default class Bookmark extends Component {
    state = {
        bookmarked: false,
    }

    toggle = () => {
        this.setState(
            {bookmarked: !this.state.bookmarked}
        )
    }
    
    render() {
        return (
            <div>
                <Icon
                    onClick={this.toggle}
                    name='bookmark'
                    size='regular'
                />     
            </div>
        )
    }
}
