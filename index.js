const fs = require('fs')

const express = require("express");
const path = require('path');
const app = express();


// append data to a file
fs.appendFile(__dirname + '/index.html', 'Hey there!', err => {
  if (err) {
    throw err
  }
  console.log('File is updated.')
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))

});

app.listen(3000);
console.log('Express server started'+app.path.host);


