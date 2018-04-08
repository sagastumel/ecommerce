// My Header

var h1Element = document.createElement('h1');

var h1Text = document.createTextNode('My Little Market');

h1Element.appendChild(h1Text);

document.getElementById('myHeader').appendChild(h1Element);

//End Header
// Function for all my items
// Constructor Notation
function Item(name, price, stock, image) {
  this.name = name;
  this.price = price;
  this.stock = stock;
  this.image = image;
}

// onstructor notation for all items

var blackbike = new Item('Black bike', '$ 150', 10, 'img/bikes/bike1.jpg');
var orangebike = new Item('Orange bike', '$ 125', 5, 'img/bikes/bike2.jpg');
var bluebike = new Item('Blue bike', '$ 100', 10, 'img/bikes/bike3.jpg');

//plasing beanie information in here to see if i can create one full working code
var blackbeanie = new Item('Black Beanie', '$ 15', 20, 'img/beanies/beanie1.jpg');
var graybeanie = new Item('Grey Beanie', '$ 5', 40, 'img/beanies/beanie2.jpg');
var whitebeanie = new Item('White Beanie', ' $ 20', 10, 'img/beanies/beanie3.jpg');

//added shirt information
var blueCheckeredShirt = new Item('Blue Checkered Shirt', '$ 25', 15, 'img/shirts/shirt1.jpg');
var grayCheckeredShirt = new Item('Gray Checkered Shirt', ' $ 20', 20, 'img/shirts/shirt3.jpg');
var whiteGraySleeve = new Item('White Gray Sleeve', '$ 10', 30, 'img/shirts/shirt2.jpg');

//variables for pants
var bluePants = new Item('Blue Pants', '$ 30', 25, 'img/pants/jean2.jpg');
var lightbluePants = new Item('Light Blue Pants', '$ 40', 20, 'img/pants/jean1.jpg');
var acidbluePants = new Item('Acid Blue Pants', '$ 50', 15, 'img/pants/jean3.jpg');

//variables for shoes
var nikeShoe = new Item("Dark Gray Nike's", '$ 40', 20, 'img/shoes/shoe1.jpg');
var vansShoe = new Item('Black Vans', '$ 30', 25, 'img/shoes/shoe2.jpg');
var jordanShoe = new Item('Black n Blue Jordans', '$ 80', 10, 'img/shoes/shoe3.jpg');

//Array for all items
var itemArray = [blackbike, orangebike, bluebike, blackbeanie, graybeanie, whitebeanie, blueCheckeredShirt, grayCheckeredShirt, whiteGraySleeve, bluePants, lightbluePants, acidbluePants, nikeShoe, vansShoe, jordanShoe];

//forloop for bike Array
for (var i = 0; i < itemArray.length; i++) {
  var newItem = document.createElement('div');
  var newDiv = document.createElement('div');
  var nameH1 = document.createElement('h1');
  var priceH3 = document.createElement('h3');
  var stockH4 = document.createElement('h4');
  var btn = document.createElement('button');
  var image = document.createElement('img');

  // TODO: change the forloop above with the proper elements that will be used.
  //Elements for Text

  var itemName = document.createTextNode(itemArray[i].name);
  var itemPrice = document.createTextNode('Price:' + itemArray[i].price);
  var itemStock = document.createTextNode('Stock amount:' + itemArray[i].stock);
  var itemButton = document.createTextNode('Buy Now!');

  // image source attribute
  image.src = itemArray[i].image;

  //class attributes
  image.className = 'img-responsive';
  btn.className = 'btn btn-primary btn-lg';
  newItem.className = 'col-sm-4';
  newDiv.className = 'itemName' + [i] + 'thumbnail';

  //adding text to my Elements
  nameH1.appendChild(itemName);
  priceH3.appendChild(itemPrice);
  stockH4.appendChild(itemStock);
  btn.appendChild(itemButton);

  //adding elements to new divs
  newDiv.appendChild(nameH1);
  newDiv.appendChild(image);
  newDiv.appendChild(priceH3);
  newDiv.appendChild(stockH4);
  newDiv.appendChild(btn);

  //adding divs to new item dive
  newItem.appendChild(newDiv);

  //adding new item to the element with
  document.getElementById('item').appendChild(newItem);

}

// //function for beanies
// function Beanie(name, price, stock, image) {
//   this.name = name;
//   this.price = price;
//   this.stock = stock;
//   this.image = image;
// }
//
// //contructor notation for beanies
//
// var blackbeanie = new Beanie('Black Beanie', 15, 20, 'img/beanies/beanie1.jpg');
// var graybeanie = new Beanie('Grey Beanie', 5, 40, 'img/beanies/beanie2.jpg');
// var whitebeanie = new Beanie('White Beanie', 20, 10, 'img/beanies/beanie3.jpg');
//
// //Array for beanies
//
// var beanieArray = [blackbeanie, graybeanie, whitebeanie];
//
// // beanie for forloop
//
// for (var i = 0; i < beanieArray.length; i++) {
//   var newItem = document.createElement('div');
//   var newDiv = document.createElement('div');
//   var nameH1 = document.createElement('h1');
//   var priceH3 = document.createElement('h3');
//   var stockH4 = document.createElement('h4');
//   var btn = document.createElement('button');
//   var image = document.createElement('img');
//
//   // text for beanie Elements
//
//   var beanieName = document.createTextNode(beanieArray[i].name);
//   var beaniePrice = document.createTextNode('Price : $' + beanieArray[i].price);
//   var beanieStock = document.createTextNode('Stock : ' + beanieArray[i].stock);
//   var beanieImage = document.createTextNode(' ' + beanieArray[i].image);
//   var beanieBTN = document.createTextNode('Wear Now');
//
//   image.src = beanieArray[i].image;
//
//   image.className = 'img-responsive';
//   btn.className = 'btn btn-primary btn-lg';
//   newItem.className = 'col-sm-4';
//   newDiv.className = 'bikeName' + [i] + 'thumbnail';
//
//   // appending children for beanie
//
//   nameH1.appendChild(beanieName);
//   priceH3.appendChild(beaniePrice);
//   stockH4.appendChild(beanieStock);
//   btn.appendChild(beanieBTN);
//
//   // adding elemnts to out divs
//
//   newDiv.appendChild(nameH1);
//   newDiv.appendChild(image);
//   newDiv.appendChild(priceH3);
//   newDiv.appendChild(stockH4);
//   newDiv.appendChild(btn);
//
//   //adding divs to new item dive
//   newItem.appendChild(newDiv);
//
//   // adding new item to the element
//   document.getElementById('beanie').appendChild(newItem);
// }
