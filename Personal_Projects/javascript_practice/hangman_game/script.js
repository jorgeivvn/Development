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

var answerArray = [];
for (var i=0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetter = word.length;

while (remainingLetters > 0) {
  alert(answerArray.join(""));
}
