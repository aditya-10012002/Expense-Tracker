import './ExpenseForm.css'
import { useState } from 'react';

const ExpenseForm = (props) => {

    // We can use three useState or make it single on the form only.

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // Have to define all the keys.
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        // If state depends upons previous state like above use callback instead of that as it takes some time to update.

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // })

    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // console.log(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // console.log(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            {/* <div className='new-expense__actions'>
                <button onClick={cancelHandler}>Cancel</button>
            </div> */}
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )

}

export default ExpenseForm;