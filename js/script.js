var showBtn = document.querySelector("#show-onmap-search-form");
var formContainer = document.querySelector(".onmap-search-form");
var form = formContainer.querySelector("form");




// топорненько как-то через this может
var plusOneChild = form.querySelector("#plus-one-child");
var minusOneChild = form.querySelector("#minus-one-child");
var plusOneAdult = form.querySelector("#plus-one-adult");
var minusOneAdult = form.querySelector("#minus-one-adult");
var SetArrivalDate = form.querySelector("#set-arrival-date");
var SetDepartureDate = form.querySelector("#set-departure-date");




var arrivalDate = form.querySelector("[name=arrival-date]");
var departureDate = form.querySelector("[name=departure-date]");
var adultsCount = form.querySelector("[name=adults-count]");
var childrenCount = form.querySelector("[name=children-count]");


var today = new Date;


// arrivalDate.value = today.toLocaleString()
arrivalDate.value = today.toLocaleDateString();

// arrivalDate.value = today.toDateString();

formContainer.classList.add("hidden");



localStorage.getItem("adultsCount", adultsCount.value);
localStorage.getItem("childrenCount", childrenCount.value);

// showBtn.addEventListener("click", function(event) {
//     // event.preventDefault();
//     formContainer.classList.toggle("show-hidden");

//     // if (storage) {
//     //   adultsCount.value = storage;
//     //   childrenCount.value = storage;
//     // password.focus();
//     // } else {
//     // login.focus();
//     // }

// });


showBtn.addEventListener("click", function(event) {

    if (formContainer.classList.contains("show-hidden")) {

        formContainer.classList.add("slowly-hide");

        formContainer.classList.remove("show-hidden");
    } else {


        // if (storage) {
        //     adultsCount.value = storage;
        //     childrenCount.value = storage;
        // }
        formContainer.classList.add("show-hidden");

        formContainer.classList.remove("slowly-hide");

    }

});


plusOneChild.addEventListener("click", function(event) {

    childrenCount.value = +childrenCount.value + 1;
});

minusOneChild.addEventListener("click", function(event) {

    if (+childrenCount.value > 0) {

        childrenCount.value = +childrenCount.value - 1;
    }
});

plusOneAdult.addEventListener("click", function(event) {

    adultsCount.value = +adultsCount.value + 1;
});

minusOneAdult.addEventListener("click", function(event) {

    if (+adultsCount.value > 0) {

        adultsCount.value = +adultsCount.value - 1;
    }
});



form.addEventListener("submit", function(event) {
    if (!arrivalDate.value || !departureDate.value || !adultsCount.value || !childrenCount.value) {
        event.preventDefault();
        alert("введите даты и количество человек");
        // form.classList.remove("form-data-error");
        // form.offsetWidth = popup.offsetWidth;
        // form.classList.add("form-data-error");
    } else {
        localStorage.setItem("adultsCount", adultsCount.value);
        localStorage.setItem("childrenCount", childrenCount.value);
    }
});





// window.onclick = function(event) {
//   if (!event.target.matches(".onmap-search-form")||!event.target.matches("#show-onmap-search-form")) {


//       if (formContainer.classList.contains("show-hidden")) {
//         formContainer.classList.remove("show-hidden");
//       }
//     }
//   };







// 
// window.onclick = function(event) {
//   if (!event.target.matches(".onmap-search-form") || !event.target.matches("#show-onmap-search-form") ) {

//   	    if (formContainer.classList.contains("show-hidden")) {

//         formContainer.classList.add("slowly-hide");

//         formContainer.classList.remove("show-hidden");

//   }
//   }
// };




// window.addEventListener("keydown", function(event) {
//   if (event.keyCode === 27) {
//     if (popup.classList.contains("modal-content-show")) {
//       popup.classList.remove("modal-content-show");
//       popup.classList.remove("modal-error");
//     }
//   }
// });
