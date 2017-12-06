// SECTION 1
// 1. The difference between interpolation and
// concatentation is . . .
// 2. DRY stands for Do Not Repeat Yourself. We should pay attention to it,
//because we want to be as concise as possible for it to run as efficient as
//possible, and so it's easy for others to understand it. We have learned
// about loops to write DRY code.
//SECTION 2
// a < b
// c < d
// 'Name' == 'Name'
// a + b = c
// a * a = d
// e != 'Kevin'
// 48 == '48'
//SECTION 3
// Infinite loop, because it's never indicated when to stop.
// Not an infinite loop, because the code broke with the constant variable we
// assigned
// Yes, it gave me the expected result by logging "A" 20 times.
//SECTION 4
// A for loop and while loop basically do the same task but a for loop is more
// concise and we don't have to declare any variables outside the loop.

for (let i=0; i <= 999; i++) {
  console.log(i);
}

// }
// for (let i=0; i < 100; i++) {
	// console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
// }
//First part of the control panel is stating it'll begin at 0, second part of
// the control panel indicates how many times it'll run, and third part of
// the control panel says it'll log that message one by one until it gets to 100.

for (let i=999; i >= 0; i--) {
  console.log(i);
}

for (let i=1; i <=10; i++) {
  console.log("The value of i is " + i + " of " + "10");
}

const starWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for(let i=0; i < starWars.length; i++) {
console.log(starWars[i]);
}
for(let i=0; i < starWars.length; i+=2) {
  console.log(starWars[i]);
}
