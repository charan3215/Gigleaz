let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");

let number = Math.floor(Math.random() * 100) + 1;

btn.addEventListener("click", function () {
  let input = document.getElementById("userinput").value;
  if (input == number) {
    alert("Correct Guess")
    output.innerHTML = " You guessed right ,the number was " + number;
  } else if (input < number) {
    alert("Wrong Guess!")
    output.innerHTML = " You guessed too low!";
  }
  if (input > number) {
    output.innerHTML = "You gussed too high!";
    alert("Wrong Guess!");
  }
});