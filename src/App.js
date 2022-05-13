import Expenses from './components/Expenses/Expenses';
//import Stocks from './components/Stocks/Stocks';
import React, { isValidElement, useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import ReactDOM from 'react-dom'
//import { Line } from 'anychart-react.min.js'
//import {t2} from './appdata.js';
import converter from './converter/converter';
import {data} from './converter/data2.js';

let convertedData = converter(data);

let t2 = convertedData[0];
if(convertedData[1].length !== 0){
  console.log('ALERTTTT')
}

// let dataForConvert = ['1'];
// fetch('http://api.monobank.ua/personal/statement/0/1640965000/', {
//   headers: {'X-Token': 'un7GO1ku8P537Fw1SsFtjpWiFQRyv2wzFa0NKW3H-ExY'}

// })
// .then(res => res.json())
// .then(data => t2.push(data))
// .catch(error => console.error(error))



const time1 = new Date(1621006619 * 1000);
let pp = 0;
let num = 0;
let profit = 0;
for(let i of t2) {

  // getting rid of positive spends(income)
  if (i['amount'] > 0) {
    i['cat'] = 'profit';
    profit += i['amount'] * 0.01;
    
  }
  pp = i['date'];
  i['date'] = new Date(pp * 1000);

  i['amount'] = Math.floor(Math.abs(i['amount'] * 0.01) * 100) / 100;
  num++;
}


const App = () => {
  function fetchMovieHandler() {
    fetch('https://swapi.dev/api/starships/9/').then(response => {
      return response.json();
  }).then(data => {
    data.results;
    });
  }
  const [expenses, setExpenses] = useState(t2);
  
  console.log(fetchMovieHandler())

  const addExpenseHandler = expense => {
    console.log(expense)
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  const deleteExpense = (id) => {
    for(let i in expenses){
      try{if(expenses[i].id === id){
        delete(expenses[i])
        //expenses.splice(expenses[i], 1);
      }} catch (error) {
        console.log(expenses[i])
      }
    };
  };
  const potato = (props) => {
   // let id = props.id;
    let item = props;
    delete item.id;
    addExpenseHandler(item)
  //   for(let i in expenses){
  //     if(expenses[i].id === id){
  //       console.log(i)
  // } 
//}
  }   
  

  return(
  <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses items={expenses} unDeleteExpense={potato} onDeleteExpense={deleteExpense}
    />
  </div>  )
};




// ReactDOM.render(
//   <Line
//       type="pie"
//       data={[1, 2, 3, 4]}
//       title="Simple pie chart"
//   />, document.getElementById('root'));


// async function request(url, method = 'GET', data = null) {
//   try{
//       const headers = {}
//       let body

//       if (data) {
//           headers['Content-Type'] = 'application/json'
//           body = JSON.stringify(data)
//       }
//       const response = await fetch(url, {
//           method,
//           headers,
//           body
//       })
//       return await response.json()
//   } catch (e) {
//       console.warn('Error', e.message)
//   }
// }

// un7GO1ku8P537Fw1SsFtjpWiFQRyv2wzFa0NKW3H-ExY


export default App;