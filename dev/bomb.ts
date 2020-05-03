class Bomb extends HTMLElement{
    
    private posy: number
    private posx: number
        
    constructor() {
        super()

        let foreground  = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this);
        
        this.posy = 200
        this.posx = 220
    }

    public update():void {
        this.style.transform = `translate(${this.posx}px, ${this.posy}px)`
    }
}

window.customElements.define("bomb-component", Bomb)