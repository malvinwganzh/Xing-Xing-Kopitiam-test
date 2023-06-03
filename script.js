let form = document.getElementById("form_survey");
let prevButton = document.getElementById("prev_button");
let nextButton = document.getElementById("next_button");
let allInput = document.getElementsByTagName("input");
let submitButton = document.getElementById("submit_button");

function nextQuestion() {
  counter++;
  form.style.transform = "translateX(" + -size * counter + "vw)";
  prevButton.style.visibility = "visible";
  if (counter == 5) {
    nextButton.style.visibility = "hidden";
  }
}

let size = 100;
let counter = 0;

function nextQuestion() {
  counter++;
  form.style.transform = "translateX(" + -size * counter + "vw)";
  prevButton.style.visibility = "visible";
  if (counter == 5) {
    nextButton.style.visibility = "hidden";
  }
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
  if (allInput.value == null) {
    swal("Ooops", "seems like you missed some questions", "error", {
      button: "Go Back",
    });
  }
}
