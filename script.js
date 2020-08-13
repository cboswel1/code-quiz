//Questions Array
var body = document.body;
let allQuestion = [
    {
        question: "What is the HTML tag to write inline JavaScript?",
        choices: ["A", "B", "C", "D"],
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
 let button = document.querySelector("#button");
 console.log(button);

 let questionsBox = document.querySelector("#questions"); 

 button.addEventListener('click', clear)  
   


 function clear() {
    console.log("clicked!", questionsBox)
    questionsBox.innerHTML =
 }

 function renderQ(name) {
     console.log(name);
     let start = document.createElement('h2'); 
     let message = name + ' is awesome';
     start.innerHTML = message;
     questionsBox.append(start);
 }

 allQuestion.forEach(function(question, answer,) {
    console.log(question, answer)
 })
 renderQ("Chris"); 
 renderQ("Bob"); 
 renderQ("Tom"); 




