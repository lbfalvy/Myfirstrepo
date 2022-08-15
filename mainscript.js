const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//current date:
const now = new Date();
document.getElementById("year").innerHTML = now.getFullYear();
let month = MONTHS[now.getMonth()];
document.getElementById("month").innerHTML = month;
document.getElementById("day").innerHTML = now.getDate();

const canSitOnGround = MONTHS.filter(month => !month.includes("r"))

/**
 * Construct and append new todo element to list
 * @param {string} title 
 * @param {string} details 
 */
function addTodo(title, details) {
    // Create list item
    const li = document.createElement("li");
    // Generate buttons
    const fBtn = document.createElement("button");
    fBtn.className = "fBtn";
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "dBtn";
    deleteBtn.onclick = function () {
        li.style.display = "none";
    }
    li.append(title, details, fBtn, deleteBtn);
    todoList.append(li);
}

const TITLE_INPUT = document.getElementById("myInput");
const DETAILS_INPUT = document.getElementById("details");
function onAddClick() {
    addTodo(TITLE_INPUT.value, DETAILS_INPUT.value);
}

addTodo("van még sok feladatom", "")
addTodo("van még sok feladatom", "")
addTodo("vajon hol nézem el a js codot?", "")