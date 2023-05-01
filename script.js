const keyboard = {
  'Digit1': '1',
  'Digit2': '2',
  'Digit3': '3',
  'Digit4': '4',
  'Digit5': '5',
  'Digit6': '6',
  'Digit7': '7',
  'Digit8': '8',
  'Digit9': '9',
  'Digit0': '0',
  'Minus': '-',
  'Equal': '=',
  'Backspace': 'Backspace',
  'KeyQ': 'q',
  'KeyW': 'w',
  'KeyE': 'e',
  'KeyR': 'r',
  'KeyT': 't',
  'KeyY': 'y',
  'KeyU': 'u',
  'KeyI': 'i',
  'KeyO': 'o',
  'KeyP': 'p',
  'BracketLeft': '[',
  'BracketRight': ']',
  'Backslash': '\\',
  'KeyA': 'a',
  'KeyS': 's',
  'KeyD': 'd',
  'KeyF': 'f',
  'KeyG': 'g',
  'KeyH': 'h',
  'KeyJ': 'j',
  'KeyK': 'k',
  'KeyL': 'l',
  'Semicolon': ';',
  'Quote': '\'',
  'Enter': 'Enter',
  'KeyZ': 'z',
  'KeyX': 'x',
  'KeyC': 'c',
  'KeyV': 'v',
  'KeyB': 'b',
  'KeyN': 'n',
  'KeyM': 'm',
  'Comma': ',',
  'Period': '.',
  'Slash': '/',
  'Space': ' '
};

function init() {
  let out = '';
  for (const [code, label] of Object.entries(keyboard)) {
    if (code === 'Backspace' || code === 'Enter' || code === 'Space') {
      out += '<div class="clearfix"></div>';
    }
    out += '<div class="k-key" data="'+ code +'">' + label + '</div>';
  }
  document.querySelector('#keyboard').innerHTML = out;
}

init();


function addToTextarea(value) {
  const textarea = document.querySelector('#textarea');
  textarea.value += value;
}

// ввод с клавиатуры
document.addEventListener('keydown', function (event) {
  console.log(event.code); // KeyA
  console.log(event.keyCode); // 65
  document.querySelector('#keyboard .k-key[data="' + event.code + '"]').classList.add('active');
});

document.addEventListener('keyup', function(event) { // присвоение класса activ для клавиши
  document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
    element.classList.remove('active');
  });
});

document.addEventListener('keydown', function (event) { // запись символов в текстареа
  const value = event.key;
  document.querySelector('#keyboard .k-key[data="' + event.code + '"]').classList.add('active');
  addToTextarea(value);
});

document.addEventListener('keydown', function (event) { // запись символов в текстареа или удаление символов
  const code = event.code;
  document.querySelector('#keyboard .k-key[data="' + code + '"]').classList.add('active');
  if (code === 'Backspace') {
    const textarea = document.querySelector('#textarea');
    textarea.value = textarea.value.slice(0, -1);
  } else {
    addToTextarea(keyboard[code]);
  }
});




// ввод мышью

document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
  element.addEventListener('mousedown', function(event) {
    document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
      element.classList.remove('active');
    });
    this.classList.add('active');
    const value = this.textContent;
    addToTextarea(value);
  });
  element.addEventListener('mouseup', function(event) {
    this.classList.remove('active');
  });
});
