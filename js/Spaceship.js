export class Spaceship {
    #modifier = 5;
    #leftArrow = false;
    #rightArrow = false;
    constructor(element) {
        this.element = element;
    }

    init() {
        this.#setPosition();
        this.#eventListeners();
        this.#gameLoop();
    }

    #setPosition() {
        this.element.style.bottom = '0px';
        this.element.style.left = `${window.innerWidth / 2 - this.element.offsetLeft - this.element.offsetWidth / 2}px`;
    }

    #eventListeners() {
        window.addEventListener('keydown', ({keyCode}) => {
            switch(keyCode) {
                case 37:
                    this.#leftArrow = true;
                    break;
                case 39:
                    this.#rightArrow = true;
                    break;
            }
        })

        window.addEventListener('keyup', ({keyCode}) => {
            switch(keyCode) {
                case 37:
                    this.#leftArrow = false;
                    break;
                case 39:
                    this.#rightArrow = false;
                    break;
            }
        })
    }

    #gameLoop = () => {
        this.#whatKey()
        requestAnimationFrame(this.#gameLoop)
    }

    #whatKey() {
        if(this.#leftArrow) {
            this.element.style.left = `${parseInt(this.element.style.left, 10) - this.#modifier}px`;
        }
        if(this.#rightArrow) {
            this.element.style.left = `${parseInt(this.element.style.left, 10) + this.#modifier}px`;
        }
    }
}