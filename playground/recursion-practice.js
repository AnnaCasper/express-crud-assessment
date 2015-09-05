var fizzbuzz = function(number){
  for (var i = 0; i < number; i++) {
    if(i % 3 === 0){
      console.log('fizz');
    } else if(i % 5 === 0){
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

// fizzbuzz(20);

var fizzbuzz = function(number){
  if(number === 0){
    console.log('done');
    return 1;
  }

  var output = '';

  if(number % 15 === 0){
    output += 'fizzbuzz'
  } else if(number % 5 === 0){
    output += 'buzz'
  } else if(number % 15 === 0){
    output += 'fizz'
  }
  console.log(output || number);
  fizzbuzz(number-1)
};

// fizzbuzz(20);

var countdown = function(number){
  for (var i = number; i >= 0; i--) {
    console.log(i);
  };
};

// countdown(20);

var recCountdown = function(number){
  if(number === 0){
    console.log(number);
    return;
  }
  console.log(number);
  recCountdown(number-1)
}

// recCountdown(20);

var sumArray = function(array){
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i]
  }
  console.log(result);
}

// sumArray([1,2,3])

var recSumArray = function(array, result, number){
  if(number > array.length-1){
    console.log(result);
    return;
  }
  result += array[number];
  number = ++number
  recSumArray(array, result, number)
}

recSumArray([1,2,3], 0, 0)

var fib = function(number){
  var result = 1;
  var x = 0;
  var y = 1;
  for (var i = 1; i < number; i++) {
    result = x + y;
    console.log(result);
    x = y
    y = result;
  }
}

// fib(20)

var recFib = function(number, result, x, y){
  if(result >= number){
    return;
  }
  result = x + y;
  console.log(result);
  x = y
  y = result
  recFib(number, result, x, y);
}

// recFib(100, 1, 0, 1)
