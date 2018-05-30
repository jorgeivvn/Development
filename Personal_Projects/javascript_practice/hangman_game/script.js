var name =  prompt("What's your name?");
console.log("Hello " + name);
alert("Hello, " + name + "!" + " Welcome to Hangman!");

var words = [
  "jordan",
  "bryant",
  "james",
  "harden",
  "oneal",
  "chamberlain",
  "paul",
  "curry",
  "miller",
  "pippen",
  "ewing",
  "starks",
  "oakley",
  "stoudamire",
  "howard",
  "johnson",
  "elliot",
  "payton",
  "kidd",
  "nash",
  "kerr",
  "thompson",
  "durant",
  "westbrook",
  "rose"
]

var word = words[Math.floor(Math.random() * words.length)];
console.log(word);
