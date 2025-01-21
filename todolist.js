// First of, to implement the color changes,
//  I called all required elements to JS, as we can see below
let headerContainer = document.querySelector(".header-container");
let tasksContainer = document.querySelector(".tasks-container");
let homeIcon = document.querySelector("#home");
let btnRed = document.querySelector(".btn-red");
let btnYellow = document.querySelector(".btn-yellow");
let btnGreen = document.querySelector(".btn-green");
let btnAqua = document.querySelector(".btn-aqua");


// One way to implement the color changes is to implement a function
// individually as we can see below, however, I want to use less code
// to achieve the same outcome, as well as, make the code more readable and cleaner.
//     btnRed.addEventListener('click', function () {
//     tasksContainer.style.backgroundColor = "red";
//     headerContainer.style.backgroundColor = "red";
//     headerContainer.style.color = "white";
// });
// For this, I will use a function that will take a parameter

function changeColor(roundBtn,bgColor,textColor) {
    roundBtn.addEventListener('click', function () {
        if (roundBtn) {
        tasksContainer.style.backgroundColor = bgColor;
        headerContainer.style.backgroundColor = bgColor;
        headerContainer.style.color = textColor;  
}
    })
}
changeColor(btnRed, "red", "white");
changeColor(btnYellow, "yellow", "black");
changeColor(btnGreen, "green", "white");
changeColor(btnAqua, "aqua", "black");
changeColor(homeIcon, "rgb(210, 207, 207)", "black");
// TOMORROW TRY ASSIGNING ANOTHER PARAMETER TO HEADCONTAINER

