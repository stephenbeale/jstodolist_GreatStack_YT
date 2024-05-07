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
    /**Saves data after any box added*/
    saveData();
}

/*For the click function*/
listContainer.addEventListener("click", function(e){
    /**E is accepted for var for event object, here a mouse event */

    /**If clicked on LI, then call 'checked' class in css*/
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    /**Else if clicking on span, remove parent element (i.e. element above it in the html), so deletes it*/
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

/**To handle saving data on close/refresh
 * Saves all data currently held within listContainer's html
 */
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
   listContainer.innerHTML = localStorage.getItem("data") 
}

showTask();