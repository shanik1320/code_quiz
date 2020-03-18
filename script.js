//Variables
var startbtn = document.getElementById("start-btn");

// Funtion for the start button
function startQuiz(){

  //console.log("started");
  //hides the start button once is clicked
  startbtn.classList.add("hide");
}



  // for loop to get the questions random
  //for (var index = 0; index < questions.length; index++) {
    
      
// Making the button work
  startbtn.addEventListener("click",startQuiz);
