const container = document.querySelector('#container');

function createGrid(size = '16') {
    // check if size is valid
    var integerSize = parseInt(size);

    if (!(!isNaN(integerSize) && size === '' + integerSize)){
        return;
    }
    
    if (size > 100) {
        alert('Grid is too large (> 100)');
        return;
    }

    // Refreshes the grid
    const oldGrid = document.querySelector('#container div:last-child');
    oldGrid.remove();
    const newGrid = document.createElement('div');
    newGrid.classList.add('grid');
    container.appendChild(newGrid);

    for (let row = 1; row <= size; row++) {
        //create row div
        const rowDiv = document.createElement('rowDiv');
        rowDiv.classList.add('row-div');
        
        for (let box = 1; box <= size; box++) {
            const boxDiv = document.createElement('box') 
            boxDiv.classList.add('box');
            boxDiv.setAttribute('id', 'boxDiv');
            
            let size = boxDiv.style.width;
            boxDiv.style.height = size;

            boxDiv.addEventListener('mousedown', pulse);
            boxDiv.addEventListener('mouseover', pulse);

            // add box to row
            rowDiv.appendChild(boxDiv);

            const insideBox = document.createElement('div');
            insideBox.classList.add('box-for-height');
            boxDiv.appendChild(insideBox);
        }

        // add row div to grid
        newGrid.appendChild(rowDiv);
    }
}



const sizeDiv = document.getElementById('size');
const matchingSize = document.getElementById('matchingSize');

const matchNumbers = function(e) {
    if (sizeDiv.value == '') {
        matchingSize.innerHTML = 'x 16';
    }
    else {
        matchingSize.innerHTML = `x ${e.target.value}`;
    } 
}

sizeDiv.addEventListener('input', matchNumbers);
sizeDiv.addEventListener('propertychange', matchNumbers);
 
const submit = document.getElementById('submit');

function setGrid(e) {
    sizeInt = sizeDiv.value;
    createGrid(sizeInt);
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function pulse(e) {
    if (e.type === 'mouseover' && !mouseDown) { return }
    this.classList.add('pulse') ;
}

const button = document.getElementById('button');
button.addEventListener('click', setGrid);


// enter key submits 
sizeDiv.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key == 'Enter') {
        event.preventDefault();
        setGrid();
    }
});

window.onload = function () {
    createGrid();
}
