var showBtn = document.querySelector(".btn-show-form");
var formContainer = document.querySelector(".onmap-search-form");
var form = formContainer.querySelector("form");

formContainer.classList.add("hidden");


var arrivalDate = form.querySelector("[name=arrival-date]");
var departureDate = form.querySelector("[name=departure-date]");
var adultsCount = form.querySelector("[name=adults-count]");
var childrenCount = form.querySelector("[name=children-count]");


localStorage.getItem("adultsCount", adultsCount.value);
localStorage.getItem("childrenCount", childrenCount.value);

showBtn.addEventListener("click", function(event) {
  // event.preventDefault();
  formContainer.classList.toggle("show-invisible");

  // if (storage) {
  //   adultsCount.value = storage;
  //   childrenCount.value = storage;
    // password.focus();
  // } else {
    // login.focus();
  // }

 });


// form.addEventListener("submit", function(event) {
//   if (!arrivalDate.value || !departureDate.value) {
//     event.preventDefault();
//     alert(введите даты);
//     // form.classList.remove("modal-error");
//     // form.offsetWidth = popup.offsetWidth;
//     // form.classList.add("modal-error");
//   } else {
//     localStorage.setItem("adultsCount", adultsCount.value);
//     localStorage.setItem("childrenCount", childrenCount.value);
//   }
// });

// window.addEventListener("keydown", function(event) {
//   if (event.keyCode === 27) {
//     if (popup.classList.contains("modal-content-show")) {
//       popup.classList.remove("modal-content-show");
//       popup.classList.remove("modal-error");
//     }
//   }
// });
