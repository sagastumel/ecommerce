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
  newItem.className = 'col=sm-4';
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

//
// //Bike Construc
//
// var div1 = document.createElement('div');
// document.getElementById('java').appendChild(div1);
//
// // BEANIES
// var div2 = document.createElement('div');
// document.getElementById('java').appendChild(div2);
//
// // SHIRTS
// var div3 = document.createElement('div');
// document.getElementById('java').appendChild(div3);
//
// // PANTS
// var div4 = document.createElement('div');
//
// document.getElementById('java').appendChild(div4);

// // SHOES
// var div5 = document.createElement('div');
// document.getElementById('java').appendChild(div5)
