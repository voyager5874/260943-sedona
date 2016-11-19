var showBtn = document.querySelector("#show-onmap-search-form");
var formContainer = document.querySelector(".onmap-search-form");
var form = formContainer.querySelector("form");

var adultsCount = form.querySelector("[name=adults-count]");
var childrenCount = form.querySelector("[name=children-count]");
var peopleCount = form.querySelector(".people-count-row");


var arrivalDate = form.querySelector("[name=arrival-date]");
var departureDate = form.querySelector("[name=departure-date]");

var today = new Date();
var tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
// var dateDisplayMode = { day: "numeric", month: "long", year: "numeric"};
var dateDisplayMode = {
  day: "numeric",
  month: "long"
};

var todayDate = today.toLocaleDateString("ru-RU", dateDisplayMode);
var tomorrowDate = tomorrow.toLocaleDateString("ru-RU", dateDisplayMode);


formContainer.classList.add("hidden");


arrivalDate.value = todayDate + " " + today.getFullYear();
departureDate.value = tomorrowDate + " " + today.getFullYear();


showBtn.addEventListener("click", function(event) {
  // alert(localStorage.getItem("adults-count"));
  if (formContainer.classList.contains("show-hidden")) {
    formContainer.classList.add("slowly-hide");
    formContainer.classList.remove("show-hidden");
  } else {
    if (localStorage) {
      adultsCount.value = localStorage.getItem("adults-count");
      childrenCount.value = localStorage.getItem("children-count");
    }
    formContainer.classList.add("show-hidden");
    formContainer.classList.remove("slowly-hide");
  }
});



peopleCount.addEventListener("click", function(event) {
  if (event.target.classList.contains("icon-plus")) {
    event.target.parentNode.querySelector("input").value++;

  }
  if (event.target.classList.contains("icon-minus") &&
    event.target.parentNode.querySelector("input").value > 0) {
    event.target.parentNode.querySelector("input").value--;

  }
  if (isNaN(++event.target.parentNode.querySelector("input").value) ||
    isNaN(--event.target.parentNode.querySelector("input").value)) {
    event.target.parentNode.querySelector("input").value = 1;
  }
});


form.addEventListener("submit", function(event) {
  var inputs = form.querySelectorAll("input");
  if (adultsCount.value == 0) {
    event.preventDefault();
    adultsCount.classList.add("empty-input");
  }
  for (i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      event.preventDefault();
      inputs[i].classList.add("empty-input");
    } else {
      localStorage.setItem(inputs[i].id, inputs[i].value);
    }
  }
});

form.addEventListener("click", function(event) {
  event.target.classList.remove("empty-input");
  // event.stopPropagation();
});
