class Game {
    private score: number = 0;
    private destroyed: number = 0;
    private textfield: HTMLElement;
    private statusbar: HTMLElement;
    private gameoverWrapper: HTMLElement;
    private gameover: HTMLElement;
    private finalscore: HTMLElement;
    private car: Car;
    private nrBombs: number = 4;
    private bombs: Array<Bomb> = [];

    constructor() {
        this.textfield          = document.getElementsByTagName("textfield")[0] as HTMLElement;
        this.statusbar          = document.getElementsByTagName("bar")[0] as HTMLElement;
        this.gameoverWrapper    = document.getElementsByTagName("gameover-wrapper")[0] as HTMLElement;
        this.gameover           = document.getElementsByTagName("gameover")[0] as HTMLElement;
        this.finalscore         = document.getElementsByTagName("finalscore")[0] as HTMLElement;

        for (let i = 0; i < this.nrBombs; i++) {
            this.bombs.push(new Bomb(this))
        }
        
        this.car = new Car(this);

        this.gameLoop();
    }
    
    private gameLoop():void{
        if (this.destroyed >= 4) {
            this.finalscore.innerHTML           = "Score:" + this.score;
            this.gameoverWrapper.style.display  = "block";
            this.gameover.style.display         = "block";
            this.finalscore.style.display       = "block";
        } else {
            this.bombs.forEach(bomb => bomb.update());
            this.car.update();

            requestAnimationFrame(() => this.gameLoop())
        }
    }

    public destroyBuilding(){
        this.destroyed ++;
        this.drawBuildings();
    }
       
    public scorePoint() {
        this.score ++;
        this.textfield.innerHTML = "Score: " + this.score
    }

    public resetBuildings() {
        this.destroyed = 0;
        this.drawBuildings();
    }

    private drawBuildings() {
        let diff = -72 * this.destroyed;
        this.statusbar.style.backgroundPositionX = diff + "px"
    }
}

window.addEventListener("load", () => new Game());
