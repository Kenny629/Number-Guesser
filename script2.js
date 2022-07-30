const form = document.querySelector("form");
const min = document.querySelector(".min");
const max = document.querySelector(".max");
const message = document.querySelector(".message");
const submit = document.querySelector(".submit");
let numberOfTry = 3;

const minimumNumber = (min.textContent = 1);
const maximumNumber = (max.textContent = 5);

const randomNumber = Math.floor(Math.random() * maximumNumber) + minimumNumber;


form.addEventListener("submit", function(e){
  let number = document.querySelector(".number");
  let numberValue = number.value;
  numberValue = Number(numberValue);

  if (
    isNaN(numberValue) || numberValue < minimumNumber || numberValue > maximumNumber
  ){
    message.textContent = `Enter a number between ${minimumNumber} and ${maximumNumber}`;
  } else if (randomNumber == numberValue){
    setMessage("green", "You are correct you won");
    number.style.borderColor = "green";

    submit.value = "Play Again";
    submit.className = "try-again";
  }else{
    numberOfTry--;
    if (numberOfTry <= 0){
      setMessage(
        "red",
        "You have exhausted your chances, The correct number is " + randomNumber
      );
      // number.disabled = true;
      number.style.borderColor = "red";
      // submit.disabled = true;

      submit.value = "Play Again";
      submit.className = "try-again";
    }else if (randomNumber != numberValue){
      setMessage(
        "red",
        "Your answer is wrong you have " + numberOfTry + "tries left"
      );
      // number.disabled = true;
      // submit.disabled = true;
      submit.value = "Play Again";
    }
  }
  // console.log(randomNumber);
  e.preventDefault();
});
function setMessage(clr, msg){
  message.textContent = msg;
  message.style.color = clr;
}

submit.addEventListener("click", function(){
  if (submit.classList.contains("try-again")){
    location.reload();
  }
}); 
