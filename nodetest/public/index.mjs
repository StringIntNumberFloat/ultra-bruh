import { URLvalues } from "./URLSUpdates.mjs";
import { updateURLS } from "./URLSUpdates.mjs";

function updateFrontURLS() {
    
    for (let type in URLtypes) {
        for (let n = 1; n <= URLvalues[type].length-1; n++) {
            const element = document.getElementById(type+String(n));
            element.textContent = JSON.stringify(URLvalues[type][n]);
        }
    }
}

document.getElementById('updateURLSbutton').onclick = updateFrontURLS

/*const URLtypes = {'hum' : 6, 'temp_hum' : 4};
let URLvalues = {'hum' : [], 'temp_hum' : []};
let temp_humidities = {};
let humidities = {};

function updateURLS() {
    for (let type in URLtypes) {
        for (let n = 1; n <= URLtypes[type]; n++) {

            let url = type+'/'+String(n);
            let full_name = 'humidity';

            if (type != 'hum') {
                full_name = 'temperature'
            };
            
            fetch('http://127.0.0.1:3000/'+url)
                .then(resp => resp.json())
                .then(json => {
                    URLvalues[type][n] = json
                    JSON.stringify(json)
                })
                .then(data => {
                    //const element = document.getElementById(full_name+String(n));
                    //element.textContent = data;
                });
        }
    }
}

document.getElementById('updateURLSbutton').onclick = updateURLS;


    <h1 id="humidity1"></h1>
    <h1 id="humidity2"></h1>
    <h1 id="humidity3"></h1>
    <h1 id="humidity4"></h1>
    <h1 id="humidity5"></h1>
    <h1 id="humidity6"></h1>

    <h1 id="temperature1"></h1>
    <h1 id="temperature2"></h1>
    <h1 id="temperature3"></h1>
    <h1 id="temperature4"></h1>

*/
