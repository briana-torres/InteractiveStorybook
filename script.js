const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function () {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  this.target.classList.remove("drag-over");
}

function dragLeave(e) {
  this.target.classList.remove("drag-over");
}

function changeColor(e) {
  e.style.backgroundColor = "white";
}

function changeImage() {
  document.getElementById("clickable").src =
    "https://cdn.glitch.global/27ea88b8-df05-4f35-adfe-45c6a9f4f98a/circlewhite.png?v=1650845270261";
}

function changeImage2() {
  document.getElementById("clickable2").src =
    "https://cdn.glitch.global/27ea88b8-df05-4f35-adfe-45c6a9f4f98a/squarewhite.png?v=1650845397497";
}

function changeImage3() {
  document.getElementById("clickable3").src =
    "https://cdn.glitch.global/27ea88b8-df05-4f35-adfe-45c6a9f4f98a/heartwhite.png?v=1650845494911";
}

const myCanvas = new fabric.Canvas("demoCanvas", {
  width: 400,
  height: 400,
  backgroundColor: "lightgrey",
  isDrawingMode: true,
});
