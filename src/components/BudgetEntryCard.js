// BEC's are the container for <BudgetEntry />
// This container handles STATE if the card is minimized or maximized,
// and passes that as a prop to the Budget Entry which displays the info
// This one also contains buttons to edit and delete entry
// Props include entry, 
import React, { Component } from 'react'
import BudgetEntry from './BudgetEntry';
import { connect } from 'react-redux';
import { deleteEntry } from '../actions/budgetActions';

class BudgetEntryCard extends Component {
    state = {
        expanded: false
    }
    handleOnClick = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }
    handleDeleteOnClick = () => {
        console.log("Delete button activated @ BudgetEntryCard.js: ", this.props.entry.name)
        return this.props.deleteEntry(this.props.entry.id)
    }

    render() {
        return (
            <div>
                <BudgetEntry entry={this.props.entry} expanded={this.state.expanded} />
                <button onClick={() => this.handleDeleteOnClick()}> X </button>
                <a href={`#${this.props.entry.name}`} onClick={this.handleOnClick}>{this.state.expanded ? "Show less..." : "Show more..." }</a>
            </div>
        )
    }
}

export default connect(null, { deleteEntry })(BudgetEntryCard);