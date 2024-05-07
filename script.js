const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value == '') {
        alert("You must write something!");
    }
    else{
        /*Variable assignment for a new string*/
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span");
        /**Cross icon*/
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    /**clears the box after entry*/
    inputBox.value = "";
}