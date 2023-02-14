const { response } = require('express');
const express = require('express');

const app = express();
const path = require("path");
const router = express.Router();

const URLtypes = {'hum' : 6, 'temp_hum' : 4};

function test(url) {
  return fetch('https://dt.miet.ru/ppo_it/api/'+url, {
    method : 'GET',
    headers : {'X-Auth-Token': 'Wjt8vz'}
  })
}

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

for (let type in URLtypes) {
  for (let n = 1; n <= URLtypes[type]; n++) {

    let url = type+'/'+String(n);

    app.get('/'+url, function(req, res) {
      test(url).then(response => response.json()).then(j => JSON.stringify(j)).then(strj => { res.end(strj) })
    })
  }
}

app.use('/', router);
app.listen(process.env.port || 3000);