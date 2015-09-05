
// [1,2,3].forEach(function (num) {
//   console.log(num);
// })

// var accum = "";
// ['a','b','c'].forEach(function (str, i, array) {
//   if(i < array.length -1){
//     accum += str + ",";
//   } else {
//     accum += str;
//   }
// })
// console.log(accum);

// [{name: 'Tom', age: 34},
//  {name: 'Sue', age: 25}].forEach(function (object, i, array) {
//    console.log(object.name + " " + object.age + ", ");
//  })

//filter (an array with fewer items)
//every(boolean)
//none(boolean)
//some(boolean)


//filter out numbers greater than 10
// var filterAboveTen = function (array) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i++) {
//     if(array[i] <= 10){
//       newArray.push(array[i])
//     }
//   }
//   console.log(newArray);
// }
//
// // filterAboveTen(array)
//
// var obj = {
//   array: [17, 2, 3, 16, 11, 10],
//   max: 10,
//   forEachFilter: function(){
//     var newArray = [];
//     this.array.forEach(function(num){
//       if(num <= this.max){
//         newArray.push(num)
//       }
//     }, this)
//     return newArray
//   }
//
// }
//
// console.log(obj.forEachFilter())

var obj = {
  numbers: [17,2,4,16,19,10],
  // big: function(){
  //   var newArray = [];
  //   this.numbers.forEach(function(num){
  //     if(num > 10){
  //       newArray.push(num)
  //     }
  //    return newArray
  //   }.bind(this))
  //
  //   if(newArray.length == this.numbers.length){
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  big: function(){
    var result = true;
    this.numbers.forEach(function(num){
      if(num <= 10){
        result = false
      }
    })
    return result
  }
}

console.log(obj.big());
obj.numbers = [17, 13, 19]
console.log((obj.big()));

// forEach must mutate something / do some IO - return does not work
