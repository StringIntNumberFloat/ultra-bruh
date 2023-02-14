import { URLvalues } from "./URLSUpdates.mjs";
import { updateURLS } from "./URLSUpdates.mjs";

window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	title: {
		text: "Humidity of Each Sensor"
	},
	axisY: {
		title: "Humidity (%)",
		includeZero: true,
		suffix: " %"
	},
	data: [{
		type: "column",	
		yValueFormatString: "##,## %",
		indexLabel: "{y}",
		dataPoints: [
			{ label: "Sensor 1", y: 206 },
			{ label: "Sensor 2", y: 163 },
			{ label: "Sensor 3", y: 154 },
			{ label: "Sensor 4", y: 176 },
			{ label: "Sensor 5", y: 184 },
			{ label: "Sensor 6", y: 122 }
		]
	}]
});

function updateChart() {

	var sensorColor, deltaY, yVal;
	var dps = chart.options.data[0].dataPoints;
	for (var i = 0; i < dps.length; i++) {
		if ( URLvalues['hum'].length < 7 ) { continue }

		yVal = URLvalues['hum'][i+1]['humidity']

		//color 
		sensorColor = yVal > 200 ? "#FF2500" : yVal >= 170 ? "#FF6000" : yVal < 170 ? "#6B8E23 " : null;
		dps[i] = {label: "Sensor "+(i+1) , y: yVal, color: sensorColor};
	}
	chart.options.data[0].dataPoints = dps; 
	chart.render();
};

updateURLS();
updateChart();

setInterval(function() { updateURLS(); updateChart() }, 500);

}
