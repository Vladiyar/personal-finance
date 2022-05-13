import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';


const ExpensesList = (props) => {
    

    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
    }

    
    let food = [],
        fast_food = [],
        clothes = [],
        cosmetics = [],
        mobile = [],
        online_shopping = [],
        drugs = [],
        top_up = [],
        transfer = [], 
        entertainment = [],
        payments = [],
        other = [],
        undefinedValue = [];


    for (let i in props.items) {
        if(props.items[i].cat === 'food') {
            food.push(props.items[i])
        } else if(props.items[i].cat === 'fast_food') {
            fast_food.push(props.items[i])
        } else if(props.items[i].cat === 'clothes') {
            clothes.push(props.items[i])
        } else if(props.items[i].cat === 'cosmetics') {
            cosmetics.push(props.items[i])
        } else if(props.items[i].cat === 'mobile') {
            mobile.push(props.items[i])
        } else if(props.items[i].cat === 'online_shopping') {
            online_shopping.push(props.items[i])
        } else if(props.items[i].cat === 'drugs') {
            drugs.push(props.items[i])
        } else if(props.items[i].cat === 'top_up') {
            top_up.push(props.items[i])
        } else if(props.items[i].cat === 'transfer') {
            transfer.push(props.items[i])
        } else if(props.items[i].cat === 'entartainment') {
            entertainment.push(props.items[i])
        } else if(props.items[i].cat === 'payments') {
            payments.push(props.items[i])
        } else if(props.items[i].cat === 'other') {
            other.push(props.items[i])
        } else if(props.items[i].cat === undefined) {
            undefinedValue.push(props.items[i])
        }
    }
    const [deleteItem, deleteItem2] = useState();
    const [unDeleteItem, setUnDeleteItem] = useState();
    const deleteIdHandler = (selected) => {
        props.onDeleteItem(selected);
        deleteItem2();
    };
    const unDeleteIdHandler = (selected) => {
        props.unDeleteItem(selected);
        setUnDeleteItem();
    };
    return (<tbody className="expenses-list"><tr>
        <td><th className="title">Food</th>{(food.map((expense) => (<ExpenseItem id={expense.id} key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} cat={expense.cat} deleteId={deleteIdHandler} unDeleteId={unDeleteIdHandler}/>)))}</td>
        <td><th className="title">Fast Food</th>{(fast_food.map((expense) => (<ExpenseItem id={expense.id} key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} cat={expense.cat} deleteId={deleteIdHandler} unDeleteId={unDeleteIdHandler}/>)))}</td>
        <td><th className="title">Clothes</th>{(clothes.map((expense) => (<ExpenseItem id={expense.id} key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} cat={expense.cat} deleteId={deleteIdHandler} unDeleteId={unDeleteIdHandler}/>)))}</td>
        <td><th className="title">Cosmeticts</th>{(cosmetics.map((expense) => (<ExpenseItem id={expense.id} key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} cat={expense.cat} deleteId={deleteIdHandler} unDeleteId={unDeleteIdHandler}/>)))}</td>
        <td><th className="title">Mobile</th>{(mobile.map((expense) => (<ExpenseItem id={expense.id} key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} cat={expense.cat} deleteId={deleteIdHandler} unDeleteId={unDeleteIdHandler}/>)))}</td>
        <td><th className="title">Online</th>{(online_shopping.map((expense) => (<ExpenseItem id={expense.id} key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} cat={expense.cat} deleteId={deleteIdHandler} unDeleteId={unDeleteIdHandler}/>)))}</td>
        <td><th className="title">Drugs</th>{(drugs.map((expense) => (<ExpenseItem id={expense.id} key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} cat={expense.cat} deleteId={deleteIdHandler} unDeleteId={unDeleteIdHandler}/>)))}</td>
        <td><th className="title">Top Up</th>{(top_up.map((expense) => (<ExpenseItem id={expense.id} key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} cat={expense.cat} deleteId={deleteIdHandler} unDeleteId={unDeleteIdHandler}/>)))}</td>
        <td><th className="title">Transfer</th>{(transfer.map((expense) => (<ExpenseItem id={expense.id} key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} cat={expense.cat} deleteId={deleteIdHandler} unDeleteId={unDeleteIdHandler}/>)))}</td>
        <td><th className="title">Entartainment</th>{(entertainment.map((expense) => (<ExpenseItem id={expense.id} key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} cat={expense.cat} deleteId={deleteIdHandler} unDeleteId={unDeleteIdHandler}/>)))}</td>
        <td><th className="title">Payments</th>{(payments.map((expense) => (<ExpenseItem id={expense.id} key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} cat={expense.cat} deleteId={deleteIdHandler} unDeleteId={unDeleteIdHandler}/>)))}</td>
        <td><th className="title">Other</th>{(other.map((expense) => (<ExpenseItem id={expense.id} key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} cat={expense.cat} deleteId={deleteIdHandler} unDeleteId={unDeleteIdHandler}/>)))}</td>
        <td><th className="title">Undefined</th>{(undefinedValue.map((expense) => (<ExpenseItem id={expense.id} key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} cat={expense.cat} deleteId={deleteIdHandler} unDeleteId={unDeleteIdHandler}/>)))}</td>
   
    </tr></tbody>
    );
};

export default ExpensesList;