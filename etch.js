const grid = document.querySelector('#grid');

function createGrid() {
    for (let row = 1; row <= 16; row++) {
        //create row div
        const rowDiv = document.createElement('rowDiv');
        rowDiv.classList.add('row-div');
        
        for (let box = 1; box <= 16; box++) {
            const boxDiv = document.createElement('box') 
            boxDiv.classList.add('box');
            boxDiv.setAttribute('id', 'boxDiv');

            // add box to row
            rowDiv.appendChild(boxDiv);
        }

        // add row div to grid
        grid.appendChild(rowDiv);
    }
}

const box = document.querySelector('#boxDiv');
if (box) {
    box.addEventListener('mouseover', function(e) {
        console.log(e);
    });
}

createGrid();