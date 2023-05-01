const keys = [
  { value: "`", code: "Backquote" },
  { value: "1", code: "Digit1" },
  { value: "2", code: "Digit2" },
  { value: "3", code: "Digit3" },
  { value: "4", code: "Digit4" },
  { value: "5", code: "Digit5" },
  { value: "6", code: "Digit6" },
  { value: "7", code: "Digit7" },
  { value: "8", code: "Digit8" },
  { value: "9", code: "Digit9" },
  { value: "0", code: "Digit0" },
  { value: "-", code: "Minus" },
  { value: "=", code: "Equal" },
  { value: "Backspace", code: "Backspace" },
  { value: "q", code: "KeyQ" },
  { value: "w", code: "KeyW" },
  { value: "e", code: "KeyE" },
  { value: "r", code: "KeyR" },
  { value: "t", code: "KeyT" },
  { value: "y", code: "KeyY" },
  { value: "u", code: "KeyU" },
  { value: "i", code: "KeyI" },
  { value: "o", code: "KeyO" },
  { value: "p", code: "KeyP" },
  { value: "[", code: "BracketLeft" },
  { value: "]", code: "BracketRight" },
  { value: "\\", code: "Backslash" },
  { value: "a", code: "KeyA" },
  { value: "s", code: "KeyS" },
  { value: "d", code: "KeyD" },
  { value: "f", code: "KeyF" },
  { value: "g", code: "KeyG" },
  { value: "h", code: "KeyH" },
  { value: "j", code: "KeyJ" },
  { value: "k", code: "KeyK" },
  { value: "l", code: "KeyL" },
  { value: ";", code: "Semicolon" },
  { value: "'", code: "Quote" },
  { value: "Enter", code: "Enter" },
  { value: "z", code: "KeyZ" },
  { value: "x", code: "KeyX" },
  { value: "c", code: "KeyC" },
  { value: "v", code: "KeyV" },
  { value: "b", code: "KeyB" },
  { value: "n", code: "KeyN" },
  { value: "m", code: "KeyM" },
  { value: ",", code: "Comma" },
  { value: ".", code: "Period" },
  { value: "/", code: "Slash" },
  { value: " ", code: "Space" },
];

const keyboard = document.getElementById("keyboard");
const output = document.getElementById("output");

keys.forEach((key) => {
  const keyElement = document.createElement("div");
  keyElement.classList.add("key");
  keyElement.textContent = key.value;
  keyElement.setAttribute("data-value", key.value);
  keyElement.setAttribute("data-code", key.code);
  keyboard.appendChild(keyElement);
});

document.addEventListener("keydown", (event) => {
  const keyElement = document.querySelector(`[data-code="${event.code}"]`);
  output.focus();
  if (keyElement) {
    keyElement.classList.add("active");
  } 
  if (event.code === "Backspace") {
    event.preventDefault();
    const cursorPos = output.selectionStart;
    output.value = output.value.slice(0, cursorPos - 1) + output.value.slice(cursorPos);
    const backspaceEvent = new KeyboardEvent('keydown', { code: 'Backspace' });
    output.dispatchEvent(backspaceEvent);
  } else {
    output.value += event.key;
  }
});

document.addEventListener("keyup", (event) => {
  const keyElement = document.querySelector(`[data-code="${event.code}"]`);
  if (keyElement) {
    keyElement.classList.remove("active");
  }
});

keyboard.addEventListener("click", (event) => {
  output.focus();
  const keyElement = event.target.closest(".key");
  if (keyElement) {
    const value = keyElement.getAttribute("data-value");
    keyElement.classList.add("active");
    if (value === "Backspace") {
      event.preventDefault();
      const cursorPos = output.selectionStart;
      output.value = output.value.slice(0, cursorPos - 1) + output.value.slice(cursorPos);
      const backspaceEvent = new KeyboardEvent('keydown', { code: 'Backspace' });
      output.dispatchEvent(backspaceEvent);
    } else {
      output.value += value;
      keyElement.classList.add("active");
      setTimeout(() => {
        keyElement.classList.remove("active");
      }, 200);
    }
  }
});
