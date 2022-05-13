import React, {useState} from 'react';

import './ChartBar.css';

const ChartBar = props => {
    const [test1, test2] = useState();
    let barFillHeight;
    let barFillHeight2;
    let barFillHeight3;
    let barFillHeight4;
    let barFillHeight5;
    let barFillHeight6;
    let barFillHeight7;
    let barFillHeight8;
    let barFillHeight9;
    let barFillHeight10;
    let barFillHeight11;
    let barFillHeight12;
    let barFillHeight13;

    let spends = props.value + props.value2 + props.value3 + props.value4 + props.value5 + props.value6 + props.value7 + props.value8 + props.value9 + props.value10 + props.value11 + props.value12 + props.value13;
    spends = Math.floor(spends * 100) / 100;

    //const dateYear = props.dataYear.getFullYear();

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
        barFillHeight2 = Math.round((props.value2 / props.maxValue) * 100) + '%';
        barFillHeight3 = Math.round((props.value3 / props.maxValue) * 100) + '%';
        barFillHeight4 = Math.round((props.value4 / props.maxValue) * 100) + '%';
        barFillHeight5 = Math.round((props.value5 / props.maxValue) * 100) + '%';
        barFillHeight6 = Math.round((props.value6 / props.maxValue) * 100) + '%';
        barFillHeight7 = Math.round((props.value7 / props.maxValue) * 100) + '%';
        barFillHeight8 = Math.round((props.value8 / props.maxValue) * 100) + '%';
        barFillHeight9 = Math.round((props.value9 / props.maxValue) * 100) + '%';
        barFillHeight10 = Math.round((props.value10 / props.maxValue) * 100) + '%';
        barFillHeight11 = Math.round((props.value11 / props.maxValue) * 100) + '%';
        barFillHeight12 = Math.round((props.value12 / props.maxValue) * 100) + '%';
        barFillHeight13 = Math.round((props.value13 / props.maxValue) * 100) + '%';
        
    }

    
    const func1 = (value) => {
        const properDate = []
        const chartMonths = [
            {label: 'Jan', value: '0'},
            {label: 'Feb', value: '1'},
            {label: 'Mar', value: '2'},
            {label: 'Apr', value: '3'},
            {label: 'May', value: '4'},
            {label: 'Jun', value: '5'},
            {label: 'Jul', value: '6'},
            {label: 'Aug', value: '7'},
            {label: 'Sep', value: '8'},
            {label: 'Oct', value: '9'},
            {label: 'Nov', value: '10'},
            {label: 'Dec', value: '11'},
       ]


        for (let i = 0; i < 12; i++) {
            if (chartMonths[i].label === value.target.innerText) {
                properDate.push(chartMonths[i].value)
                break;
            }

        }
        //properDate.push(dateYear);
        props.omco(properDate);
        test2();

    }

    return <div className="chart-bar">
        <div className="chart-bar__inner">
            {}
            <div className="chart-bar__fill" title={'Food - ' + (Math.floor(props.value * 100) / 100) + ' (' + barFillHeight + ')'} style={{height: barFillHeight}}></div>
            <div className="chart-bar__fill_2" title={'Fast-food - ' + (Math.floor(props.value2 * 100) / 100)  + ' (' + barFillHeight2 + ')'} style={{height: barFillHeight2}}></div>
            <div className="chart-bar__fill_3" title={'Clothes - ' + (Math.floor(props.value3 * 100) / 100)  + ' (' + barFillHeight3 + ')'} style={{height: barFillHeight3}}></div>
            <div className="chart-bar__fill_4" title={'Cosmetics - ' + (Math.floor(props.value4 * 100) / 100)  + ' (' + barFillHeight4 + ')'} style={{height: barFillHeight4}}></div>
            <div className="chart-bar__fill_5" title={'Mobile - ' + (Math.floor(props.value5 * 100) / 100)  + ' (' + barFillHeight5 + ')'} style={{height: barFillHeight5}}></div>
            <div className="chart-bar__fill_6" title={'Online-shopping - ' + (Math.floor(props.value6 * 100) / 100)  + ' (' + barFillHeight6 + ')'} style={{height: barFillHeight6}}></div>
            <div className="chart-bar__fill_7" title={'Drugs - ' + (Math.floor(props.value7 * 100) / 100)  + ' (' + barFillHeight7 + ')'} style={{height: barFillHeight7}}></div>
            <div className="chart-bar__fill_8" title={'Top-up - ' + (Math.floor(props.value8 * 100) / 100)  + ' (' + barFillHeight8 + ')'} style={{height: barFillHeight8}}></div>
            <div className="chart-bar__fill_9" title={'Transfer - ' + (Math.floor(props.value9 * 100) / 100)  + ' (' + barFillHeight9 + ')'} style={{height: barFillHeight9}}></div>
            <div className="chart-bar__fill_10" title={'Entertainment - ' + (Math.floor(props.value10 * 100) / 100)  + ' (' + barFillHeight10 + ')'} style={{height: barFillHeight10}}></div>
            <div className="chart-bar__fill_11" title={'Payments - ' + (Math.floor(props.value11 * 100) / 100)  + ' (' + barFillHeight11 + ')'} style={{height: barFillHeight11}}></div>
            <div className="chart-bar__fill_12" title={'Other - ' + (Math.floor(props.value12 * 100) / 100)  + ' (' + barFillHeight12 + ')'} style={{height: barFillHeight12}}></div>
            <div className="chart-bar__fill_13" title={'Undefined - ' + (Math.floor(props.value13 * 100) / 100)  + ' (' + barFillHeight13 + ')'} style={{height: barFillHeight13}}></div>
        </div>
        <div className="chart-bar__label" title={'Spends ' + spends} onClick={func1} value={props.label}>{props.label}</div>
    </div>
    
};

export default ChartBar;