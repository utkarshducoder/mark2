var readlineSync= require("readline-sync");
var score = 0;
const chalk = require('chalk');

let log = console.log

let blueBright = chalk.bold.blueBright
let green = chalk.bold.green
let red = chalk.bold.red
let cyan = chalk.bold.cyan
let yellow = chalk.bold.yellow 
let title = chalk.black.bold.bgYellow
let white = chalk.white.bold.underline

log(blueBright('Hey guys let us know how much you know about', chalk.underline.bgGreenBright('Utkarsh Gupta!\n')));

var userName = readlineSync.question(log(red("may I have your name?" + " ")));

log(green("hello" +" " + userName))



log(blueBright('Keep in mind these intructions lets start with how much you know about',title ('Utkarsh Gupta!\n')))

log(green('Here', 'is', 'the', 'first', 'question\n'));

var questionBank = [{
  question: `Where do I live?
 a: Jaipur
 b: Kota
 c: Mumbai
 d: Bangalore`,
answer: "a"},
{
  question: `What is my favourite color?
 a: blue
 b: green
 c: orange
 d: black
`,
answer: "d"},
{
  question: `Which type of food I like the most?
 a: Fast food
 b: Street food
 c: South Indian
 d: Italian`,
 answer: "c"},
{
  question: `Which is my dream company?
 a: Google
 b: Microsoft
 c: Facebook
 d: Amazon`,
 answer: "b"},
 {
   question: `Which sport I like the most?
 a: Football
 b: Cricket
 c: Badminton
 d: Volleyball`,
 answer: "b"},
 {
   question: `Which type of movies I like?
 a: Thriller
 b: Comedy
 c: Sci-fiction
 d: Romantic`,
 answer: "b"},
 {
   question: `What is my age?
 a: 18
 b: 22
 c: 20
 d: 16`,
 answer: "c"}];


 


function play(question,answer){
 
userAnswer = readlineSync.question(red(question+"\n"));

if(userAnswer.toUpperCase() === answer.toUpperCase()){
console.log("you were right!");
score = score + 4;

}
else{
  console.log("you were wrong");
 
  score = score - 2;
}
console.log("your score is :", score);


} 





for( var i = 0; i<questionBank.length; i++)
{
 var cur= questionBank[i];
 play(cur.question,cur.answer);
 console.log(" ");
 console.log(chalk.yellow("*-*-*-*-*-*-*-*-*-*-*-*-*-*"));

}

log(cyan("THE END"))
log(green("Thank you for spending your valuable time"), red("I hope you like this game"))