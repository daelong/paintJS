const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const jsRange = document.getElementById("jsRange");
const colors = document.getElementsByClassName("jsColors");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");
const INITIAL_COLOR = "#2c2c2c";

let filling = false;

canvas.width = 700;
canvas.height = 700;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
  painting = false;
}
function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onColorsChange(event) {
  // colors.style.backgroundColor =
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleBrushSizeChange(event) {
  const brushSize = event.target.value;
  ctx.lineWidth = brushSize;
}
function allPainting() {
  if (filling == true) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function handleModeChange() {
  if (filling == false) {
    filling = true;
    mode.innerText = "paint";
  } else {
    filling = false;
    mode.innerText = "fill";
  }
}

function handleCM(event) {
  event.preventDefault();
}

function handleSaveClick() {
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = image;
  link.download = "awesome";
  link.click();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", allPainting);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", onColorsChange)
);

if (jsRange) {
  jsRange.addEventListener("input", handleBrushSizeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeChange);
}

if (save) {
  save.addEventListener("click", handleSaveClick);
}
