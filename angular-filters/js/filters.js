app.filter('kebab', function () {
  return function (input) {
    if(typeof input === 'number'){
      return input
    } else {
      return input.replace(/_/g , "-");
    }
  };
});

app.filter('camel', function () {
  return function (input) {
    if(typeof input === 'number'){
      return input
    } else {
      var array = input.split('');
      array.forEach(function (char, i, array) {
        if(char === '-'){
          array.splice(i, 1);
          array[i] = array[i].toUpperCase();
        }
      })
      return array.join('');
    }
  };
});

app.filter('pigLatin', function () {
  return function (input) {
    input = input.split(' ');
    var vowels = ['a','e','i','o','u'];
    var output = [];
    var result = input.map(function (word) {
      for (var i = 0; i < word.length; i++) {
        if(vowels.indexOf(word[i]) >= 0){
          return word.slice(i) + '-' + word.slice(0, i) + 'ay'
        }
      }
    })
    return result.join(' ')
  }
});

app.filter('redact', function () {
  return function (input, word) {
    return input.replace(word, 'REDACTED')
  }
})
