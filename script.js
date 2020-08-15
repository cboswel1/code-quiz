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
        question: "Which built-in method returns the character at the specified index?",
        choices: ["A: characterAt()", "B: charAt()", "C: getCharAt()", "D: getItSon()"],
        answer: 2 
    }
];


//Declared 
 var button = document.querySelector("#next-button");
 var questionsBox = document.querySelector("#questions"); 
 var timer = document.querySelector("#timer")
 var startButton = document.querySelector("#start-button");
 var startP = document.querySelector("#start-p");
 var reStart = document.querySelector("#restart-button");
 var highScore = document.querySelector("#scores");
 var userScore = document.querySelector("#user-score");
 var userScores = document.querySelector("#user-details");
 var scoreInfo = document.querySelector("#score-info");

 
 //variable to get index to 0
 var questionIndex = 0;
 var score = 0;
 var finalScores = [];


 //time variables
 var secondsLeft = 41;
 var timePenalty = 10;
 var timerInterval;


 //created ul for questions Box
 var ul = document.createElement("ul");


//event listeners at start 
startButton.addEventListener('click', startGame)
startButton.addEventListener('click', setTime)
// reStart.addEventListener('click', timeUp)


//start game function 
function startGame() {
    startP.classList.add('hide');
    startButton.classList.add('hide');
    questionsBox.classList.remove('hide');
    button.classList.remove("hide");
    highScore.classList.remove("hide");
    
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
    timer.classList.add("hide");
    questionsBox.classList.add("hide");
    scoreInfo.classList.remove("hide");
    reStart.classList.remove("hide");
    highScore.classList.add("hide");
    userScore.classList.remove("hide");
    userScores.classList.remove("hide");
    button.classList.add("hide");

    //User Details text
    var userDetails = document.createElement("label");
    userDetails.setAttribute("id", "userDetails");
    userDetails.textContent = "Enter Your Name: ";
    scoreInfo.appendChild(userDetails);

    //input form
    var inputForm = document.createElement("input");
    inputForm.setAttribute("type", "text"); 
    inputForm.setAttribute("id", "initials");
    inputForm.setAttribute("class", "text-center");
    inputForm.textContent = "";
    scoreInfo.appendChild(inputForm);

    //submit button 
    var userSubmit = document.createElement("button");
    userSubmit.setAttribute("type", "submit");
    userSubmit.setAttribute("id", "Submit"); 
    userSubmit.textContent = "Submit";
    scoreInfo.appendChild(userSubmit);

    //user score
    userScore.textContent = "Your Final Score is " + score + " points!"

    //event listener to display user name and score after entered. 
    userSubmit.addEventListener('click', function(event) {
        event.preventDefault();
        
        var userName = {
            name: inputForm.value.trim(),
            thescore: score
        }

        

       if (userName.name === "") {
           alert("You must enter a name.");
       } else {
           //Local Storage to set and display to user
           localStorage.setItem("user", JSON.stringify(userName));

           var printUser = JSON.parse(localStorage.getItem("user"));
           userScore.textContent = "Player: " + printUser.name;
           
           var printScore = JSON.parse(localStorage.getItem("user"));
           userScores.textContent = "Score: " + printScore.thescore;
       }

    });
}

  // function that displays event after user chooses answer. Correct/Incorrect
  function enterScore(event) {
    var qAnswer = allQuestion[questionIndex -1].answer

    if (event.target.value === qAnswer) {
        questionsBox.textContent = "Correct! +10 Points! ";
        score += 10;
            
    }  else {
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
        // endGame();
        clearInterval(timerInterval);
        timeUp();
      }
  
    }, 1000);
    
  }

//function to hide timer once questions end
function timeUp() {
        // questionsBox.classList.add('hide');
        alert("Time's Up!");
        reStart.classList.remove('hide');
        button.classList.add('hide');
        timer.classList.add('hide')
        scoreInfo.classList.add('hide');
        questionsBox.classList.add('hide');
        highScore.classList.add('hide');
}



//render questions function
renderQ();

