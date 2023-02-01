import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 50.50,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Campground visit',
    amount: 150,
    date: new Date(2022, 5, 12),
  },
  {
    id: 'e6',
    title: 'Dog food',
    amount: 50,
    date: new Date(2022, 8, 9),
  },
  {
    id: 'e7',
    title: 'Groceries',
    amount: 40,
    date: new Date(2021, 1, 1),
  },
  {
    id: 'e8',
    title: 'Cultivation',
    amount: 400,
    date: new Date(2019, 5, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    // console.log(expense);
    // If updating using previous state, use a callback function.
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
