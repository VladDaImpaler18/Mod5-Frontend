//container which renders the budget.
//In parent component There are 2x BudgetEntries, a fixed costs and varied costs.
//When the section is click it will minimize it as a whole section, only showing the total # of items, and total cost.

//this second holds the total

import React, { Component } from 'react'
import BudgetEntryCard from './BudgetEntryCard';

//props { label, entries}
class BudgetEntries extends Component {
        //when div is clicked it minimizes and instead shows total # items, summed cost
        //when maximized it renders all of the stuff
        state = {
            expanded: false,
        }

        handleOnClick = () => {
            this.setState({
                expanded: !this.state.expanded
            })
          }
        
        render(){
        const values = this.props.entries.map( entry => parseFloat(entry.amount));
        const total = values.reduce((sum,entry) => sum + entry)
        return (
            <div>
                <li onClick={this.handleOnClick}><label>{this.state.expanded ? "[ - ]" : "[ + }"}{this.props.label}: </label><label># of Entries: </label>{this.props.entries.length} <label>Total: </label> {total}</li>
                
                <ul style={this.state.expanded ? {display: 'block'} : {display: 'none'} }>
                    {this.props.entries.map(entry => <BudgetEntryCard entry={entry} />)}
                </ul>
         </div>
        )}
}
export default BudgetEntries;