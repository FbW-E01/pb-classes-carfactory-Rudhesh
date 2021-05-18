let Garage = [];

function Factory(make, model, year, type) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = "car"
    
}

let car1 = (new Factory("Audi","A3" , 2019))
let car2 = (new Factory("Audi", "A4", 2010))
let car3 = (new Factory("Audi", "A5", 2015))
let car4 = (new Factory("Audi", "A6", 2006))
let car5 = (new Factory("Audi", "A7", 2014))
let car6 = (new Factory("Audi", "A8", 2019))
let car7 = (new Factory("Audi", "Q3", 2017))
let car8 = (new Factory("Audi", "Q5", 2019))
let car9 = (new Factory("Audi", "Q7", 2010))
let car0= (new Factory("Audi", "Q8", 2019))

Garage.push(car1,
    car2,
    car3,
    car4,
    car5,
    car6,
    car7,
    car8,
    car9,
    car0)
console.log(Garage)