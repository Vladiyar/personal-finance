import React, {useState} from 'react';
import './ExpenseForm.css';



const ExpenseForm = (props) => {
    const start = new Date().toISOString().slice(0, 10);
    const start2 = new Date().toISOString().slice(0, 10);
    console.log(start);

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState(start);
    const [enteredCat, setEnteredCat] = useState('food');


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const catChangeHandler = (event) => {
        setEnteredCat(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
            cat: enteredCat

        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredCat('');
    };
    
    return <form onSubmit={submitHandler} className="form-expense">
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>            
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>        
            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" value={enteredDate}min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="cat">Category</label>
                
                <select name="cat" onChange={catChangeHandler}>
                    <option value="food">Food</option>
                    <option value="fast_food">Fast-food</option>
                    <option value="clothes">Clothes</option>
                    <option value="cosmetics">Cosmeticts</option>
                    <option value="mobile">Mobile</option>
                    <option value="online_shopping">Online</option>
                    <option value="drugs">Drugs</option>
                    <option value="top_up">Top Up</option>
                    <option value="transfer">Transfer</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="payments">Payments</option>
                    <option value="other">Other</option>
                </select>


            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Submit</button>
            </div>
        </div>
    </form>
}


export default ExpenseForm;