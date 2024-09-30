
const button = document.querySelector('button');
const table = document.querySelector('table');
const pElement = document.querySelector('p');

let rowCount = 0;

button.addEventListener('click', addNewRow);


function addNewRow() {
    const newRow = document.createElement('tr');

    for (let i = 0; i < 7; i++) {
        const newCell = document.createElement('td');
        const randomNumber = Math.floor(Math.random() * 10);
        newCell.textContent = randomNumber;

        newRow.appendChild(newCell);
    }

    table.appendChild(newRow);

    rowCount++;

    pElement.textContent = `Valmiita rivejä ${rowCount}`;
}