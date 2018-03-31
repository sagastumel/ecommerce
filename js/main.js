// My Header

var div1 = document.createElement('div');

var body = document.getElementById('java').appendChild(div1);
var header = document.createElement('h1');
var h1Text = document.createTextNode('My Little Market');

div1.appendChild(header);

header.appendChild(h1Text);

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

}
//Bike Construc

var div1 = document.createElement('div');
document.getElementById('java').appendChild(div1);

// BEANIES
var div2 = document.createElement('div');
document.getElementById('java').appendChild(div2);

// SHIRTS
var div3 = document.createElement('div');
document.getElementById('java').appendChild(div3);

// PANTS
var div4 = document.createElement('div');

document.getElementById('java').appendChild(div4);

// SHOES
var div5 = document.createElement('div');
document.getElementById('java').appendChild(div5);
