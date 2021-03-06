export class Enemy {
    constructor(container, intervalTime, enemyClass, explosionClass) {
        this.container = container;
        this.element = document.createElement('div');
        this.enemyClass = enemyClass;
        this.explosionClass = explosionClass;
        // this.intervalTime = Math.floor(Math.random() * 100) + 10;
        this.intervalTime = (enemyClass === 'enemy--big') ? intervalTime * 2 : intervalTime;
        this.lives = (enemyClass === 'enemy--big') ? 3 : 1
    }
    
    init() {
        this.#setEnemy()
        this.#updatePosition()
    }

    #setEnemy() {
        this.element.classList.add(this.enemyClass);
        this.container.appendChild(this.element);
        this.element.style.top = '0px'
        this.element.style.left = `${this.#randomPosition()}px`;
    }

    #randomPosition() {
        return Math.floor(Math.random() * (window.innerWidth - this.element.offsetWidth))
    }

    #updatePosition() {
        this.intervalTime = setInterval(() => this.#setNewPosition(), this.intervalTime)
    }

    #setNewPosition() {
        this.element.style.top = `${this.element.offsetTop + 1}px`;
    }

    hit() {
        this.lives--
        if(!this.lives) {
            this.explode()
        }
    }
    
    explode() {
        this.element.classList.remove(this.enemyClass);
        this.element.classList.add(this.explosionClass);
        clearInterval(this.intervalTime);
        const animationTime = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--explosions-animation-time'), 10);
        setTimeout(() => {
            this.element.remove();
        }, animationTime); 
    }

}