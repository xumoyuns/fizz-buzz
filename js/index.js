let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elFormResult = document.querySelector(".form__result");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (elFormInput.value % 3 === 0 && elFormInput.value % 5 === 0) {
    elFormResult.textContent = "FizzBuzz";
  } else if (elFormInput.value % 3 === 0) {
    elFormResult.textContent = "Fizz";
  } else if (elFormInput.value % 5 === 0) {
    elFormResult.textContent = "Buzz";
  } else {
    elFormResult.textContent = elFormInput.value;
  }
});
