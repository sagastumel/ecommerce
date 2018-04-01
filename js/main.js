// My Header

var h1Element = document.createElement('h1');

var h1Text = document.createTextNode('My Little Market');

h1Element.appendChild(h1Text);

document.getElementById('myHeader').appendChild(h1Element);

//End Header
// My first list of items (Bikes)
// Constructor Notation
function Bike(name, type, speed, stock, image) {
  this.name = name;
  this.type = type;
  this.speed = speed;
  this.stock = stock;
  this.image = image;
}

// cronstructor notation for bikes

var blackbike = new Bike('Black bike', 'Road', 'Very fast speed', '10', 'img/bikes/bike1.jpg');
var orangebike = new Bike('Orange bike', 'Dirt', 'Medium speed', '5', 'img/bikes/bike2.jpg');
var bluebike = new Bike('Blue bike', 'Multi Terrain', 'Varies on Terrain', '7', 'img/bikes/bike3.jpg');

//Array for Bikes
var bikeArray = new Array

bikeArray.push(blackbike, orangebike, bluebike);

//forloop for bike Array
for (var bikes = 0; bikes < bikeArray.length; bikes++) {
  var newItem = document.createElement('div');
  var newDiv = document.createElement('div');
  var nameH1 = document.createElement('h1');
  var typeH3 = document.createElement('h3');
  var speedH4 = document.createElement('h4');
  var stockH4 = document.createElement('h4');
  var btn = document.createElement('button');
  var image = document.createElement('img');

  //Elements for Text

  var bikeName = document.createTextNode(bikeArray[bikes].name);
  var bikeType = document.createTextNode('Availible types:' + bikeArray[bikes].type);
  var bikeSpeed = document.createTextNode('Speed type:' + bikeArray[bikes].speed);
  var bikeStock = document.createTextNode('Stock amount:' + bikeArray[bikes].stock);
  var bikeButton = document.createTextNode('Ride Now!');

  // image source attribute
  image.src = bikeArray[bikes].image;

  //class attributes
  image.className = 'img-responsive';
  btn.className = 'btn btn-primary btn-lg';
  newItem.className = 'col-sm-4';
  newDiv.className = 'bikeName' + [bikes] + 'thumbnail';

  //adding text to my Elements
  nameH1.appendChild(bikeName);
  typeH3.appendChild(bikeType);
  speedH4.appendChild(bikeSpeed);
  stockH4.appendChild(bikeStock);
  btn.appendChild(bikeButton);

  //adding elements to new divs
  newDiv.appendChild(nameH1);
  newDiv.appendChild(image);
  newDiv.appendChild(typeH3);
  newDiv.appendChild(speedH4);
  newDiv.appendChild(stockH4);
  newDiv.appendChild(btn);

  //adding divs to new item dive
  newItem.appendChild(newDiv);

  //adding new item to the element with
  document.getElementById('bikes').appendChild(newItem);

}


//function for beanies
function Beanie(name, price, stock, image) {
  this.name = name;
  this.price = price;
  this.stock = stock;
  this.image = image;
}

//contructor notation for beanies

var blackbeanie = new Beanie('Black Beanie', 15, 20, 'img/beanies/beanie1.jpg');
var graybeanie = new Beanie('Grey Beanie', 5, 40, 'img/beanies/beanie2.jpg');
var whitebeanie = new Beanie('White Beanie', 20, 10, 'img/beanies/beanie3.jpg');

//Array for beanies

var beanieArray = [blackbeanie, graybeanie, whitebeanie];

// beanie for forloop

for (var i = 0; i < beanieArray.length; i++) {
  var newItem = document.createElement('div');
  var newDiv = document.createElement('div');
  var nameH1 = document.createElement('h1');
  var priceH3 = document.createElement('h3');
  var stockH4 = document.createElement('h4');
  var btn = document.createElement('button');
  var image = document.createElement('img');

  // text for beanie Elements

  var beanieName = document.createTextNode(beanieArray[i].name);
  var beaniePrice = document.createTextNode('Price : $' + beanieArray[i].price);
  var beanieStock = document.createTextNode('Stock : ' + beanieArray[i].stock);
  var beanieImage = document.createTextNode(' ' + beanieArray[i].image);
  var beanieBTN = document.createTextNode('Wear Now');

  image.src = beanieArray[i].image;

  image.className = 'img-responsive';
  btn.className = 'btn btn-primary btn-lg';
  newItem.className = 'col-sm-4';
  newDiv.className = 'bikeName' + [i] + 'thumbnail';

  // appending children for beanie

  nameH1.appendChild(beanieName);
  priceH3.appendChild(beaniePrice);
  stockH4.appendChild(beanieStock);
  btn.appendChild(beanieBTN);

  // adding elemnts to out divs

  newDiv.appendChild(nameH1);
  newDiv.appendChild(image);
  newDiv.appendChild(priceH3);
  newDiv.appendChild(stockH4);
  newDiv.appendChild(btn);

  //adding divs to new item dive
  newItem.appendChild(newDiv);

  // adding new item to the element
  document.getElementById('beanie').appendChild(newItem);
}
