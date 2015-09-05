var fs = require('fs');
var filter =  '.' + process.argv[3];
var path = require('path');
var modules = require('./module.js');

fs.readdir(process.argv[2], function(err, data){
  var results = [];
  for (var i = 0; i < data.length; i++) {
    if(path.extname(data[i]) === filter){
      console.log(data[i]);
    }
  }
})
