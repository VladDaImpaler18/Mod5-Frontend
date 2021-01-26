//container which renders the budget. Sections it off into a recurring costs and "unplanned" costs.
//When the section is click it will minimize it as a whole section, only showing the total # of items, and total cost.

//this second holds the total
import React, { Component } from 'react'
import BudgetEntryCard from './BudgetEntryCard';

class BudgetEntries extends Component {
    state = {
        
        detailedView: false
    }

    {recurringEntries, oneTimeEntries} = (re,nore) => props.entries.map(entry => {
         entry.reccuring ? recurringEntries.concat(entry) : oneTimeEntries.concat(entry)
    }) 

    renderEntries = () => {
        <div onClick={this.handleOnClick}></div>
    }

    handleOnClick = (event) => {
        //when div is clicked it minimizes and instead shows total # items, summed cost
        //when maximized it renders all of the stuff
    }
    return (
        <div>
            
        </div>
    )
}

export default BudgetEntries;