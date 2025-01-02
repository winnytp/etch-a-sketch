const sketchContainer = document.querySelector('.sketchpad');

function drawGrid(number) {
    // check that number input is below 100
    if (number > 100) { 
        return alert('Enter a maximum size of 100.'); 
    }

    // add required divs to sketchpad
    for (let i = 0; i < number * number; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        div.setAttribute('style', `width: calc(100% / ${number})`);
        sketchContainer.appendChild(div);
    }
}

function updateSizeText(number) {
    const sizeText = document.querySelector('#current-size-text');
    sizeText.textContent = `${number} x ${number}`;
}

drawGrid(9);