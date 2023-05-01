// Получаем ссылки на элементы DOM
const textarea = document.getElementById('textarea');
const keyboard = document.getElementById('keyboard');

// Создаем массив символов, которые мы будем использовать на клавиатуре
const keys = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
];

textarea.focus();


// Создаем функцию, которая будет генерировать клавиатуру на экране
function generateKeyboard() {
  // Проходимся по каждой строке клавиатуры
  keys.forEach(row => {
  // Создаем элемент div для строки клавиатуры
  const rowEl = document.createElement('div');
  // Добавляем класс "row" к элементу div
  rowEl.classList.add('row');
  // Проходимся по каждой клавише в строке
  row.forEach(key => {
  // Создаем элемент button для клавиши
  const keyEl = document.createElement('button');
  // Добавляем текст клавиши внутрь элемента button
  keyEl.textContent = key;
  // Добавляем класс "key" к элементу button
  keyEl.classList.add('key');
  // Добавляем обработчик события "click" к элементу button
  keyEl.addEventListener('click', () => {
  // Добавляем символ нажатой клавиши в конец текстового поля
  textarea.focus();
  textarea.value += key;
  // Добавляем класс "active" к элементу button
  keyEl.classList.add('active');
  });
  // Добавляем обработчик события "transitionend" к элементу button
  keyEl.addEventListener('transitionend', () => {
  // Удаляем класс "active" из элемента button
  keyEl.classList.remove('active');
  });
  // Добавляем элемент button внутрь элемента div строки
  rowEl.appendChild(keyEl);
  });
  // Добавляем элемент div строки внутрь элемента div клавиатуры
  keyboard.appendChild(rowEl);
  });
  }

// Вызываем функцию для генерации клавиатуры на экране
generateKeyboard();

document.addEventListener('keyup', function(event) { // присвоение класса activ для клавиши
  document.querySelectorAll('#keyboard .key').forEach(function (element) {
    element.classList.remove('active');
  });
});

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  const keyEL = keyboard.querySelector('.key');
  if (key === keyEL.data-key) {
    textarea.focus();
    textarea.value += keyEl.textContent;
    keyEl.classList.add('active');
  }
});

document.addEventListener('keyup', (event) => {
  const key = event.key.toLowerCase();
  const keyEl = keyboard.querySelector(`.key[data-key="${key}"]`);
  if (keyEl) {
    keyEl.classList.remove('active');
    textarea.focus();
  }
});



