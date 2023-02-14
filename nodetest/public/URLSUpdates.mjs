const URLtypes = {'hum' : 6, 'temp_hum' : 4};
let updateRate = 2000;

export let URLvalues = {'hum' : [], 'temp_hum' : []};

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


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

async function URLSloop() {
    while (true) {
        updateURLS();
        sleep(updateRate);
    }
}

URLSloop()