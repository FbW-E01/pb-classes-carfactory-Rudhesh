

function Factory(make, model, year, type) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = "car"
    
}

console.log(new Factory("Audi","A3" , 2019))
console.log(new Factory("Audi", "A4", 2010))
console.log(new Factory("Audi", "A5", 2015))
console.log(new Factory("Audi", "A6", 2006))
console.log(new Factory("Audi", "A7", 2014))
console.log(new Factory("Audi", "A8", 2019))
console.log(new Factory("Audi", "Q3", 2017))
console.log(new Factory("Audi", "Q5", 2019))
console.log(new Factory("Audi", "Q7", 2010))
console.log(new Factory("Audi", "Q8", 2019))
