"use strict";
class Bomb extends HTMLElement {
    constructor() {
        super();
        let foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this);
        this.posy = 200;
        this.posx = 220;
    }
    update() {
        this.style.transform = `translate(${this.posx}px, ${this.posy}px)`;
    }
}
window.customElements.define("bomb-component", Bomb);
class Car extends HTMLElement {
    constructor() {
        super();
        let foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this);
        this.posx = 100;
        this.posy = 350;
    }
    update() {
        this.style.transform = `translate(${this.posx}px, ${this.posy}px)`;
    }
}
window.customElements.define("car-component", Car);
class Game {
    constructor() {
        this.score = 0;
        this.destroyed = 0;
        this.textfield = document.getElementsByTagName("textfield")[0];
        this.statusbar = document.getElementsByTagName("bar")[0];
        this.bomb = new Bomb();
    }
    gameLoop() {
        console.log("updating the game");
    }
    destroyBuilding() {
        this.destroyed++;
        console.log("buildings destroyed " + this.destroyed);
    }
    scorePoint() {
        this.score++;
        this.textfield.innerHTML = "Score: " + this.score;
    }
}
window.addEventListener("load", () => new Game());
//# sourceMappingURL=main.js.map