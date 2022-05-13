import React, {useState} from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
    const[data1, data2] = useState();
    const ChangeMonth = (selected2) => {
        props.onChangeMonth(selected2)
        data2();
      }

    const chartDataPoints = [
        {label: 'Jan', value: 0, value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0, value10: 0, value11: 0, value12: 0, value13: 0,},
        {label: 'Feb', value: 0, value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0, value10: 0, value11: 0, value12: 0, value13: 0,},
        {label: 'Mar', value: 0, value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0, value10: 0, value11: 0, value12: 0, value13: 0,},
        {label: 'Apr', value: 0, value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0, value10: 0, value11: 0, value12: 0, value13: 0,},
        {label: 'May', value: 0, value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0, value10: 0, value11: 0, value12: 0, value13: 0,},
        {label: 'Jun', value: 0, value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0, value10: 0, value11: 0, value12: 0, value13: 0,},
        {label: 'Jul', value: 0, value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0, value10: 0, value11: 0, value12: 0, value13: 0,},
        {label: 'Aug', value: 0, value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0, value10: 0, value11: 0, value12: 0, value13: 0,},
        {label: 'Sep', value: 0, value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0, value10: 0, value11: 0, value12: 0, value13: 0,},
        {label: 'Oct', value: 0, value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0, value10: 0, value11: 0, value12: 0, value13: 0,},
        {label: 'Nov', value: 0, value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0, value10: 0, value11: 0, value12: 0, value13: 0,},
        {label: 'Dec', value: 0, value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0, value10: 0, value11: 0, value12: 0, value13: 0,},
    ];
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        if(expense.cat === 'food') {
            chartDataPoints[expenseMonth].value += expense.amount;
        }else if (expense.cat === 'fast_food') {
            chartDataPoints[expenseMonth].value2 += expense.amount;
        }else if (expense.cat === 'clothes') {
            chartDataPoints[expenseMonth].value3 += expense.amount;
        }else if (expense.cat === 'cosmetics') {
            chartDataPoints[expenseMonth].value4 += expense.amount;
        }else if (expense.cat === 'mobile') {
            chartDataPoints[expenseMonth].value5 += expense.amount;
        }else if (expense.cat === 'online_shopping') {
            chartDataPoints[expenseMonth].value6 += expense.amount;
        }else if (expense.cat === 'drugs') {
            chartDataPoints[expenseMonth].value7 += expense.amount;
        }else if (expense.cat === 'top_up') {
            chartDataPoints[expenseMonth].value8 += expense.amount;
        }else if (expense.cat === 'transfer') {
            chartDataPoints[expenseMonth].value9 += expense.amount;
        }else if (expense.cat === 'entertainment') {
            chartDataPoints[expenseMonth].value10 += expense.amount;
        }else if (expense.cat === 'payments') {
            chartDataPoints[expenseMonth].value11 += expense.amount;
        }else if (expense.cat === 'other') {
            chartDataPoints[expenseMonth].value12 += expense.amount;
        }else if (expense.cat === undefined) {  
            chartDataPoints[expenseMonth].value13 += expense.amount;
        }
    }

    return <Chart dataPoints={chartDataPoints}  onChange={ChangeMonth} />
};

export default ExpensesChart;