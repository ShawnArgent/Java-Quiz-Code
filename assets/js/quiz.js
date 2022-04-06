//global variables
var intervalID;
var time;
var currentQuestion;

//quiz questions
const questions = [
	{
	question: "What is the world's most popular programming language?", 
	choices: [
		 "a. HTML",
		 "b. CSS",
		 "c. JavaScript",
		 "d. Java"
		],
        answer: "c. JavaScript", 
	},
	  {
	question: "What is the correct JavaScript syntax to change the content of an HTML element?",
	choices: [
		 'a. document.getElementByName("p").innerHTML = "Hello World!"',
		 'b. document.getElement("p").innerHTML = "Hello World!"',
		 'c. #demo.innerHTML = "Hello World!"',
		 'd. document.getElementById("demo").innerHTML = "Hello World!";'
		],
        answer: 'd. document.getElementById("demo").innerHTML = "Hello World!";', 
	},
        {
	question: 'How do you write "Hello World" in an alert box?', 
	choices: [
		'a. alertBox("Hello World")',
		 'b. msg("Hello World")',
		 'c. alert("Hello World");',
		 'd. msgBox("Hello World")'
		],
        answer: 'c. alert("Hello World");',
	},
	  {
	question: "How do you create a function in JavaScript?", 
	choices: [
		 "a. function = myFunction()",
		 "b. function myFunction()",
		 "c. function:myFunction()",
		 "d. callFunction myFunction()"
	
		],
        answer: "b. function myFunction()",
	},
	  {
	question: "How to write an IF statement in JavaScript?", 
	choices: [
		 "a. if i = 5 then",
		 "b. if i = 5",
		 "c. if (i == 5)",
		 "d. if i == 5 then"
	
		],
        answer: "c. if (i == 5)", 
	},
	  {
	question: "How does a WHILE loop start?", 

	choices: [
		 "a. while i = 1 to 10",
		 "b. while (i <= 10; i++)",
		 "c. while (i < 10)",
		 "d. while i = 10++)"
	
		],
        answer: "c. while (i < 10)", 
	},
	  {
	question: 'What is a correct syntax to output "Hello World" in Java?', 
	 
	choices: [
		 'a. print ("Hello World");',
		 'b. Console.WriteLine("Hello World");',
		 'c. echo("Hello World:);',
		 'd. System.out.printIn("Hello World");'
	
		],
        answer: 'd. System.out.printIn("Hello World");'
	},
	  {
	question: "How do you add a comment in a JavaScript file?", 
	choices: [
		 "a. !--This is a commnt--",
		 'b. "This is a comment"',
		 "c. =This is a comment=",
		 "d. //This is a comment"
    ],
    answer: "d. //This is a comment", 
},
    {
    question: "Which data type is used to create a variable that should store text?",
    choices: [
        "a. string",
        "b. Txt",
        "c. String",
        "d. myString"
   
       ],
       answer: "c. String",
   },
     {
        question: "How do you create a variable with the numeric value 5?",
        choices: [
            "a. x=5;",
            "b. float x=5;",
            "c. num x=5;",
            "d. int x=5;"
       
           ],
           answer: "a. x=5;",
       
	},
];

//card variables
const startCard = document.querySelector("#start-card");
const questionCard = document.querySelector("#question-card");
const scoreCard = document.querySelector("#score-card");
const leaderboardCard = document.querySelector("#leaderboard-card");

function hideCards() {
  startCard.setAttribute("hidden", true);
  questionCard.setAttribute("hidden", true);
  scoreCard.setAttribute("hidden", true);
  leaderboardCard.setAttribute("hidden", true);
}

const resultDiv = document.querySelector("#result-div");
const resultText = document.querySelector("#result-text");


function hideResultText() {
  resultDiv.style.display = "none";
}

document.querySelector("#start-button").addEventListener("click", startQuiz);

function startQuiz() {
 
  hideCards();
  questionCard.removeAttribute("hidden");

  currentQuestion = 0;
  displayQuestion();

  //sets total time 
  time = questions.length * 10;

  
  intervalID = setInterval(countdown, 1000);

 
  displayTime();
}

