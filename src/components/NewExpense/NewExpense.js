import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

    const [isVisible, setIsVisible] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsVisible(false);
    };

    const newExpenseHandler = () => {
        setIsVisible(true);
    };

    const stopEditingHandler = () => {
        setIsVisible(false);
    };

    return (
        <div className='new-expense'>
            {isVisible && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
            {!isVisible && <button onClick={newExpenseHandler}>Add New Expense</button>}
        </div>
    )
}

export default NewExpense;