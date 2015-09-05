var Pen = require('./writing-utensil.js')

var blue = new Pen.Pen(10);
console.log(blue);
blue.write('hello');
console.log(blue);
console.log(blue.enough('bluepen'));
console.log(blue.enough('hi'));
