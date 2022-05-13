import React, {useState} from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const[data1, data2] = useState();

    const changeThisMonth = (selected) => {
        props.onChange(selected)
        data2();

    };
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value + dataPoint.value2 + dataPoint.value3 + dataPoint.value4 + dataPoint.value5 + dataPoint.value6 + dataPoint.value7 + dataPoint.value8 + dataPoint.value9 + dataPoint.value10 + dataPoint.value11 + dataPoint.value12);
    const totalMaximum = Math.max(...dataPointValues);

    return (<div className="chart">
        {props.dataPoints.map((dataPoint) => 
            <ChartBar 
                key={dataPoint.id}
                value={dataPoint.value}
                value2={dataPoint.value2}
                value3={dataPoint.value3}
                value4={dataPoint.value4} 
                value5={dataPoint.value5}
                value6={dataPoint.value6} 
                value7={dataPoint.value7} 
                value8={dataPoint.value8} 
                value9={dataPoint.value9} 
                value10={dataPoint.value10} 
                value11={dataPoint.value11} 
                value12={dataPoint.value12} 
                value13={dataPoint.value13} 
   
                maxValue={totalMaximum} 
                label={dataPoint.label}
                //dataYear={props.dataYear}
                omco={changeThisMonth}
            />
        )}
    </div>)
}

export default Chart;