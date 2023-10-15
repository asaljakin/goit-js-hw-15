const fontSizeControle = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const onInputFontSize = function(event) {
  textRef.style.fontSize = `${event.target.value}px`;
};

fontSizeControle.addEventListener('input', onInputFontSize);