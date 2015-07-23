var lockerArray = []

for (var i = 0; i < 101; i++){
  lockerArray.push(false);
};
lockerArray[0] = '';

function singlePass(x){
  for (var i = 0; i < lockerArray.length; i++) {
    if(i % x === 0) {
      if(lockerArray[i]){
        lockerArray[i] = false;
      } else {
        lockerArray[i] = true;
      };
    };
  };
};

for (var i = 0; i <= 100; i++) {
  singlePass(i)
};

var count = 0;
lockerArray.forEach(function(el, i){
  if(el) count++
});
console.log(count);

// for (var i = 0; i < lockerArray.length; i++) {
//   for (var j = i; j < lockerArray.length; j + (j + 1)) {
//     console.log(lockerArray.length);
//     if(lockerArray[j] === false){
//       lockerArray.splice(j, 1, true);
//     } else if(lockerArray[j] === true){
//       lockerArray.splice(j, 1, falsse)
//     };
//   };
// };
// console.log(lockerArray);

// for (var i = 0; i < lockerArray.length; i++) {
//   var result = 0;
//   if(lockerArray[i] === true){
//     result++
//   }
// }
// console.log(result);
