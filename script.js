// import { enterKey, downArrowKey } from "./keys.js"


const listContainer = document.getElementById("li-container");
const inputBox = document.getElementById('input-box');
const inputDate = document.getElementById('inputDate');
const modal = document.getElementById("alertModal");
const span = document.getElementsByClassName("close")[0];

addTask = () => {
    if (inputBox.value === "" || inputDate.value === "") {
        modal.style.display = "block";
		
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else {
        let li = document.createElement("li");
        li.innerHTML = `${inputBox.value} - Due: ${inputDate.value}`;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    inputDate.value = "";
    
    saveData();
    
    
};


// enterKey = (event) => {  
//     if (event.keyCode === 13) {
// 		// Prevent form submission
//         event.preventDefault(); 
//         addTask();
//     };
// }





listContainer.addEventListener(
	"click",
	function (e) {
		if (e.target.tagName === "LI") {
			e.target.classList.toggle("checked");
			saveData();
		} else if (e.target.tagName === "SPAN") {
			e.target.parentElement.remove();
			saveData();
		}
	},

	false
);

function saveData() {
	localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
	listContainer.innerHTML = localStorage.getItem("data");
}
// enterKey();
showTask();
