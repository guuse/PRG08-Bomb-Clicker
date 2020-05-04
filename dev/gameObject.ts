class gameObject extends HTMLElement {

    protected maxh: number;
    protected maxw: number;
    protected posx: number;
    protected posy: number;
    protected gameInstance : Game;


    constructor(gameInstance: Game) {
        super();

        this.gameInstance = gameInstance;
        this.maxh = window.innerHeight;
        this.maxw = window.innerWidth;

        this.addEventListener("click", this.clicked);
        this.addEventListener("touchstart", this.clicked);

    }

    public draw():void {
        this.style.transform = `translate(${this.posx}px, ${this.posy}px)`
    }

    public randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public clicked() {
    }
}

window.customElements.define("game-component", gameObject as any);
