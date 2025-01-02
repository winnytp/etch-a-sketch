let selectedGridSize = 10;
drawGrid(selectedGridSize);

const resetBtn = document.querySelector('#reset');
const sizeBtn = document.querySelector('#size');
const modal = document.querySelector('.modal');

resetBtn.addEventListener('click', () => {
    drawGrid(selectedGridSize);
});

modal.addEventListener('click', (event) => {
    const sizeInput = document.querySelector('#size-input');
    const sizeValue = Number(sizeInput.value);

    // when modal draw grid button is clicked
    if (event.target.matches('#size-confirm')) {
        if (sizeValue > 100) {
            sizeInput.value = ""; // look into this...
            return alert(`The value ${sizeValue} is too high. Please choose between 1-100.`);
        }

        if (sizeValue === 0 || sizeValue < 0) {
            return alert(`Value cannot be ${sizeValue}. Please choose between 1-100.`);
        }

        if (sizeValue >= 1 && sizeValue <= 100) {
            selectedGridSize = sizeValue;
            drawGrid(sizeValue);
            return modal.classList.add('hidden');
        }
    }

    // when modal close button is clicked
    if (event.target.matches('.close-modal')) {
        sizeInput.value = "";
        return modal.classList.add('hidden');
    }
});

sizeBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

function drawGrid(number) {
    const sketchContainer = document.querySelector('.sketchpad');

    // clear sketch container before adding new box items
    sketchContainer.innerHTML = "";

    // check that number input is below 100
    if (number > 100) {
        drawGrid(4);
        return alert('Enter a maximum size of 100.'); 
    }

    // add required divs to sketchpad
    for (let i = 0; i < number * number; i++) {
        const div = document.createElement('div');
        const randomColour = Math.floor(Math.random()*16777215).toString(16);
        div.classList.add('box');
        div.setAttribute('style', `width: calc(100% / ${number});`);
        sketchContainer.appendChild(div);
    }

    applyRandomHoverColour();

    // update current size text in DOM
    updateSizeText(number);
}

function updateSizeText(number) {
    const sizeText = document.querySelector('#current-size-text');
    sizeText.textContent = `${number} x ${number}`;
}

function applyRandomHoverColour() {
    const boxes = document.querySelectorAll('.box');
    const box = document.querySelector('.box');
    const boxWidth = box.getAttribute('style');

    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            box.setAttribute('style', boxWidth + `background-color: #${randomColor};`);
        });
    });
}