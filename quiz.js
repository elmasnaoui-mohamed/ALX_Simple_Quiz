var correctAnswer = "4"
function checkAnswer() {
    var userAnswer;
    document.querySelectorAll('input[name="quiz"]').forEach(inp=>{
        if(inp.checked === true){
            userAnswer = inp.value;
        }
    })
    if(userAnswer === correctAnswer){
        document.getElementById("feedback").innerText = "Correct! Well done.";
    }else{
        document.getElementById("feedback").innerText = "That's incorrect. Try again!";
    }
}

document.getElementById("submit-answer").addEventListener("click",checkAnswer)