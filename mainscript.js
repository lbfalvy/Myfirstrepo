document.onload = createListBtn();

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
function addTodo(){
    x = document.getElementById("myInput").value;
   let newLi = document.createElement("li");
   let newTodo = document.createTextNode(x);
   newTodo.classname = "newTodo";
   newLi.appendChild(newTodo);
   todoList.appendChild(newLi);
   createListBtn();
  
   
}





