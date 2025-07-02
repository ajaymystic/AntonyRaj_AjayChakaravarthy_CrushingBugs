# 🧩 Human Anatomy Drag-and-Drop Game

This interactive game allows players to drag labels (e.g., Heart, Lungs, Liver) to the correct spot on a human body diagram. Built using HTML, CSS, and JavaScript.

---

## ✅ Features
- Drag-and-drop interface with labeled body parts.
- Drop zones that only accept one label.
- Reset button to restart the game.
- Drop zones highlight when hovered with a draggable label.

---

## 🐛 Bugs Fixed

### 1. Multiple Labels in One Zone
- **Problem:** Users could drop more than one label into the same target zone.
- **Solution:** Added a check in the drop function to ensure only one child can be present.

### 2. Reset Functionality Broken
- **Problem:** Reset button didn’t move the labels back.
- **Solution:** Implemented a function to reparent dropped labels back to the label box.

### 3. UX Improvement: Drop Zone Highlight
- **Problem:** No visual feedback when dragging over a drop zone.
- **Solution:** Added CSS + JS interaction to highlight target zones when a draggable item is hovering.

---

## 🛠 Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript

---

## 👨‍🏫 Author
Ajay Chakaravarthy Antony Raj  

