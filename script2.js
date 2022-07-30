const num1 = 4;
const num2 = 5;
const num3 = 9;
const num4 = 10;

// < , >, >=, ==, &&, ||
// if (num1 < num2){
//   console.log(`${num1} is less than ${num2}`);
//   else
//   console.log(`${num1} is greater`);
// }

// if (num1 >= num2){
//   console.log(`${num1} is equal to ${num2}`);
// } else{
//   console.log(`${num2} is greater than ${num1}`);
// }

// if (num1 >= num2){
//   console.log(`${num1} is equal to ${num2}`);
// } else if (num3 >= num4){
//   console.log(`${num3} is less than ${num4}`);
// }else{
//   console.log(`neither of them is true`);
// }

// if (num1 <= num2 || num3 >= num4){
//   console.log(`${num1} is equal to ${num2}`);
// } else {
//   console.log(`neither of them is true`);
// }

const fruits = ["Apple", "Oranges", "Mangoes", "Banana", "Pawpaw"];

// for (let i = 0; i < fruits.length; i++){
//   console.log(fruits[i]);
// }
// console.log(fruits.length);

// i = i + 1;
// i += 1:
// i++;
// console.log(fruits[1]);

// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// const heading = document.getElementById("heading");
// heading.style.color = "red";
// heading.style.backgroundColor = "black"; 
// heading.style.padding = "20px";

// const heading = document.querySelector("h1");
// heading.style.color = "red";
// heading.style.backgroundColor = "black";
// heading.style.padding = "20px";
// heading.textContent = "Hello World";

// const div = document.querySelector("div");
// div.innerHTML = `<ul>
// <li>Home</li>
// <li>About</li>
// </ul> `;

// // console.log(Math.floor(4.4));
// console.log(Math.ceil(4.4));

// console.log(Math.floor(Math.random() * 10));

const form = document.querySelector("form");
const min = document.querySelector(".min");
const max = document.querySelector(".max");
const message = document.querySelector(".message");
const submit = document.querySelector(".submit");
let numberOfTry = 3;

const minimumNumber = (min.textContent = 1);
const maxmumNumber = (max.textContent = 3);

const randomNumber = Math.floor(Math.random() * maxmumNumber) + minimumNumber;

form.addEventListener("submit", function(e){
  let number = document.querySelector(".number");
  let numberValue = number.value;
  numberValue = Number(numberValue);

  if (randomNumber == numberValue){
    setMessage("green", "You are correct you won");
    number.style.borderColor = "green";

    submit.value = "Play Again";
    submit.className = "try-again";
  }else{
    numberOfTry--;
    if (numberOfTry <= 0){
      setMessage(
        "red",
        "You have exhausted your chances, The correct number is " + numberValue
      );
      number.disabeled = true;
      number.style.borderColor = "red";
      submit.disabeled = true;

      submit.value = "Play Again";
      submit.className = "try-again";
    }else if (randomNumber != numberValue && numberOfTry < 3){
      setMessage(
        "red",
        "Your answer is wrong you have " + numberOfTry + "tries left"
      );
      number.disabeled = true;
      submit.disabeled = true;
      submit.value = "Play Again";
    }
  }
  console.log(randomNumber);
  e.preventDefault();
});
// math.floor rounds down a number
function setMessage(clr, msg){
  message.textContent = msg;
  message.style.color = clr;
}

submit.addEventListener("click", function(){
  if (submit.classList.contains("try-again")){
    location.reload();
  }
});
// form.addEventListener("submit", function(e){
//   const number = document.querySelector(".number").value;
//   console.log(number);

//   e.preventDefault();
//   // to prevent it from going to another page
// });

// const number = document.querySelector(".number");

// number.addEventListener("keydown", check);

// function check(){
//   console.log("KeyDown");
// }