//time display
function countdown() {
  time--;
  displayTime();
  if (time < 1) {
    endQuiz();
  }
}

const timeDisplay = document.querySelector("#time");
function displayTime() {
  timeDisplay.textContent = time;
}

//display question and answer choices
function displayQuestion() {
  let question = questions[currentQuestion];
  let choices = question.choices;

  let h2QuestionElement = document.querySelector("#question-text");
  h2QuestionElement.textContent = question.question;

  for (let i = 0; i < choices.length; i++) {
    let choice = choices[i];
    let choiceButton = document.querySelector("#choice" + i);
    choiceButton.textContent = choice;
  }
}

document.querySelector("#quiz-choices").addEventListener("click", checkAnswer);


function choiceIsCorrect(choiceButton) {
  return choiceButton.textContent === questions[currentQuestion].answer;
}

//incorrect answer subtract time
function checkAnswer(eventObject) {
  let choiceButton = eventObject.target;
  resultDiv.style.display = "block";
  if (choiceIsCorrect(choiceButton)) {
    resultText.textContent = "Correct!";
    setTimeout(hideResultText, 1000);
  } else {
    resultText.textContent = "Incorrect!";
    setTimeout(hideResultText, 1000);
    if (time >= 10) {
      time = time - 10;
      displayTime();
    } else {
      time = 0;
      displayTime();
      endQuiz();
    }
  }

  //quiz ends after all questions answered
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

//score total
const score = document.querySelector("#score");

function endQuiz() {
  clearInterval(intervalID);
  hideCards();
  scoreCard.removeAttribute("hidden");
  score.textContent = time;
}

const submitButton = document.querySelector("#submit-button");
const inputElement = document.querySelector("#initials");

//store score
submitButton.addEventListener("click", storeScore);

function storeScore(event) {
  event.preventDefault();

  if (!inputElement.value) {
    alert("Enter initials before pressing submit!");
    return;
  }

  let leaderboardItem = {
    initials: inputElement.value,
    score: time,
  };

  updateStoredLeaderboard(leaderboardItem);

  //highscore leaderboard
  hideCards();
  leaderboardCard.removeAttribute("hidden");

  renderLeaderboard();
}

function updateStoredLeaderboard(leaderboardItem) {
  let leaderboardArray = getLeaderboard();
  //append new leaderboard item to leaderboard array
  leaderboardArray.push(leaderboardItem);
  localStorage.setItem("leaderboardArray", JSON.stringify(leaderboardArray));
}

function getLeaderboard() {
  let storedLeaderboard = localStorage.getItem("leaderboardArray");
  if (storedLeaderboard !== null) {
    let leaderboardArray = JSON.parse(storedLeaderboard);
    return leaderboardArray;
  } else {
    leaderboardArray = [];
  }
  return leaderboardArray;
}

function renderLeaderboard() {
  let sortedLeaderboardArray = sortLeaderboard();
  const highscoreList = document.querySelector("#highscore-list");
  highscoreList.innerHTML = "";
  for (let i = 0; i < sortedLeaderboardArray.length; i++) {
    let leaderboardEntry = sortedLeaderboardArray[i];
    let newListItem = document.createElement("li");
    newListItem.textContent =
      leaderboardEntry.initials + " - " + leaderboardEntry.score;
    highscoreList.append(newListItem);
  }
}

function sortLeaderboard() {
  let leaderboardArray = getLeaderboard();
  if (!leaderboardArray) {
    return;
  }

  leaderboardArray.sort(function (a, b) {
    return b.score - a.score;
  });
  return leaderboardArray;
}

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", clearHighscores);

function clearHighscores() {
  localStorage.clear();
  renderLeaderboard();
}

const backButton = document.querySelector("#back-button");
backButton.addEventListener("click", returnToStart);

function returnToStart() {
  hideCards();
  startCard.removeAttribute("hidden");
}

const leaderboardLink = document.querySelector("#leaderboard-link");
leaderboardLink.addEventListener("click", showLeaderboard);

function showLeaderboard() {
  hideCards();
  leaderboardCard.removeAttribute("hidden");

  clearInterval(intervalID);

  time = undefined;
  displayTime();

  renderLeaderboard();
}
