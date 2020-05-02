class Game {
    
    private score: number = 0
    private destroyed: number = 0
    private textfield: HTMLElement
    private statusbar: HTMLElement
    private bomb: Bomb
    
    constructor() {
        this.textfield  = document.getElementsByTagName("textfield")[0] as HTMLElement
        this.statusbar  = document.getElementsByTagName("bar")[0] as HTMLElement

        this.bomb       = new Bomb()
        
        // call method gameLoop
    }
    
    private gameLoop():void{
        console.log("updating the game")
        
        // add request animation frame
    }

    public destroyBuilding(){
        this.destroyed ++
        console.log("buildings destroyed " + this.destroyed)
    }
       
    public scorePoint() {
        this.score ++
        this.textfield.innerHTML = "Score: " + this.score
    }

} 

window.addEventListener("load", () => new Game())