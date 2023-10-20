class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getDescription() {
    return `This car is a ${this.year} ${this.make} ${this.model}`;
  }
}

const myCar = new Car("Honda", "Civic", "2015");

console.log(myCar);
console.log(myCar.getDescription());

class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }
  getDescription() {
    return `${super.getDescription()} It has a range of ${this.range} miles.`;
  }
}

const myECar = new ElectricCar("Tesla", "Model S", 2019, 300);

console.log(myECar);
console.log(myECar.getDescription());
