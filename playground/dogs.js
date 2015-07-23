var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dog_park");
mongoose.set('debug', true);

var dogSchema = new mongoose.Schema({
    name: String,
    breed: String,
    age: Number
});

var Dog =  mongoose.model("Dog", dogSchema);

Dog.create(
    {
        name: "Charlie",
        breed: "Lab",
        age: 2
    }
);

Dog.create(
    {
        name: "Wyatt",
        breed: "Lab",
        age: 11
    }
);

Dog.create(
    {
        name: "Sitka",
        breed: "Malamute",
        age: 2
    }
);

var dogArray = ["Jack", "Chloe", "Lucy", "Cooper", "Riley", "Bear", "Harley", "Lola"]

for (var i = 0; i < dogArray.length; i++) {
  Dog.create (
    {
      name: dogArray[i],
      breed: "Bernese Mountain Dog",
      age: Math.floor(Math.random() * 20)
    }
  )
};

var dogPack = [];

Dog.find({}, function(err, dogs){
  for (var i = 0; i < dogs.length; i++) {
    dogPack.push(dogs[i].name)
  }
  for (var j = 0; j < dogPack.length; j++) {
    console.log(dogPack[j] + " says 'Woof!'");
  };
});

Dog.find({breed: "Lab"}, function(err, labs){
  console.log(labs);
})

var puppies = ["Tater", "Garfunkel", "Luna", "Remus"];

for (var i = 0; i < puppies.length; i++) {
  Dog.create({
    name: puppies[i],
    breed: "Mutt",
    age: 0
  });
};

Dog.remove({name: "Garfunkel"}, function(err, dog){
  if(err){
        console.log(err)
    } else {
        console.log(dog)
    };
});

Dog.update({age: 0}, {age: 1}, function(err, dogs){
  if(err){
        console.log(err)
    } else {
        console.log(dogs)
    };
});
