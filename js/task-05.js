function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumberRef = document.querySelector('#controls [type="number"]');
const btnRenderRef = document.querySelector('#controls [data-create]');
const btnDestroyRef = document.querySelector('#controls [data-destroy]');
const boxesRef = document.querySelector('#boxes')


function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const curSize = 30 + (i * 10);
    const divMarkup = `<div style="background-color:${getRandomHexColor()}; width:${curSize}px; height:${curSize}px; border:1px solid black"></div>`;
    boxesRef.insertAdjacentHTML("beforeend", divMarkup);
  }
}

btnRenderRef.addEventListener("click", () => createBoxes(inputNumberRef.value));
btnDestroyRef.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesRef.innerHTML = "";
}