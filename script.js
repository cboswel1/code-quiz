//Questions Array
let allQuestion = [
    {
        question: "What is the HTML tag to write inline JavaScript?",
        choices: ["A: <style>", "B: <js>", "C: <script>", "D: <html>"],
        answer: 3 
    },
    {
        question: "How would you write 'Hello World' in an alert box?",
        choices: ["A: heyYou('Hello World')", "B: popUp('Hello World')", "C: log('Hello World')", "D: alert('Hello World')"],
        answer: 4
    },
    {
        question: "Which event occurs when a user clicks an HTML element?",
        choices: ["A: ontop", "B: onlick", "C: onclick", "D: push"],
        answer: 3
    },
    {
        question: "Question 4",
        choices: ["A", "B", "C", "D"],
        answer: 2 
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


 //time variables
 var secondsLeft = 61;
 var timePenalty = 10;
 var timerInterval;

 //created ul for questions Box
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
   var qChoice = 1;
    
   if (allQuestion.length === questionIndex) {
     endGame();
       return;
   }
        var currentQ = allQuestion[questionIndex].question; 
        var currentCh = allQuestion[questionIndex].choices; 
        questionsBox.textContent = currentQ; 
        questionIndex++;
    
    //function for choices
    currentCh.forEach(function (newSet) {
        var li = document.createElement("li"); 
        li.textContent = newSet; 
        li.setAttribute("value", qChoice);
        questionsBox.appendChild(ul); 
        ul.appendChild(li);
        ul.addEventListener('click', enterScore);
        button.addEventListener('click', renderQ) 
        qChoice++;
    });   
}

// Once questions are complete, function to record score and user information. 
function endGame () {
    clearInterval(timerInterval);
    timeUp();
    timer.classList.add("hide");
    questionsBox.classList.remove("hide");
    reStart.classList.add("hide");
    console.log("!");
    console.log(score);

    //User Details text
    var userDetails = document.createElement("label");
    userDetails.setAttribute("id", "userDetails");
    userDetails.textContent = "Enter Your Name: ";
    questionsBox.appendChild(userDetails);

    //input form
    var inputForm = document.createElement("input");
    inputForm.setAttribute("type", "text"); 
    inputForm.setAttribute("id", "initials");
    inputForm.setAttribute("class", "text-center");
    inputForm.textContent = "";
    questionsBox.appendChild(inputForm);

    //submit button 
    var userSubmit = document.createElement("button");
    userSubmit.setAttribute("type", "submit");
    userSubmit.setAttribute("id", "Submit"); 
    userSubmit.textContent = "Submit";
    questionsBox.appendChild(userSubmit);

    userSubmit.addEventListener('click', function() {
        var userName = inputForm.value
        console.log("hello!");
    });

}

  
  // function to select choice, see if answer is correct, get points if so, lose time if not. 
  //score (local storage) score++, 
  //event target


  function enterScore(event) {
    var qAnswer = allQuestion[questionIndex -1].answer

    if (event.target.value === qAnswer) {
        console.log("correct");
        questionsBox.textContent = "Correct! +10 Points! ";
        score += 10;
            
    }  else {
        console.log("incorrect");
        questionsBox.textContent = "Wrong! You lost 10 Seconds of Time!";
        secondsLeft = secondsLeft - timePenalty;
        }       
  }


//timer function 
function setTime() {
      timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "Time Left: " + secondsLeft 
  
      if(secondsLeft === 0) {
        endGame();
      }
  
    }, 1000);
    
  }

function timeUp() {
        questionsBox.classList.add('hide');
        reStart.classList.remove('hide');
        button.classList.add('hide');
}


//render questions function
renderQ();

