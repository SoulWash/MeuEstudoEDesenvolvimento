
class Polygon {
    constructor(height, width){
        this.height = height
        this.width = width
    }

    get area(){
        return this.#calculeteArea()  
// Quando possui uma '#' é que só vai ser assessivel dentro da class
    }

    #calculeteArea(){
        return this.height * this.width
    }
}

let polygon = new Polygon(50,60)
console.log(polygon.area)

polygon = new Polygon(10,11)
console.log(polygon.area)

