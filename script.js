//Questions Array
let allQuestion = [
    {
        question: "What is the HTML tag to write inline JavaScript?",
        choices: ["A: <style>", "B: <js>", "C: <script>", "D: <html>"],
        Answer: "C: <script>" 
    },
    {
        question: "How would you write 'Hello World' in an alert box?",
        choices: ["A: heyYou('Hello World')", "B: popUp('Hello World')", "C: log('Hello World')", "D: alert('Hello World')"],
        Answer: "D: alert('Hello World')" 
    },
    {
        question: "Which event occurs when a user clicks an HTML element?",
        choices: ["A: ontop", "B: onlick", "C: onclick", "D: push"],
        Answer: "C: onclick" 
    },
    {
        question: "Question 4",
        choices: ["A", "B", "C", "D"],
        Answer: "B" 
    }
];


console.log(allQuestion);

//Declared 
 var button = document.querySelector("#next-button");
 var questionsBox = document.querySelector("#questions"); 
 var timer = document.querySelector("#timer")
 var startButton = document.querySelector("#start-button");
 var startP = document.querySelector("#start-p");
 var reStart = document.querySelector("#restart-button");

 //variable to get index to 0
 var questionIndex = 0;
 var score = 0;


 //time variable
 var secondsLeft = 61;
 var timePenalty = 10

 //created ul for questions
 var ul = document.createElement("ul");

//event listeners at start 
startButton.addEventListener('click', startGame)
startButton.addEventListener('click', setTime)
reStart.addEventListener('click', timeUp)

//start game function 


function startGame() {
    startP.classList.add('hide');
    startButton.classList.add('hide');
    questionsBox.classList.remove('hide');
    button.classList.remove('hide');
    
}

//render function to display questions
 function renderQ () {
   questionsBox.innerHTML = ""; 
   ul.innerHTML = ""; 
    
   for (var i = 0; i< allQuestion.length; i++) {
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
        button.addEventListener('click', renderQ2) 
        
    });
    //make li 
}

 //Question 2
 function renderQ2 () {
     
    questionsBox.innerHTML = ""; 
    ul.innerHTML = ""; 
 
         var currentQ = allQuestion[1].question; 
         var currentCh = allQuestion[1].choices; 
         questionsBox.textContent = currentQ; 
   
 
     //function for choices
     currentCh.forEach(function (newSet) {
         var li = document.createElement("li"); 
         li.textContent = newSet; 
         questionsBox.appendChild(ul); 
         ul.appendChild(li);
         li.addEventListener('click', enterScore);
         button.addEventListener("click", renderQ3)  
     });
  }

  //Question 3
  function renderQ3 () {
    questionsBox.innerHTML = ""; 
    ul.innerHTML = ""; 
         var currentQ = allQuestion[2].question; 
         var currentCh = allQuestion[2].choices; 
         questionsBox.textContent = currentQ; 
     
 
     //function for choices
     currentCh.forEach(function (newSet) {
         var li = document.createElement("li"); 
         li.textContent = newSet; 
         questionsBox.appendChild(ul); 
         ul.appendChild(li);
         button.addEventListener("click", renderQ4)
     });
  }


  //Question 4
  function renderQ4 () {
    questionsBox.innerHTML = ""; 
    ul.innerHTML = ""; 
         var currentQ = allQuestion[3].question; 
         var currentCh = allQuestion[3].choices; 
         questionsBox.textContent = currentQ; 
     
 
     //function for choices
     currentCh.forEach(function (newSet) {
         var li = document.createElement("li"); 
         li.textContent = newSet; 
         questionsBox.appendChild(ul); 
         ul.appendChild(li);
         ul.addEventListener("click", enterScore)
     });
  }

  

  function enterScore() {

        console.log("is working?")  
      
  }


 


//if/else statement for correct and incorrect - scores?


//timer function 
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "Time Left: " + secondsLeft 
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        timeUp();
      }
  
    }, 1000);
    
  }

function timeUp() {
        questionsBox.classList.add('hide');
        reStart.classList.remove('hide');
        button.classList.add('hide');
}

//score function 

renderQ();

