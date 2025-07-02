console.log("JavaScript File is linked");

// Variables
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currentDraggedElement = null;
const resetBtn = document.querySelector(".reset-btn");
const labelBox = document.getElementById("label-box");

// Functions

function dragStart() {
    console.log("Drag Start Called");
    currentDraggedElement = this;
}

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.preventDefault();
    this.classList.add("drag-over");
}

function dragLeave(event) {
    this.classList.remove("drag-over");
}

function drop(event) {
    event.preventDefault();

//Double drop logic
    this.classList.remove("drag-over");

    if (this.children.length > 0) return;

    this.appendChild(currentDraggedElement);

//  Matching the correct labels 
    const labelText = currentDraggedElement.textContent.trim().toLowerCase();
    const targetId = this.id.toLowerCase();

    if (labelText === targetId) {
        this.classList.add("correct-drop");
    } else {
        this.classList.add("wrong-drop");
    }
    currentDraggedElement = null;
}

//Reset Btn 
function resetGame() {
    console.log("Reset Game called");
        targetZones.forEach(zone => {
        if (zone.children.length > 0) {
            const label = zone.firstElementChild;
            labelBox.appendChild(label);
        }
        zone.classList.remove("correct-drop", "wrong-drop", "drag-over"); // clear all feedback
    })

    targetZones.forEach(zone => {
        if (zone.children.length > 0) {
            const label = zone.firstElementChild;
            labelBox.appendChild(label);
        }
        zone.classList.remove("correct-drop", "wrong-drop", "drag-over"); 
    });
}

// Event Listeners
labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(target => {
    target.addEventListener("dragover", dragOver);
    target.addEventListener("dragenter", dragEnter);
    target.addEventListener("dragleave", dragLeave);
    target.addEventListener("drop", drop);
});

<<<<<<< Updated upstream
resetBtn.addEventListener("click", resetGame);
=======
resetBtn.addEventListener("click", resetGame);
>>>>>>> Stashed changes
