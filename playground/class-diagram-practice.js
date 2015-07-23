var Concert = function(bandName, startTime){
  this.bandName = bandName,
  this.startTime = startTime
}

Concert.prototype.countdown = function(){
  //calculate countdown
  console.log(this.bandName + 8);
}

Concert.prototype.addConcertgoer = function(person){
  //add person 
};

var concert1 = new Concert("foo", new Date);
var concert2 = new Concert("bar", new Date);

concert1.countdown()
