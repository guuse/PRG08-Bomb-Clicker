///<reference path="gameObject.ts"/>
class Bomb extends gameObject {

    private speed : number;

    constructor(gameInstance: Game) {
        super(gameInstance);

        let foreground  = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this);

        this.randomizePosition();
        this.speed = this.randomInteger(2, 4);
    }

    public update():void {
        if (this.posy > this.maxh) {
            this.gameInstance.destroyBuilding();
            this.randomizePosition();
        } else {
            this.posy = this.posy + this.speed;
        }

        this.draw();
    }

    private randomizePosition() {
        this.posy = this.randomInteger(-200, -500);
        this.posx = this.randomInteger(100, this.maxw - 100);
    }

    public clicked() {
        this.randomizePosition();
        this.gameInstance.scorePoint();
    }
}

window.customElements.define("bomb-component", Bomb as any);
