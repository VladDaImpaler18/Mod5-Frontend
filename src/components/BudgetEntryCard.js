// BEC's are the container for <BudgetEntry />
// This container handles STATE if the card is minimized or maximized,
// and passes that as a prop to the Budget Entry which displays the info
// This one also contains buttons to edit and delete entry
// Props include entry, 
import React, { Component } from 'react'
import BudgetEntry from './BudgetEntry';

class BudgetEntryCard extends Component {
    state = {
        showMore: false
    }
    handleOnClick = () => {
        this.setState({
            showMore: !this.state.showMore
        })
    }
    handleDeleteOnClick = () => console.log("Delete button activated @ BudgetEntryCard.js: ", this.props.entry.name)

    render() {
        return (
            <div onClick={this.handleOnClick}>
                <BudgetEntry entry={this.props.entry} showMore={this.state.showMore ? "block" : "none"}> 
                    <button onClick={() => this.handleDeleteOnClick()}> X </button>               
                </BudgetEntry>
            </div>
        )
    }
}

export default BudgetEntryCard;