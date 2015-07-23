var button = document.querySelector('button');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://www.reddit.com/r/programming.json', true);
button.addEventListener('click', function(){
  var info = JSON.parse(xhr.responseText);
  console.log(info);
  var list = document.getElementById('list')
  for (var key in info){
    var p = document.createElement('p');
    p.innerHTML = info[key]
    list.appendChild(p);
  };
  var info2 = info.data;
  for (var key in info2){
    var p = document.createElement('p');
    p.innerHTML = info2[key]
    list.appendChild(p);
  };
  var info3 = info.data.children;
  for (var key in info3){
    var p = document.createElement('p');
    p.innerHTML = info3[key]
    list.appendChild(p);
  };
});
xhr.send(null);

function parseQueryString (queryString){
  var search = {}; 
    search = "?anna=archery&cat=dog&job=cash";
    search = search.replace("?", "");
    search = search.split("&");
  var obj ={};
  for (var i = 0; i < search.length; i++) {
    var y = search[i].split("=");
      obj[y[0]] = y[1];
  };
  console.log(obj);
};
