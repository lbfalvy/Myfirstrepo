document.onload = createListBtn();

//current date:
const y = new Date();
document.getElementById("year").innerHTML = y.getFullYear();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const m = new Date();
let month = months[m.getMonth()];
document.getElementById("month").innerHTML = month;

const d = new Date();
document.getElementById("day").innerHTML = d.getDate();

//creating buttons on list items

function createListBtn(){
    let todoList = document.getElementsByTagName("li");
    for (let i = 0; i < todoList.length; i++){
        let fBtn = document.createElement("button");
        fBtn.className = "fBtn";
        let dBtn = document.createElement("button");
        dBtn.className = "dBtn";
        todoList[i].appendChild(fBtn);
        todoList[i].appendChild(dBtn);
    }
    //click on finish button to remove item 
    
    let close = document.getElementsByClassName("dBtn");
    for (let i = 0; i < close.length; i++){
        close[i].onclick = function() {
            let li = this.parentElement;
            li.style.display = "none";
            
        }
    }
}


let x = "";
let z = "";
function addTodo(){
    x = document.getElementById("myInput").value;
    z = document.getElementById("details").value;
   let newLi = document.createElement("li");
   let newTodo = document.createTextNode(x);
   let newDetail = document.createTextNode(z);
   newTodo.classname = "newTodo";
   newDetail.classname = "newDetail";
   newLi.appendChild(newTodo);
   newLi.appendChild(newDetail);
   todoList.appendChild(newLi);
   createListBtn();
  
   
}





