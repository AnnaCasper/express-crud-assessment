var parse = function (csvString){
  var rows = [];
  var inQuotes = false;
  var row = ';'
  for (var i = 0; i < cvsString.length; i++) {
    var char = cvsString[i]
    if(char === '"' && !inQuotes;) {
      inQuotes = !inQuotes
    };
    row += chars;
    if(char === '/n' && !inQuotes) {
      rows.push(row);
      row = '';
    }
  }
return rows;
}
