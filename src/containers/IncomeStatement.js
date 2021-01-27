//The Income Statement details profits and losses ENTRIES
/*
Income Statement
 L <BudgetEntries entries={Fixed Costs} />
    |
    L <BudgetEntryCard>
        L <BudgetEntry />
 L <BudgetEntries entries={Variable Costs} />
    |
    L <BudgetEntryCard>
        L <BudgetEntry />
    <Button ADD_ACTION>
        L <BudgetForm /> is magically expanded
*/

import React, { Component } from 'react'
import BudgetEntries from '../components/BudgetEntries';

import { connect } from 'react-redux';
import Popup from '../components/Popup.js';

class IncomeStatement extends Component {
    state = {
        showPopup: false
    }
    
    togglePopup = () => {
        this.setState({
          showPopup: !this.state.showPopup
        });
    }

    render() {
        const recurringCosts = [];
        const oneTimeCosts = [];
        this.props.entries.forEach(entry => entry.recurring ? recurringCosts.push(entry) : oneTimeCosts.push(entry));

        return (
            <div>
                <h1>Income Statement</h1>
                <>
                    {recurringCosts.length > 0 ? <BudgetEntries label = {"Fixed"} entries={recurringCosts} /> : null}
                    <br/>
                    { oneTimeCosts.length > 0 ? <BudgetEntries label = {"Varied"} entries={oneTimeCosts} /> : null }
                </>
                <button onClick={this.togglePopup}> Add an Entry</button>
                { this.state.showPopup ?
                    <Popup
                        text='Budget Form:'
                        closePopup={this.togglePopup}
                    />
                    : null
                }
            </div>
        )
    }

    
}
const mapStateToProps = state => {
    return { entries: state.budgetReducer.entries }
}
export default connect(mapStateToProps)(IncomeStatement);