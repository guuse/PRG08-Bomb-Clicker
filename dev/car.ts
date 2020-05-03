class Car extends HTMLElement{
    
    private posx: number
    private posy: number
        
    constructor() {
        super()

        let foreground  = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this);
        
        this.posx = 100
        this.posy = 350
    }

    public update():void {
        this.style.transform = `translate(${this.posx}px, ${this.posy}px)`
    }
}

window.customElements.define("car-component", Car)