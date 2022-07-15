// QUERY SELECTORS
const grid = document.querySelector('.grid');
const resetButton = document.getElementById('reset');
const newGridButton = document.getElementById('new-grid');

// EVENT LISTENERS
resetButton.addEventListener('click', resetColours);
newGridButton.addEventListener('click', inputGrid);

// Function: Add item squares to grid
function drawGrid(row, col) {
    let total = row * col;

    for (let i = 0; i < total; i++) {
        let div = document.createElement('div');
        div.classList.add('item');
        div.setAttribute('data-index', i);
        div.addEventListener('mouseover', () => div.classList.add('black-bg'));
        grid.appendChild(div);
    }
}

// Function: Define grid parameters
function defineGrid(num) {
    grid.style.gridTemplate = `${'1fr '.repeat(num)} / ${'1fr '.repeat(num)}`;
}

function resetColours() {
    let hovered = document.querySelectorAll('.black-bg');
    hovered.forEach(node => node.classList.remove('black-bg'));
}

function removeGridItems() {
    grid.innerHTML = "";
}

function inputGrid() {
    let userInput = Number(prompt("Please choose a grid size between 1 - 100:"));
    if (/^[0-9.,]+$/.test(userInput) === false) return alert("Hey! You didn't even enter a number."); // Tests if input contains string characters. If so, return.
    if (userInput > 100 || userInput < 1) return alert("Pick a number that's between 1 - 100 please!"); 
    removeGridItems();
    defineGrid(userInput);
    drawGrid(userInput, userInput);
}

defineGrid(10);
drawGrid(10, 10);