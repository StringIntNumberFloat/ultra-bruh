import { URLvalues } from "./URLSUpdates.mjs";
import { updateURLS } from "./URLSUpdates.mjs";

window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	title: {
		text: "Temperature of Each Boiler"
	},
	axisY: {
		title: "Temperature (°C)",
		includeZero: true,
		suffix: " °C"
	},
	data: [{
		type: "column",	
		yValueFormatString: "#,### °C",
		indexLabel: "{y}",
		dataPoints: [
			{ label: "boiler1", y: 206 },
			{ label: "boiler2", y: 163 },
			{ label: "boiler3", y: 154 },
			{ label: "boiler4", y: 176 },
			{ label: "boiler5", y: 184 },
			{ label: "boiler6", y: 122 }
		]
	}]
});

function updateChart() {

	var boilerColor, deltaY, yVal;
	var dps = chart.options.data[0].dataPoints;
	for (var i = 0; i < dps.length; i++) {
		if ( URLvalues['hum'].length < 7 ) { continue }

		yVal = URLvalues['hum'][i+1]['humidity']

		//color 
		boilerColor = yVal > 200 ? "#FF2500" : yVal >= 170 ? "#FF6000" : yVal < 170 ? "#6B8E23 " : null;
		dps[i] = {label: "Boiler "+(i+1) , y: yVal, color: boilerColor};
	}
	chart.options.data[0].dataPoints = dps; 
	chart.render();
};

updateURLS();
updateChart();

setInterval(function() { updateURLS(); updateChart() }, 500);

}