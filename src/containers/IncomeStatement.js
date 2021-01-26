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
import BudgetForm from '../components/BudgetForm';
import BudgetEntries from '../components/BudgetEntries';

import { connect } from 'react-redux';

class IncomeStatement extends Component {
    //testing state
    // state = {
    //     id: "3f8cbe9a-68d6-4462-b279-92c1fbab7b9e",
    //     name: "Salary",
    //     description: "Paid on Bi-weekly basis. Taxes accounted for. Recurring until employment change. Amount has been adjusted to reflect rate of pay for ${Week, Month, YTD}",
    //     amount: "1521.0",
    //     recurring: false,
    //     expirationDate: null,
    //     user_id: "8aca3151-f267-46a7-a6f6-e504f14929b0",
    //     wishlist_item_id: null,
    //     created_at: "2021-01-22T05:27:16.270Z",
    //     updated_at: "2021-01-22T05:27:16.270Z"}
    
    render() {
        const recurringCosts = [];
        const oneTimeCosts = [];
        this.props.entries.forEach(entry => entry.recurring ? recurringCosts.push(entry) : oneTimeCosts.push(entry));

        return (
            <div>
                <h1>Income Statement</h1>
                <>
                    <BudgetEntries label = {"Fixed"} entries={recurringCosts} />
                    <br/>
                    <BudgetEntries label = {"Varied"} entries={oneTimeCosts} />
                </>
                <>
                    Budget Form:  
                    <BudgetForm></BudgetForm>
                </>
            </div>
        )
    }

    
}
const mapStateToProps = state => {
    return { entries: state.budgetReducer.entries }
}
export default connect(mapStateToProps)(IncomeStatement);