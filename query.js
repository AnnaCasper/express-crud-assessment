function parseQueryString (queryString){
  var search = {};
    search = queryString;
    search = search.replace("?", "");
    search = search.split("&");
  var obj ={};
  for (var i = 0; i < search.length; i++) {
    var y = search[i].split("=");
      obj[y[0]] = y[1];
  };
  console.log(obj);
};
