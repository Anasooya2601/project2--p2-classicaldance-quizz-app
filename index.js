var readlineSync=require("readline-sync");
var score=0;
const chalk = require('chalk');
const log = console.log;
var userName=readlineSync.question("Hope You Are doing great! enter your name:");
console.log("hello "+userName+" lets start");
var highestScore=[
 {name:"sri lata",
  score:2},
  {name:"navami",score:3},
  {name:"Priya",score:5}
]

//play function
function play(question,answer){
    var userAnswer=readlineSync.question(question);
    if(userAnswer.toUpperCase()===answer.toUpperCase()){
      
       log(chalk.green("right!"));
        score=score+1;
    }
    else{
      log(chalk.red("wrong!"));
     
    }
    console.log("current score:",score);
    console.log("-------");
}

var questions=[
    {
             question:"How many classical Dances are there in India?",
             answer:"8"
        },
        {
            question:"Which is the dance form that is particularly known for Radha and Lord Krishna called Raslila themes? It is also known as Jagoi dance.",
            answer:"Manipuri"
        },
        {
            question:"classical dance that originated from Assam in remembrance of Raslila themes on Lord Krishna and Radha.",
            answer:"satriya"
        },
        {
            question:"an Indian classical dance form that is found in three distinct forms of gharanas – Banaras, Jaipur and Lucknow.",answer:"Kathak"
        },
        {
            question:"Name the most traditional classical dance art of India that originated in Kerala and is mentioned in Natya Shastra",answer:"kathakali"
        }
];

//loop
for(var i=0;i<questions.length;i++){
    var currentQuestion=questions[i];
    play(currentQuestion.question,currentQuestion.answer)
}
if(score>=highestScore[2].score){
  console.log("Good Job!You scored the highest. ",score);
  console.log("Now take a screenshot and send it to me.");
}
else
{
  console.log("try your luck next time! The highest score is",highestScore[2].score);
}

