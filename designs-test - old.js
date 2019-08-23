// Select color input
function myFunction() {
    var x = document.getElementById("colorPicker").value;
    console.log(x);
    var cc = "background-color:"+x;
    console.log(cc);
    document.getElementById("cell-5-5").setAttribute("style", cc);
    // setAttribute("style", cc);
}
function cf() {
  document.getElementById("sizePicker").onclick(console.log("click"));
}
// Select size input
function mfh() {
    var h = document.getElementById("inputHeight").value;
    // console.log(h);
}
function mfw() {
    var w = document.getElementById("inputWidth").value;
    // console.log(w);
}
// When size is submitted by the user, call makeGrid()

function makeGrid() {
// Your code goes here!
  var grid = getElementById('sizePicker');
  // grid[2]
  var mgrid = document.getElementById('pixelCanvas');
}

function mgrid() {
  var i;
  var h;
  var c = "";
  var loc = document.getElementById('pixelCanvas')
  for (i = 1; i <= document.getElementById("inputWidth").value; i++) {
    c += "<tr>";
    for (h = 1; h <= document.getElementById("inputHeight").value; h++) {
      c += "<td id = cell-"+i+"-"+h+"></td>";
    }
    c += "</tr>";
  }
  document.getElementById('pixelCanvas').innerHTML = c;
}
