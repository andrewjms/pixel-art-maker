"use strict"; // forces strict mode
document.getElementById('sizePicker')[2].addEventListener('click', function(event) {
    event.preventDefault() //removes the default setting for the submit button
});
/*
  Select color input
  The function returns the color value he user picks
  from the "colorPicker" function
*/
function getColor() {
    return document.getElementById("colorPicker").value;
}
/*
  Select size input
  These functions pull the number entered by the user
  in the Hight and Width fields.
  Note: The value must be entered and then 'clicked' on
  to be registered.
*/
function getHeight() {
    return document.getElementById("inputHeight").value;
}

function getWidth() {
    return document.getElementById("inputWidth").value;
}

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var submitArea = document.getElementById('sizePicker');
    // submitArea.getElementByTagName('input')[2].addEventListener('click', function(event){
    //   event.preventDefault()
    // })
    var i; // loop variable
    var h; // loop variable
    var stringAdd = ""; // String varable use to edit HTML file
    var tableLocation = document.getElementById('pixelCanvas'); // root table location
    // start of neste loops for build the stringAdd variable to be added to the
    // HTML file as a table with unique ID values for each table cell.
    for (i = 1; i <= getHeight(); i++) {
        stringAdd += "<tr>";
        for (h = 1; h <= getWidth(); h++) {
            stringAdd += "<td id = cell-" + i + "-" + h + "></td>";
        }
        stringAdd += "</tr>";
    }
    tableLocation.innerHTML = stringAdd;
    //  start of a nest loops for assigning mouse click listeners to each cell
    //  by it's ID value.  When a click is detected for a spesific cell ID, the
    //  background color of the cell is changed to whatever the user selected.
    //  The user can change the color at any time but any cells that have have
    //  thier background changed will not be effected unless clicked on again.
    for (i = 1; i <= getHeight(); i++) {
        for (h = 1; h <= getWidth(); h++) {
            document.getElementById("cell-" + i + "-" + h).addEventListener('click', function() {
                this.style.backgroundColor = getColor();
            });
        }
    }
}
