var fs = require('fs');

var fileName = process.argv

var myFunc = function(fileName){
  fs.readFile(fileName, function(err, data){
    if (err) {
      console.log(err);
    };
    fs.writeFile(fileName + '.copy', data.toString(), function(err){
      if (err) {
        console.log(err);
      };
      console.log('saved');
    });
  })
};

myFunc(fileName[2]);
