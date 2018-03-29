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

console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1]); //run!

//When slicing, the first number in the parantheses is the number of the character that begins the slice, and the second number in the parantheses is the number of the character AFTER the last character in the slice.
console.log(myName.slice(1,4)); //Returns "org"

var longString = "My long string is long";

console.log(longString.slice(2, 17)); //long string is

console.log(longString.slice(7)); // Slices anything after index 7, so "string is long"

var myHometown = "Rio Rico, AZ";

console.log(myHometown.toUpperCase());

console.log(myHometown.toLowerCase());


var greeting = "hELlo THERE, hOW ARE yOu doINg?";
var lowerCase = greeting.toLowerCase();
var capitalH = lowerCase[0].toUpperCase();
var restOfWord = lowerCase.slice(1);

console.log(capitalH + restOfWord); //Hello there, how are you doing?

//Another way to convert 'greeting' to Hello there, how are you doing?
console.log(greeting[0].toUpperCase() + greeting.slice(1).toLowerCase());

//In this case, it’s not the weekend, you have showered, and you don’t have an apple but you do have an orange—so you should go to school.
var isWeekend = false;
var hadShower = true;
var hasApple = false;
var hasOrange = true;
var shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
shouldGoToSchool;
console.log(shouldGoToSchool); //true

var heightRestriction = 60;
var height = 58;
console.log(height > heightRestriction); // False


//"===" checks if number 5 is equal to number 5 which it isn't because mySecondNumber is a string. "==" checks if they're equal even if one is a string, which is true.
var myNumber = 5;
var mySecondNumber = "5";

console.log(myNumber === mySecondNumber); // false
console.log(myNumber == mySecondNumber); // true

// The rules are, if someone is 13 or over, they’re allowed
// in. If they’re not over 13, but they are accompanied by an
// adult, they’re also allowed in. Otherwise, they can’t see the
// movie.
var age = 10;
var accompaniedByAdult = false;
var allowedAge = 13;
console.log("Should we let him in?");
console.log(age >= allowedAge || accompaniedByAdult); // False

//ABOVE THIS IS BASIC DATA TYPES NUMBERS, BOOLEANS, STRINGS

//BELOW THIS ARE ARRAYS
var groceryList = [
  "bananas",
  "oranges",
  "tuna",
  "avocados",
  "eggs",
  "almond milk",
  "turkey"
];

groceryList[7] = "cereal" //adds it to array in index 7, so after Turkey

console.log(groceryList);

var dinosaursAndNumbers =  [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10];

console.log(dinosaursAndNumbers[2]); //gives back the whole array within the array because that is in index 2

console.log(dinosaursAndNumbers[2][1]); //"stegosaurus"

console.log(groceryList.length); // 8 because dont forget i added cereal to array

console.log(groceryList[groceryList.length - 1]); //cereal

var animals = [];

animals.push("dogs"); //push adds to end of array
console.log(animals);
animals.push("cats");
console.log(animals);

animals.unshift("bear"); //unshift adds to beginning of array
console.log(animals);

animals.pop(); // pop removes cats at end of array
console.log(animals);

animals.shift(); // shift removes bear at beginning of array
console.log(animals);

animals.unshift("panther");
console.log(animals);

var concatenatedArray = groceryList.concat(animals); //adds an array to another array

console.log("Arrays combined: " + concatenatedArray);

var furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
var scalyAnimals = ["Boa Constrictor", "Godzilla"];
var featheredAnimals = ["Macaw", "Dodo"];

var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals); //Adds multiple arrays together

console.log("All animals: " + allAnimals);

var favoriteColors = [
  "Red",
  "Blue",
  "Orange",
  "Yellow",
  "Sapphire"
];

console.log(favoriteColors);

console.log(favoriteColors.indexOf("Sapphire")); // 4

var favoriteColorsString = favoriteColors.join();
console.log(favoriteColorsString); // gives me the array in string

var favoriteColorsStringHyphens = favoriteColors.join(" - ");
console.log(favoriteColorsStringHyphens); // gives me array in string with hyphens between words

var myNames = ["Jorge", "Ivan", "Rodriguez", "Armenta"];
console.log(myNames.join(" ")); // Jorge Ivan Rodriguez Armenta

var randomNumber = Math.random();
console.log(randomNumber); // gives me a random number between 0 and 1

var randomNumberTimesTen = randomNumber*10;
console.log(randomNumberTimesTen);

var roundedNumber = Math.floor(randomNumberTimesTen);
console.log(roundedNumber); //gives me the random number rounded down to whole number below (ex: 9.99999999 becomes 9);

var basketballPlayers = [
  "Jordan",
  "Lebron",
  "Pippen",
  "Malone",
  "Webber",
  "Carter",
  "Williams",
  "Curry"
];

var randomIndex = Math.floor(Math.random()*8);
console.log("Random Index: " + randomIndex);

var randomBasketballPlayer = basketballPlayers[randomIndex];
console.log(randomBasketballPlayer); // one way to get a random player from array

var otherRandomBaller = basketballPlayers[Math.floor(Math.random()*8)];
console.log("Other random player: " + otherRandomBaller); //other way to get random player from array
