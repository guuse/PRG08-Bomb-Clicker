class Bomb {
    
    private element: HTMLElement
    private posy: number
    private posx: number
        
    constructor() {
        this.element    = document.createElement("bomb")
        let foreground  = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element);
        
        this.posy = 200
        this.posx = 220
    }

    public update():void {
        this.element.style.transform = `translate(${this.posx}px, ${this.posy}px)`
    }
}