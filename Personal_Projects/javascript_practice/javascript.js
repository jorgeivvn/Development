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

console.log("balloons = " + balloons);

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

var magicEightBall = [
  "It is certain!",
  "Yes, definitely!",
  "Without a doubt!",
  "You may rely on it",
  "Ask again later!",
  "Better not tell you now!",
  "Cannot predict now!",
  "Concentrate and ask again!",
  "Don't count on it!",
  "My sources say no!",
  "Very doubtful!",
  "Hell no!"
];

var eightBallReply = magicEightBall[Math.floor(Math.random() * magicEightBall.length)];
console.log("Q: Am I going to land a job soon? " + "A: " + eightBallReply);

var bodyParts = ["Nose", "Chin", "Ears", "Eyes"];
var adjectives = ["Smelly", "Boring", "Stupid", "Huge", "Ugly", "Disgusting"];
var animal = ["Monkey", "Tiger", "Lion", "Gorilla", "Chimpanzee"];
var animalBodyPart = ["Nose", "Butt", "Stinky Mouth"];

var randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
var randomAnimal = animal[Math.floor(Math.random() * animal.length)];
var randomAnimalBodyPart = animalBodyPart[Math.floor(Math.random() * animalBodyPart.length)];

console.log("Your " + randomBodyPart + " is more " + randomAdjective + " than a " + randomAnimal + "'s " + randomAnimalBodyPart);

var randomInsult = ["Your", randomBodyPart, "is more", randomAdjective, "than a", randomAnimal, randomAnimalBodyPart];

console.log(randomInsult.join(" "));

var numberArray = [3, 2, 1];
var stringStatement = numberArray[0] + " is bigger than " + numberArray[1] + " is bigger than " + numberArray[2];
console.log(stringStatement);

var stringStatementJoinMethod = [numberArray[0], "is bigger than", numberArray[1], "is bigger than", numberArray[2]];

console.log(stringStatementJoinMethod.join(" ")); //same as above but this puts everything into another array then uses the join method to create the string statement

[3, 2, 1].join(" is bigger than "); // this is the author's solution

//OBJECTS

var myDog = {
  name: "buddy",
  age: 10,
  breed: "miniature schnauzer",
  color: "salt and pepper"
};

console.log(myDog);
console.log(myDog["name"]);
console.log(myDog.name);
console.log(Object.keys(myDog));

var myCar = {};
myCar["color"] = "windveil blue"; //way to add value to the objects
myCar["engine"] = "4.0L V6";
myCar["horsepower"] = 210;
myCar["isFast"] = true;

console.log(myCar);

var myDreamCar = {};
myDreamCar.make = "BMW";
myDreamCar.model = "M3";
myDreamCar.horsepower = 444;
myDreamCar.isFasterThanMyCar = true;

console.log(myDreamCar);
console.log(myDreamCar.model);


var dinosaurs = [
  { name: "Tyrannosaurus Rex", period: "Late Cretaceous"},
  { name: "Stegosaurus", period: "Late Jurassic" },
  { name: "Plateosaurus", period: "Triassic" }
];

console.log(dinosaurs[0]);
console.log(dinosaurs[1]["period"]);
console.log(dinosaurs[1].period);
//Dot notation can only be used with objects, not arrays.

var ozzy = {
  name: "Ozzy",
  age: 28,
  favoriteSports: ["soccer", "basketball"]
};

var noel = {
  name: "Noel",
  age: 31,
  favoriteSports: ["football", "basketball", "hockey", "baseball"]
};

var ryan = {
  name: "Ryan",
  age: 30,
  favoriteSports: ["football", "soccer", "basketball", "mixed martial arts"]
};

var myFriends = [ozzy, noel, ryan];
console.log(myFriends[2]);
console.log(myFriends[2].name);
console.log(myFriends[2].favoriteSports[1]);

var owedMoney = {};
owedMoney.leyva = 50;
owedMoney.lucas = 300;
owedMoney.abner = 50;

console.log(owedMoney);

owedMoney.leyva -= 45;

console.log(owedMoney.leyva);

//Objects to store information about movies, where every key is a movie title, and every value is aother object containing information about the movie.
var movies = {
  "Finding Nemo": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Albert Brooks", "Ellen DeGenres", "Alexander Gould"],
    format: "DVD"
  },
  "Star Wars Episode VI": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    format: "DVD"
  },
  "Terminator 2": {
    releaseDate: 1991,
    duration: 156,
    actors: ["Arnold Schwarzenegger", "Linda Hamilton", "Edward Furlong"],
    format: "DVD"
  }
};

console.log(movies);

console.log(movies["Terminator 2"].releaseDate);
//or
var terminator2 = movies["Terminator 2"];
console.log(terminator2.actors);

var predator = {
  releaseDate: 1987,
  duration: 147,
  actors: ["Arnold Schwarzenegger", "Carl Weathers", "Jesse Ventura"],
  format: "Blu Ray"
};

movies["Predator"] = predator;
console.log(movies);
console.log(Object.keys(movies));

var scores = {
  noel: 0,
  ryan: 0,
  erik: 0,
  jorge: 0
};

console.log(scores);
scores.noel += 1
console.log(scores);
scores.jorge += 3
console.log(scores);

var myCrazyObject = {
  "name": "A ridic object",
  "array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
  "random animal": "Panther"
};

console.log(myCrazyObject.array[2].number);
