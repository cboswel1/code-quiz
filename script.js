// HTML Element Assignments 

//Start Quiz page
const startQuiz = document.getElementById("startQuiz");

//quiz questions
const quiz = document.getElementById("quiz");

//quiz question
const questions = document.getElementById("questions");

//quiz choices
const choice1 = document.getElementById("1");
const choice2 = document.getElementById("2");
const choice3 = document.getElementById("3"); 
const choice4 = document.getElementById("4");

//Create an Array of Questions that can be picked from. 


let question1 = [
    {
        question: "What is the HTML tag to write inline JavaScript?",
        choice1: "<style>",
        choice2: "<script>",
        choice3: "<javaScript>", 
        choice4: "<java>",
        correct: "2"
    }, 
    {
        question: "question 2",
        choice1: "dec",
        choice2: "tell",
        choice3: "let",
        choice4: "if",
        correct: ""
    },
    {
        question: "question 3",
        choice1: "A",
        choice2: "B",
        choice3: "C",
        choice4: "D", 
        correct: ""
    }, 
    {
        question: "question 4",
        choice1: "A", 
        choice2: "B", 
        choice3: "C",
        choice4: "D",
        correct: "",
    },
    {
        question: "question 5", 
        choice1: "A", 
        choice2: "B", 
        choice3: "C",
        choice4: "D",
        correct:"",
    }
]
console.log(question1);


//new variable 
let questionsArray = question1.length -1;

//empty variable for index
let allQuestions = 0; 

// render a function that can take our array index and assign to each question
function renderQ() {
    let qArray = question1[allQuestions]; 

    questions.innerHTML = "<p>" + qArray.questions +"</p>"; 
    choice1.innerHTML = qArray.choice1; 
    choice2.innerHTML = qArray.choice2; 
    choice3.innerHTML = qArray.choice3; 
    choice4.innerHTML = qArray.choice4;
}


console.log(renderQ());




   


        
    

    