// QUERY SELECTORS
const grid = document.querySelector('.grid');
const resetButton = document.getElementById('reset');
const newGridButton = document.getElementById('new-grid');

// EVENT LISTENERS
resetButton.addEventListener('click', resetColours);
newGridButton.addEventListener('click', changeGridSize);

// Function: Add item squares to grid
function drawGrid(num) {
    let total = num * num;
    grid.style.gridTemplate = `${'1fr '.repeat(num)} / ${'1fr '.repeat(num)}`
    populateGrid(total);
}

function resetColours() {
    let lastIndex = grid.lastChild.dataset.index;
    console.log(lastIndex);
    grid.innerHTML = null;
    populateGrid(lastIndex);
}

function populateGrid(amount) {
    for (let i = 0; i < amount; i++) {
        let div = document.createElement('div');
        div.classList.add('item');
        div.setAttribute('data-index', i);
        div.addEventListener('mouseover', () => {
            let randomColour = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            div.style.backgroundColor = randomColour;
        });
        grid.appendChild(div);
    }
}

function removeGridItems() {
    grid.innerHTML = "";
}

function changeGridSize() {
    let userInput = Number(prompt("Please choose a grid size between 1 - 100:"));
    if (/^[0-9.,]+$/.test(userInput) === false) return alert("Hey! You didn't even enter a number."); // Tests if input contains string characters. If so, return.
    if (userInput > 100 || userInput < 1) return alert("Pick a number that's between 1 - 100 please!"); 
    removeGridItems();
    drawGrid(userInput);
}

drawGrid(10);