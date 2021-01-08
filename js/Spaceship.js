export class Spaceship {
    constructor(element) {
        this.element = element;
    }

    init() {
        this.#setPosition();
        this.#eventListeners();
    }

    #setPosition() {
        this.element.style.bottom = '0px';
        this.element.style.left = `${window.innerWidth / 2 - this.element.offsetLeft - this.element.offsetWidth / 2}px`;
    }

    #eventListeners() {
        window.addEventListener('keydown', ({keyCode}) => {
            switch(keyCode) {
                case 37:
                    this.element.style.left = `${parseInt(this.element.style.left, 10) - 10}px`;
                    break;
                case 39:
                    this.element.style.left = `${parseInt(this.element.style.left, 10) + 10}px`;
                    break;
            }
        })
    }
}