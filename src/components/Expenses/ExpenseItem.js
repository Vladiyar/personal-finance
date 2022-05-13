import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const [isActive, setActive] = useState(false);
    const [isDeleted, setDeleted] = useState(false);
    const [unDeleted, setUnDeleted] = useState(false);
    const [isEdited, setEdited] = useState(false);
    let id;
    let item;
    const toggleClass = () => {
        setActive(!isActive);
    };
    const deleteItem = () => {
        setDeleted(true);
        id = props.id;
        //console.log(id)
    };
    const undoDelete = () => {
        item = props;
        props.unDeleteId(props)
        setUnDeleted(true);
    };
    const editItem = () => {
    };
    const catListDict = {
        food: 'expense-item__cat',
        fast_food: 'expense-item__cat__2',
        clothes: 'expense-item__cat__3',
        cosmetics: 'expense-item__cat__4',
        mobile: 'expense-item__cat__5',
        online_shopping: 'expense-item__cat__6',
        drugs: 'expense-item__cat__7',
        top_up: 'expense-item__cat__8',
        transfer: 'expense-item__cat__9',
        entertainment: 'expense-item__cat__10',
        payments: 'expense-item__cat__11',
        other: 'expense-item__cat__12',
        undefinedValue: 'expense-item__cat__13',
    }

    
    

    let priceAmount;
    const cat = catListDict[props.cat]

    const createMarkup = (props) =>
        { 
        priceAmount = props
            return {__html: 	
            '&#9100'}; }
        
                
    return <tr className={isActive ? 'expense-change': null} onClick={toggleClass} >
                <Card className={`"expense-item" ${isDeleted ? 'expense-deleted'  : ""} `}>
                    <div className={isDeleted ? 'expense-deleted': 'expense-item__price'} >
                        {isDeleted ? <div dangerouslySetInnerHTML={createMarkup()} /> : props.amount}
                    </div>
                    
                    <div className="details">
                        <div>
                            <ExpenseDate date={props.date} />
                        </div>
                        <div className="expense-item__cat" className={cat}>
                            
                        </div>
                        <div className="expense-item__description" >
                            <span>{props.id}</span>
                            <span>{props.title}</span>
                            <select name="cat" onChange={console.log(1111122223333)}>
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
                        <button onClick={editItem}>Edit</button>
                        {!isDeleted ? <button onClick={deleteItem}>Delete</button> : <button onClick={undoDelete}>Undo</button>}
                        
                        
                    </div>
                </Card>
            </tr>

}
export default ExpenseItem;
