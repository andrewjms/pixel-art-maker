// Select color input
function getColor() {
  return document.getElementById("colorPicker").value;
}
// Select size input
function getHeight() {
  return document.getElementById("inputHeight").value;
}
function getWidth() {
  return document.getElementById("inputWidth").value;
}

// When size is submitted by the user, call makeGrid()

function mgrid() {
// Your code goes here!
var i;
var h;
var stringAdd = "";
var tableLocation = document.getElementById('pixelCanvas');
for (i = 1; i <= getHeight(); i++) {
  stringAdd += "<tr>";
  for (h = 1; h <= getWidth(); h++) {
    stringAdd += "<td id = cell-"+i+"-"+h+"></td>";
    }
  stringAdd += "</tr>";
  }
tableLocation.innerHTML = stringAdd;
for (i = 1; i <= getHeight(); i++) {
  for (h = 1; h <= getWidth(); h++) {
    document.getElementById("cell-"+i+"-"+h).addEventListener('click', function() {
      this.style.backgroundColor = getColor();
    });
    }
  }
}
