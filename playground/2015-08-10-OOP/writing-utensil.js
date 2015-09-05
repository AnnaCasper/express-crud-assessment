//create a class called Pen
//which has an ink level
//and a method called write which takes a string
//and depletes the ink level
//ink level is 1 unit per letter
//add a method called enough(string), returns true or false based on whether it can write the given string
function Pen(inkLevel){
  this.inkLevel =  inkLevel
}

Pen.prototype.write = function(string){
  if(!this.enough(string)) throw "Not enough ink"
  this.inkLevel -= string.length
}

Pen.prototype.enough = function(string){
  return this.inkLevel >= string.length
}

module.exports = {
  Pen: Pen,
}
