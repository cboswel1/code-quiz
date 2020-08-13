//Questions Array
var body = document.body;
let allQuestion = [
    {
        question: "What is the HTML tag to write inline JavaScript?",
        choices: ["AnswerA", "AnswerB", "AnswerC", "AnswerD"],
        Answer: "B" 
    },
    {
        question: "Question 2",
        choices: ["A", "B", "C", "D"],
        Answer: "B" 
    },
    {
        question: "Question 3",
        choices: ["A", "B", "C", "D"],
        Answer: "B" 
    },
    {
        question: "Question 4",
        choices: ["A", "B", "C", "D"],
        Answer: "B" 
    },
];


console.log(allQuestion);

//Declared 
 var button = document.querySelector("#button");
 console.log(button);

 var questionsBox = document.querySelector("#questions"); 

 button.addEventListener('click', clear)  

 var questionIndex = 0;

 var ul = document.createElement("ul");


 function clear() {
    console.log("clicked!", questionsBox)
    questionsBox.innerHTML = ""
 }

//  function renderQ(name) {
//      console.log(name);
//      let start = document.createElement('h2'); 
//      let message = name + ' is awesome';
//      start.innerHTML = message;
//      questionsBox.append(start);
//  }

//render function to display questions
 function renderQ () {
   questionsBox.innerHTML = ""; 
   ul.innerHTML = ""; 
    for (var i = 0; i < allQuestion.length; i++) {
        var currentQ = allQuestion[questionIndex].question; 
        var currentCh = allQuestion[questionIndex].choices; 
        questionsBox.textContent = currentQ; 
    }

    //function for choices
    currentCh.forEach(function (newSet) {
        var li = document.createElement("li"); 
        li.textContent = newSet; 
        questionsBox.appendChild(ul); 
        ul.appendChild(li);
        //ul.addEventListener("click", (correctAnswer));
    });
 }

renderQ()

