//Questions Array
let allQuestion = [
    {
        question: "What is the HTML tag to write inline JavaScript?",
        choices: ["Answer A", "Answer B", "Answer C", "Answer D"],
        Answer: "B" 
    },
    {
        question: "Question 2",
        choices: [" A", " B", "C", "D"],
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
 var timer = document.querySelector("#timer")

 button.addEventListener('click', clear)  

 //variable to get index to 0
 var questionIndex = 0;
 var score = 0;
 var secondsLeft = 11;

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

   //loop for array
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
        ul.addEventListener("click", (correctAnswer));
    });
 }

 function correctAnswer (event) {
     console.log("This is working!");
 }

 

//new function that cycles questions based on click event 
//if/else statement for correct and incorrect - scores?
//questionindex++

//timer function 
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "Time Left: " + secondsLeft 
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        alert("Times Up!")
      }
  
    }, 1000);
  }
//score function 
setTime()
renderQ()

