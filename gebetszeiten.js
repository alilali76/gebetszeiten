const date = new Date().toDateString().slice(4, 10);
const table = document.getElementById("gebetszeitensammlung");
const Row = getRowByDate(table, date);
const prayerDisplayTable = document.getElementById("gebetszeiten");
const prayerDisplayTableMobile = document.getElementById("gebetszeitenmobil");
let dateInput = document.getElementById("dateInput");

function updateDateInput() {
    dateInput.value = new Date().toISOString().split("T")[0]; // Set the date input to today's date in YYYY-MM-DD format
}

// Function to find the table row matching the current date
function getRowByDate(table, dateStr) {
    // Iterate through table rows to find the matching date
    for(const row of table.tBodies[0].rows) {
        const firstCell = row.cells[0];
        if (firstCell && firstCell.textContent.trim() === dateStr) {
            return row;
        }
    }
    return null;
}

// Function to display prayer times in the designated tables
function displayPrayerTimes(row) {
    console.log(row);
    if(row == null) {
        row = Row;
        updateDateInput();
    }
    for(let i = 0; i < row.cells.length; i++) {
        // Update desktop table
        prayerDisplayTable.tBodies[0].rows[0].cells[i].innerText = row.cells[i].innerText;
        // Update mobile table
        prayerDisplayTableMobile.tBodies[0].rows[i].cells[1].innerText = row.cells[i].innerText;
    }
}

function updatePrayerTimes() {
    console.log("Date input changed");
    const selectedDate = document.getElementById("dateInput").value;
    const formattedDate = new Date(selectedDate).toDateString().slice(4, 10);
    const newRow = getRowByDate(table, formattedDate);
    displayPrayerTimes(newRow);
}

displayPrayerTimes(Row);
updateDateInput();