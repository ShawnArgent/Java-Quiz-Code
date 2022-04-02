function generateQuiz(questions, quizContainer, resultsContainer, answerButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// right answer, show results
	answerButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
var quizQuestions = [
	{
	question: "What is the world's most popular programming language?", 
	answers: { 
		a: 'HTML',
		b: 'CSS',
		c: 'JAVASCRIPT',
		d: 'JAVA'
	},
	correctAnswer: 'b'
},
{
	question: "Inside which HTML element do we put the JavaScript?", 
	answers: { 
		a: '<js>',
		b: '<scripting>',
		c: '<javascript>',
		d: '<script>'
	},
	correctAnswer: 'd'
},
{
	question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
	'<p id="demo">This is a demonstration.</p>'
	answers: { 
		a: 'document.getElementByName("p").innerHTML = "Hello World!";',
		b: 'document.getElement("p").innerHTML = "Hello World!";',
		c: '#demo.innerHTML = "Hello World!";',
		d: 'document.getElementById("demo").innerHTML = "Hello World!";'
	},
	correctAnswer: 'd'
},
{

	question: "Where is the correct place to insert a JavaScript?",
	answers: { 
		a: 'Both the <head> section and the <body> section are correct',
		b: 'The <body> section',
		c: 'The <head> section',
		d: 'none of the above'
	},
	correctAnswer: 'b'
},
{

	question: "How do you write 'Hello World' in an alert box?", 
	answers: { 
		a: 'alertBox("Hello World")',
		b: 'msg("Hello World")',
		c: 'alert("Hello World")',
		d: 'msgBox("Hello World")'
	},
	correctAnswer: 'c'
},
{

	question: "How do you create a function in JavaScript?", 
	answers: { 
		a: 'function = myFunction()',
		b: 'function myFunction()',
		c: 'function:myFunction()',
		d: 'callFunction myFunction()'
	},
	correctAnswer: 'b'
},
{
	question: "How to write an IF statement in JavaScript?", 
	answers: { 
		a: 'if i = 5 then',
		b: 'if i = 5',
		c: 'if (i == 5)',
		d: 'if i == 5 then'
	},
	correctAnswer: 'd'
},
{
	question: "How does a WHILE loop start?", ``
	answers: { 
		a: 'while i = 1 to 10',
		b: 'while (i <= 10; i++)',
		c: 'while (i <= 10)',
		d: 'while i = 10++)'
	},
	correctAnswer: 'd'
},
{
	question: "How do you write 'Hello World' in an alert box?", 
	answers: { 
		a: 'alertBox("Hello World")',
		b: 'msg("Hello World")',
		c: 'alert("Hello World")',
		d: 'msgBox("Hello World")'
	},
	correctAnswer: 'd'
},
{
	question: "How do you write 'Hello World' in an alert box?", 
	answers: { 
		a: 'alertBox("Hello World")',
		b: 'msg("Hello World")',
		c: 'alert("Hello World")',
		d: 'msgBox("Hello World")'
	},
	correctAnswer: 'd'
}
},
{
];