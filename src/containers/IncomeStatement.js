//The Income Statement details profits and losses ENTRIES

import React, { Component } from 'react'
import BudgetForm from '../components/BudgetForm';
import BudgetEntries from '../components/BudgetEntries';

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
        return (
            <div>
                <h1>Income Statement</h1>
                <>
                    Budget:
                    <BudgetEntries />
                </>
                <>
                    Budget Form:  
                    <BudgetForm></BudgetForm>
                </>
            </div>
        )
    }

    
}
export default IncomeStatement;