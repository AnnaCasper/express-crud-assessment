var myBody = document.getElementsByTagName('body')[0];
var article = document.createElement('article');
var myHeader = document.createElement('h1');
var headerText = document.createTextNode("Superstar");
myHeader.appendChild(headerText);
article.appendChild(myHeader);
myBody.appendChild(article);
var para1 = document.createElement('p');
var para1Text = document.createTextNode("Is what you are");
para1.appendChild(para1Text);
article.appendChild(para1);

var aside = document.createElement('aside');
var para2 = document.createElement('p');
var para2Text = document.createTextNode("Related");
para2.appendChild(para2Text);
aside.appendChild(para2);
article.a
