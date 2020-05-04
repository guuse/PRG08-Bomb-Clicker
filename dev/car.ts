///<reference path="gameObject.ts"/>
class Car extends gameObject {

    constructor(gameInstance: Game) {
        super(gameInstance);

        let foreground  = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this);

        this.posx = this.randomInteger(-500, -1000);
        this.posy = this.maxh - 150;


    }

    public update():void {
        if (this.posx > this.maxw) {
            this.posx = -200;
        } else {
            this.posx = this.posx + 5;
        }

        this.draw();
    }

    public clicked() {
        this.gameInstance.resetBuildings();
    }
}

window.customElements.define("car-component", Car as any);
