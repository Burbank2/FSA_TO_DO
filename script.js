// import { enterKey, downArrowKey } from "./keys.js"


const listContainer = document.getElementById("li-container");
const inputBox = document.getElementById('input-box');
const inputDate = document.getElementById('inputDate');
const modal = document.getElementById("alertModal");
const span = document.getElementsByClassName("close")[0];

// document.getElementById('inputDate').
// addEventListener('input', function (e) {
//     e.target.value = e.target.value.replace(/[^\d]/g, '').slice(0, 4);
// });

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
        li.innerHTML = `${inputBox.value} - Due: ${inputDate.value} @ ${inputTime.value}`;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    inputDate.value = "";
    
    saveData();
    
    
};

//! ----------jQuery---------- 

// DATE PICKER
$( function() {
    $( "#inputDate" ).datepicker();
} );

$( function() {
    $( "#inputTime" ).timepicker();
} );

//! ----------LI---------- 
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

showTask();
