let form = document.getElementById("form_survey");
let prevButton = document.getElementById("prev_button");
let nextButton = document.getElementById("next_button");
let allInput = document.getElementsByTagName("input");
let submitButton = document.getElementById("submit_button");
let inputName = document.getElementById("input_name");
let inputNumber = document.getElementById("input_number");
let inputDrinks = document.getElementById("input_drinks");
let inputFoods = document.getElementById("input_foods");

document.addEventListener("keyup", function (event) {
  if (event.keycode === 13) {
    nextButton.click();
    event.preventDefault();
    return false;
  }
});

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    nextButton.click();
    event.preventDefault();
    return false;
  }
});

let size = 100;
let counter = 0;

function nextQuestion() {
  counter++;
  form.style.transform = "translateX(" + -size * counter + "vw)";
  prevButton.style.visibility = "visible";
  if (counter == 3) {
    nextButton.style.visibility = "hidden";
  }
  inputName.blur();
  inputDrinks.blur();
  inputFoods.blur();
  inputNumber.blur();
}

function prevQuestion() {
  counter--;
  form.style.transform = "translateX(" + -size * counter + "vw)";
  nextButton.style.visibility = "visible";

  if (counter == 0) {
    prevButton.style.visibility = "hidden";
  }
}

if (counter == 0) {
  prevButton.style.visibility = "hidden";
}

function checkValue() {
  if (allInput.value === null) {
    swal("Ooops", "seems like you missed some questions", "error", {
      button: "Go Back",
    });
  }
}
