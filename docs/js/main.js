"use strict";
class gameObject extends HTMLElement {
    constructor(gameInstance) {
        super();
        this.gameInstance = gameInstance;
        this.maxh = window.innerHeight;
        this.maxw = window.innerWidth;
        this.addEventListener("click", this.clicked);
        this.addEventListener("touchstart", this.clicked);
    }
    draw() {
        this.style.transform = `translate(${this.posx}px, ${this.posy}px)`;
    }
    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    clicked() {
    }
}
window.customElements.define("game-component", gameObject);
class Bomb extends gameObject {
    constructor(gameInstance) {
        super(gameInstance);
        let foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this);
        this.randomizePosition();
        this.speed = this.randomInteger(2, 4);
    }
    update() {
        if (this.posy > this.maxh) {
            this.gameInstance.destroyBuilding();
            this.randomizePosition();
        }
        else {
            this.posy = this.posy + this.speed;
        }
        this.draw();
    }
    randomizePosition() {
        this.posy = this.randomInteger(-200, -500);
        this.posx = this.randomInteger(100, this.maxw - 100);
    }
    clicked() {
        this.randomizePosition();
        this.gameInstance.scorePoint();
    }
}
window.customElements.define("bomb-component", Bomb);
class Car extends gameObject {
    constructor(gameInstance) {
        super(gameInstance);
        let foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this);
        this.posx = this.randomInteger(-500, -1000);
        this.posy = this.maxh - 150;
    }
    update() {
        if (this.posx > this.maxw) {
            this.posx = -200;
        }
        else {
            this.posx = this.posx + 5;
        }
        this.draw();
    }
    clicked() {
        this.gameInstance.resetBuildings();
    }
}
window.customElements.define("car-component", Car);
class Game {
    constructor() {
        this.score = 0;
        this.destroyed = 0;
        this.nrBombs = 4;
        this.bombs = [];
        this.textfield = document.getElementsByTagName("textfield")[0];
        this.statusbar = document.getElementsByTagName("bar")[0];
        this.gameoverWrapper = document.getElementsByTagName("gameover-wrapper")[0];
        this.gameover = document.getElementsByTagName("gameover")[0];
        this.finalscore = document.getElementsByTagName("finalscore")[0];
        for (let i = 0; i < this.nrBombs; i++) {
            this.bombs.push(new Bomb(this));
        }
        this.car = new Car(this);
        this.gameLoop();
    }
    gameLoop() {
        if (this.destroyed >= 4) {
            this.finalscore.innerHTML = "Score:" + this.score;
            this.gameoverWrapper.style.display = "block";
            this.gameover.style.display = "block";
            this.finalscore.style.display = "block";
        }
        else {
            this.bombs.forEach(bomb => bomb.update());
            this.car.update();
            requestAnimationFrame(() => this.gameLoop());
        }
    }
    destroyBuilding() {
        this.destroyed++;
        this.drawBuildings();
    }
    scorePoint() {
        this.score++;
        this.textfield.innerHTML = "Score: " + this.score;
    }
    resetBuildings() {
        this.destroyed = 0;
        this.drawBuildings();
    }
    drawBuildings() {
        let diff = -72 * this.destroyed;
        this.statusbar.style.backgroundPositionX = diff + "px";
    }
}
window.addEventListener("load", () => new Game());
//# sourceMappingURL=main.js.map