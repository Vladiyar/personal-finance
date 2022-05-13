import React, {useState} from 'react'
import  ReactDOM from 'react';
import AnyChart from 'anychart-react.min.js'

const Stocks = () => {
    anychart.onDocumentReady(function() {
		


        // create data
		const a = {'Apple Inc.': 919.1999999999999, 'Applied Materials, Inc.': 1362.2, 'Microsoft Corporation': 607.2676, 'D.R. Horton, Inc.': 483.075, 'JP Morgan Chase & Co.': 1127.63, 'Logitech International S.A. - R': 419.52, 'NextEra Energy, Inc.': 587.615, 'Visa Inc.': 463.22}
		
		let sum = 0
		
		let combined = 0
		// percentage counting
		for (var key in a) {
			if (a.hasOwnProperty(key)) {
				sum += a[key]		
			}
		}

		// Getting data from back end
		// const x = () => {
		// 	fetch('http://147.182.246.121:5000/data')
		// 	.then((response) => {
		// 		console.log(123)
		// 		return response.json()
		// 	})
		// }
		// x();



		// displaying chart with data
		var data = []

		let capital = {name: "Capital", children: []}

		let etf = {name: "ETF", description: "Stocks, mostly Interactive Brokers", children: []}
		for (var key in a) {
			if (a.hasOwnProperty(key)) {
				etf['children'].push(
					total = Math.round(a[key] / sum  * 100),
						{name: key, value: a[key], 'percentage': (total + '%') }
					)	
			}
		}


		let fiat = {name: "Fiat", children: [
              {name: "UAN", value: 989},
              {name: "USD", value: 440},
              {name: "EUR", value: 0},
              {name: "RUB", value: 0}
            ]},  
        crypto = {name: "Cripto", children: [
              {name: "Bitcoin", value: 158},
              {name: "Ephirium", value: 140},
            ]},  
        deposit = {name: "Deposit", children: [
              {name: "Mono", value: 1000, description: "Potato pototo"}
			  
            ]}  


		capital['children'].push(fiat, crypto, etf, deposit)
		console.log(capital)
		data.push(capital)

        var data2 = [
          {name: "Capital", children: [
            {name: "ETF", description: "Stocks, mostly Interactive Brokers", children: []},
            {name: "Cash", children: [
              {name: "UAN", value: 346},
              {name: "USD", value: 316},
              {name: "EUR", value: 114},
              {name: "RUB", value: 23}
            ]},
            {name: "Fiat", children: [
              {name: "UAN", value: 233},
              {name: "USD", value: 183},
              {name: "EUR", value: 135},
              {name: "RUB", value: 100}
            ]},  
            {name: "Cripto", children: [
              {name: "Bitcoin", value: 158},
              {name: "Ephirium", value: 140},
            ]},  
            {name: "Deposit", children: [
              {name: "Mono", value: 20, description: "Potato pototo"}
			  
            ]}  
          ]} 
        ];
    // create a data tree
	var treeData = anychart.data.tree(data, "as-tree");

	// create a treemap chart visualizing the data tree
	var chart = anychart.treeMap(treeData);

	// set the depth of hints
	chart.hintDepth(1);
	// set the opacity of hints
	chart.hintOpacity(0.8);

	// configure the visual settings of the chart
	// chart.hovered().fill("red", 0.2);
	chart.selected().fill("orange", 0.6);
	// chart.selected().hatchFill("backward-diagonal", "silver", 2, 20);
	chart.normal().stroke("silver");
	chart.hovered().stroke("yellow", 3);
	chart.selected().stroke("gray", 2);

	// create and configure a custom color scale
	var customColorScale = anychart.scales.linearColor();
	customColorScale.colors(["SteelBlue", "MediumSeaGreen"]);
	// apply the custom color scale to the treemap chart
	chart.colorScale(customColorScale);
	
	// add the color range

	// Useless string under chart
	chart.colorRange().enabled(false);
	chart.colorRange().length("100%");

	// enable HTML in the chart title
	chart.title().useHtml(true);
	// configure the chart title
	chart.title(
	"<span style='font-size:30; font-style:bold'>My net value</span><br><i><span style='font-size:14; font-style:italic'>is {%}</i>"
	);

	// enable HTML in the chart tooltips
	
	chart.tooltip().useHtml(true);
	// configure the chart tooltips
	chart.tooltip().format(
	"{%percentage}"
	);

	// enable HTML in the chart labels
	chart.labels().useHtml(true);
	// configure the chart labels
	chart.labels().format(
	"<span style='font-size:22; color:white; font-weight:bold'>{%name}</span><br>{%value}<br>"
	);

	// set the container id
	chart.container("container");

	// draw the chart
	chart.draw();

  
      });
    return <div id="container"></div>
}

export default Stocks;