const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: []
  },

  eventHandlers: {
    oninput: null,
    onclose: null
  },

  properties: {
    value: "",
    capsLock: false
  },

  init() {
    // Создание основных элементов
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    // Установка основных элементов
    this.elements.main.classList.add("keyboard");
    this.elements.keysContainer.classList.add("keyboard__keys");
    this.elements.keysContainer.appendChild(ths._createKeys());

    // Добавление в DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);

  },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
      "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
      "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
      "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "shift",
      "space"
    ];

    //Создание HTML иконок
    const createIconHTML = (icon_name) => {
      return `<i class="material-icons">${icon_name}</i>`;
    }

    keyLayout.forEach(key => {
      const keyElement = document.createElement("button");
      const insertLineBreak = ["backspace", "\\", "enter", "/"].indexOf(key) !== -1;
      
      // Добавление атрибутов и классов
      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__key");

      switch (key) {
        case "backspace":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("backspace");

          keyElement.addEventListener("click", () => {
            this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
            this._triggerEvents("oninput");
          });

          break;

        case "caps":
            keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
            keyElement.innerHTML = createIconHTML("keyboard_capslock");
  
            keyElement.addEventListener("click", () => {
              this._toggleCapsLock();
              keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock)
            });
  
            break;
        
        case "space":
            keyElement.classList.add("keyboard__key--extra-wide");
            keyElement.innerHTML = createIconHTML("space_bar");
      
            keyElement.addEventListener("click", () => {
              this.properties.value += " ";
              this._triggerEvents("oninput");
            });
      
            break;

        // case "space":
        //     keyElement.classList.add("keyboard__key--extra-wide");
        //     keyElement.innerHTML = createIconHTML("space_bar");
        
        //     keyElement.addEventListener("click", () => {
        //       this.properties.value += " ";
        //       this._triggerEvents("oninput");
        //     });
        
        //     break;
        default:
          keyElement.textContent = key.toLowerCase();

          keyElement.addEventListener("click", () => {
            this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
            this._triggerEvents("oninput");
          });

          break;
        }    

        fragment.appendChild(keyElement);

        if (insertLineBreak) {
          fragment.appendChild(document.createElement("br"));
        }

    });

    return fragment;
  },

  _triggerEvents(handlerName) {
    console.log("Event Triggered! Event Name: " + handlerName);
  },

  _toggleCapsLock() {
    console.log("Caps Lock Toggled!");
  },

  open(initialValue, oninput, onclose) {

  },

  close() {

  }
};

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();

});