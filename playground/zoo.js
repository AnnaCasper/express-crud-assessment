function Pig(nickname, speak, feed){
  this.nickname = nickname,
  this.speak = speak,
  this.feed = feed
};

function Rhino(nickname, speak, feed){
  this.nickname = nickname,
  this.speak = speak,
  this.feed = feed
};

function Dog(nickname, speak, feed){
  this.nickname = nickname,
  this.speak = speak,
  this.feed = feed
};

var pig = new Pig('Rusty', 'oink', 'nomnomnom');
var rhino = new Rhino('Hedwig', 'grunt', 'nomnomnom');
var dog = new Dog('Iago', 'woof', 'nomnomnom');

Pig.prototype.speak = function(){
  console.log('oink');
}

Rhino.prototype.speak = function(speak){
  console.log(speak);
}

Dog.prototype.speak = function(speak){
  console.log(speak);
}

Pig.prototype.feed = function(feed){
  console.log(feed);
}

Rhino.prototype.feed = function(feed){
  console.log(feed);
}

Dog.prototype.speak = function(feed){
  console.log(feed);
}

pig.speak()
rhino.speak()
dog.speak()
pig.feed()
rhino.feed()
dog.feed()
