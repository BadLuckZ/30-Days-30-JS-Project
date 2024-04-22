const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!!");
    } else {
        // for adding a new task into the list
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        // Slash the task when toggling task name
        // Throwing "checked" class to that li
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // Remove that task when toggling x button
        // Remove span parent (which is li)
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    // Save Data in localStorage so that... 
    // the next time you come, the last data will be loaded
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
    // Load the last Data when coming
    listContainer.innerHTML = localStorage.getItem("data");
}

loadData();