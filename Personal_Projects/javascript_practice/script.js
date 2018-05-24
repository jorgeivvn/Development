var name = "Jorge Ivan";
console.log("Hello " + name);

//if statement
if (name.length > 7) {
  console.log("Wow! Your name is REALLY long!");
};

//if else statement

var age = 29;
console.log("You are " + age + " years old!");

if (age >= 25) {
  console.log("You are aging like fine wine!")
} else {
  console.log("You are a youngbuck!")
}

//chaining if else statements
var whataburger = false;
var chickFilA = false;
var mcdonalds = false;
var inAndOut = true;

if (whataburger) {
  console.log("I'll have the chicken strips.")
} else if (chickFilA) {
  console.log("I'll have the nuggets.")
} else if (mcdonalds) {
  console.log("I'll have a big mac!")
} else if (inAndOut){
  console.log("I'll have a double double animal style!")
} else {
  console.log("I DON'T WANT ANYTHING!")
};


var myName = "JOrgE";

if (myName.toLowerCase() === "jorge".toLowerCase()) {
  console.log("Hello, " + myName)
} else {
  console.log("Hello, stranger!")
};

var otherName = "Diva";

if (otherName.toLowerCase() === "jorge".toLowerCase()) {
  console.log("Hello " + otherName)
} else if (otherName.toLowerCase() === "Michael".toLowerCase()) {
  console.log("Hello " + otherName)
} else if (otherName.toLowerCase() === "Diva".toLowerCase()) {
  console.log("Hello mom!")
} else {
  console.log("Hello stranger!")
};

//Counting sheep with a While Loop
var sheepCounted = 0;
while (sheepCounted <= 10) {
  console.log("I have counted " + sheepCounted + " sheep!");
    sheepCounted++;
}
console.log("Zzzzzzzzzz");

//Counting sheep with a For Loop
for (var sheepCounted = 0; sheepCounted <= 10; sheepCounted++) {
  console.log("I have counted " + sheepCounted + " sheep!");
}
console.log("Zzzzzzzz");

var timesToSayHello = 3;
for(var i = 0; i < timesToSayHello; i++) {
  console.log("Hello!");
};

var animals = ["lion", "flamingo", "tiger", "panther"];
for (var i = 0; i <= animals.length; i++) {
  console.log("This zoo holds a " + animals[i] + "!");
};

var name = "Jorge";
for (var i = 0; i < name.length; i++) {
  console.log("My name contains the letter " + name[i] + ".");
}

//Using for loop for other than beginning at 0, and incrementing it by 1
//A way to print all the powers of 2 below the number 10,000
for (var x = 2; x < 10000; x = x * 2) {
  console.log(x);
}

//Above, we set x to 2 and increment the value of x using x = x * 2;, which will double the value of x each time the loop runs.

//write a for loop to print the powers of 3 under 10,000
for (var x = 3; x < 10000; x = x * 3) {
  console.log(x);
}

//same but with a while loop
var x = 3
while (x < 10000) {
  console.log("Hello " + x);
  x = x * 3;
}

//following is my approach to coding challenge ch 6.
// var animals = ["Cat", "Dog", "Dragon", "Panther", "Lion"]
// for (var i = 0; i < animals.length; i++) {
//   console.log("Awesome " + animals[i] + "!");
//   console.log(animals);
// }

//Following is solution to coding challenge ch 6, it makes a new array with awesome added to each animal
var animals = ["Cat", "Dog", "Dragon", "Panther", "Lion"]
for (var i = 0; i < animals.length; i++) {
  animals[i] = "Awesome " + animals[i] + "!";
  console.log(animals);
}

//Challenge 2 ch 6
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";
var stringLength =7;
for (var i = 0; i < stringLength; i++) {
  randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(randomString);

//Challenge 3 ch 6
var input = " michael jordan is the goat";
var output = ""; 
