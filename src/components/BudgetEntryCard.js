// BEC's are the container for <BudgetEntry />
// This container handles STATE if the card is minimized or maximized,
// and passes that as a prop to the Budget Entry which displays the info
// This one also contains buttons to edit and delete entry

import React, { Component } from 'react'
import BudgetEntry from './BudgetEntry';

export default class BudgetEntryCard extends Component {
    state = {
        maximized: false
    }
    handleOnClick = () => {
        this.setState({
            maximized: !this.state.maximized
        })
    }

    render() {
        return (
            <div onClick={this.handleOnClick}>
                <BudgetEntry entry={this.props.entry} maximized={this.state.maximized} />                
            </div>
        )
    }
}

