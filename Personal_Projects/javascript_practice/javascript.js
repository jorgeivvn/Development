var drawCats = function (howManyCats) {
  for (var i = 0; i < howManyCats; i++) {
    console.log(i +  " =^.^=");
  }
};

drawCats(15);


var addition = 123455 + 303030;

console.log(addition);


var numberOfCandies = 8;
var numberOfSiblings = 4;

var sharedCandies = numberOfCandies / numberOfSiblings;

console.log(sharedCandies);

var secondsInAMinute = 60;
var minutesInAnHour = 60;

var secondsInAnHour = secondsInAMinute * minutesInAnHour;

var secondsInADay = secondsInAnHour * 24;

var secondsInAYear = secondsInADay * 365;

console.log(secondsInAYear);


var balloons = 100;
balloons *= 2;

console.log("Balloons = " + balloons);

var myName = "Jorge";
console.log(myName.length);

console.log("jorgeivvn".length);

console.log(myName[0]);
console.log(myName[1]);
console.log(myName[2]);
console.log(myName[3]);
console.log(myName[4]);

var codeWord1 = "are";
var codeWord2 = "tubas";
var codeWord3 = "unsafe";
var codeWord4 = "?!";

console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1]);

//When slicing, the first number in the parantheses is the number of the character that begins the slice, and the second number in the parantheses is the number of the character AFTER the last character in the slice.
console.log(myName.slice(1,4));

var longString = "My long string is long";

console.log(longString.slice(2, 17));

console.log(longString.slice(7));

var myHometown = "Rio Rico, AZ";

console.log(myHometown.toUpperCase());

console.log(myHometown.toLowerCase());


var greeting = "hELlo THERE, hOW ARE yOu doINg?";
var lowerCase = greeting.toLowerCase();
var capitalH = lowerCase[0].toUpperCase();
var restOfWord = lowerCase.slice(1);

console.log(capitalH + restOfWord);

//Another way to convert 'greeting' to Hello there, how are you doing?
console.log(greeting[0].toUpperCase() + greeting.slice(1).toLowerCase());
