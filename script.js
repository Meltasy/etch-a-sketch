// Etch-a-Sketch: a 16 x 16 Grid

// Pseudocode
// Create a container div in HTML
// Inside the div, create a 16 by 16 grid of square divs using javascript
// Use Flexbox to make the divs appear as a grid
// Make squares change to a different colour when the mouse enters them
// Add a button with a prompt asking player for a number
// This will create a new grid with the specified number of rows or columns
// The old grid should be removed before the new grid is created
// The new grid should take up the same space as before

// let container = document.querySelector("#container");

// createGrid(256);

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//     // container.removeChild(content);
//     let newNumber = prompt("How many rows do you want in your grid?");
//     if (newNumber > 100) prompt("Please choose a number less than 100.");
//     removeGrid();
//     createGrid(newNumber * newNumber);
// });

// function removeGrid() {
//     while (container.firstElementChild) {
//         container.removeChild(container.firstElementChild);
//     }
// }

// function createGrid(number) {
//     for (let i= 0; i < number; i++) {
//         const content = document.createElement("div");
//         content.classList.add("content"); 
//         container.appendChild(content);
//         content.addEventListener('mouseenter', () => {
//             content.style.backgroundColor = "springgreen";
//         });
//     }
// }

// Etch-a-Sketch: a new grid of any size

// Pseudocode

// The new grid should take up the same space as before
// Make color of squares change to randomly generated colors

const container = document.querySelector("#container");

const btn = document.querySelector("#btn");

btn.addEventListener("click", getNewGrid);

function getNewGrid() {
    let newNumber = prompt("How many rows do you want in your grid?");
    if (newNumber > 100) {
        alert("Please choose a number less than 100.");
        getNewGrid();
    } else {
        removeGrid();
        createGrid(newNumber);
    }
}

function removeGrid() {
    while (container.firstElementChild) {
        container.removeChild(container.firstElementChild);
    }
}

function createGrid(number) {
    for (let i = 0; i < number * number; i ++) {
        const content = document.createElement("div");
        content.classList.add("content");
        container.appendChild(content);
        content.style.width = `${(600 / number)}px`;
        content.style.height = `${(600 / number)}px`;
        content.addEventListener("mouseenter", getRandomColor)
        function getRandomColor() {
            let randomNumber = Math.floor(Math.random() * 0xFFFFFF).toString(16);
            let randomColor = randomNumber.padStart(6, 0);
            content.style.backgroundColor = `#${randomColor.toUpperCase()}`;
        };
        // row.addEventListener("mouseenter", () => {
        //     row.style.backgroundColor = "rgb(52, 55, 121)";
        // });
    }
}

createGrid(16);