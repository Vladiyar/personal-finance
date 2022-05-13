import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';



const Expenses = (props) => {
    const currentDate = new Date()
    const [filteredYear, setFilteredYear] = useState(currentDate.getFullYear().toString());
  
    const [filteredMonth, setFilteredMonth] = useState(currentDate.getMonth().toString());

    const [id, deletedId] = useState();
    const [unId, unDeletedId] = useState();

    const deleteItemHandler = (selectedId) => {
        props.onDeleteExpense(selectedId)
        deletedId();
    };

    const unDeleteItemHandler = (selectedId) => {
        props.unDeleteExpense(selectedId)
        unDeletedId();
        console.log(111111111111111)
    };

    const monthChangeHandler = (selectedMonth) => {
        setFilteredMonth(selectedMonth[0]);
    }


    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    // let items = props.items
    // let looping = []

    // for (let i  = 0; i< items.length; i++) {

    //     looping.push(
    //         <ExpenseItem 
    //             title={items[i].title}
    //             amount={items[i].amount}
    //             date={items[i].date}
    //         />
    //         )
    // }
    const filteredExpenses = props.items.filter(expense => {
        try {
            return expense.date.getFullYear().toString() === filteredYear;
            
          } catch (error) {
            console.error(error);
           
          }
    });
    
    const filteredExpenses2 = filteredExpenses.filter(expense => {
        return expense.date.getMonth().toString() === filteredMonth;
    });

    return (
    <div> 
        <Card className="expenses">  
            <ExpensesFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler}/>
            <ExpensesChart 
                expenses={filteredExpenses} 
                onChangeMonth={monthChangeHandler}/>
            <ExpensesList 
                items={filteredExpenses2}
                onDeleteItem={deleteItemHandler}
                unDeleteItem={unDeleteItemHandler}/> 
        </Card>
    </div>
    
    );
        

}
export default Expenses;