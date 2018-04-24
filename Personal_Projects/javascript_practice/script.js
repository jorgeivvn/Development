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
