var name =  prompt("What's your name?");
console.log("Hello " + name);
alert("Hello, " + name + "!" + " Welcome to Hangman!");

//pseudocode
// While



var words = [
  "jordan",
  "bryant",
  "james",
  "harden",
  "oneal",
  "chamberlain",
  "paul",
  "curry"
]

var word = words[Math.floor(Math.random() * words.length)];
console.log(word);
