export class Enemy {
    constructor(container, enemyClass) {
        this.container = container;
        this.element = document.createElement('div');
        this.enemyClass = enemyClass;
    }
    
    init() {
        this.#setEnemy()
    }

    #setEnemy() {
        this.element.classList.add(this.enemyClass);
        this.container.appendChild(this.element);
        this.element.style.top = '0px'
        this.element.style.left = `${this.#randomPosition()}px`;
    }

    #randomPosition() {
        return Math.floor(Math.random() * window.innerWidth - this.element.offsetWidth)
    }
}