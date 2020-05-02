class Car {
    
    private element: HTMLElement
    private posx: number
    private posy: number
        
    constructor() {

        this.element    = document.createElement("car")
        let foreground  = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element);
        
        this.posx = 100
        this.posy = 350
    }

    public update():void {
        this.element.style.transform = `translate(${this.posx}px, ${this.posy}px)`
    }
}