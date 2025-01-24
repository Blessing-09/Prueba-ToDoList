// First of, to implement the color changes,
//  I called all required elements to JS, as we can see below
let headerContainer = document.querySelector(".header-container");
let tasksContainer = document.querySelector(".tasks-container");
let homeIcon = document.querySelector("#home");
let btnPink = document.querySelector(".btn-pink");
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
changeColor(btnPink, "pink", "white");
changeColor(btnYellow, "yellow", "black");
changeColor(btnGreen, "green", "white");
changeColor(btnAqua, "lightblue", "black");
changeColor(homeIcon, "rgb(210, 207, 207)", "black");
// TOMORROW TRY ASSIGNING ANOTHER PARAMETER TO HEADCONTAINER:WORKED!!!

// Called the HTML elements needed to enable the add task button functionality
let addTask = document.querySelector("#add");
let btnAdd = document.querySelector(".btn-add");


btnAdd.addEventListener('click', function () {
let taskValue = addTask.value.trim();
if (taskValue) {
let newElement = document.createElement("li"); // You can create any HTML element here; I went with "li" because its the most appropriate when creating a list. 
newElement.textContent = taskValue; // This is where you add the text to the new element, in this case, we want it to be the input entered in the task input element.
newElement.classList.add("task");

let trashElement = document.createElement("button");
trashElement.textContent = "🗑"; // In this case, the textContent added is a trash icon.
trashElement.classList.add("trash");

newElement.appendChild(trashElement); // This is where you add the trash button to the new element.
tasksContainer.appendChild(newElement); // This is where you add the new element to the tasks container.
addTask.value = ""; // This is where you clear the input field after adding a new task. If you separate the quote, the input container is empty after entering task.

// Here we want to click the trashElement and it eliminates the task from the list
trashElement.addEventListener('click', function () {
    newElement.remove();
});
}
else { 
    alert(`🚫Please, enter a valid task‼️`);
}

});

// Let's call the HTML elements needed for the search task input and its button
let findInput = document.querySelector("#find");
let findBtn = document.querySelector(".btn-find");

findBtn.addEventListener('click', () => {
    let findValue = findInput.value.trim();
    if (findValue) {
    let containerItems = tasksContainer.querySelectorAll("li");
    let matchFound = false;
    containerItems.forEach((item) => {
        let text = item.textContent.toLowerCase();
        if (text.includes(findValue)) {
            item.style.backgroundColor = "yellow";
            matchFound = true;
        }
        else {
            item.style.backgroundColor = "";
        }
    });
    }
    else {
        alert(`🚫Search is empty‼️`);
    }
findInput.value = "";
});