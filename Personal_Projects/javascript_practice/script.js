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
var inAndOut = true;

if (whataburger) {
  console.log("I'll have the chicken strips.")
} else if (chickFilA) {
  console.log("I'll have the nuggets.")
} else if (inAndOut) {
  console.log("I'll have a double double animal style!")
};
