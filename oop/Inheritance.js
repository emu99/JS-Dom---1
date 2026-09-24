// 1. Parent Class (Superclass)
class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    move() {
        return `The ${this.brand} is moving at ${this.speed} km/h.`;
    }
}

// 2. Child Class (Subclass) inheriting from Vehicle
class ElectricCar extends Vehicle {
    constructor(brand, speed, batteryCapacity) {
        // super() passes the required data up to the Parent constructor
        super(brand, speed); 
        
        // Custom unique property only for ElectricCar
        this.batteryCapacity = batteryCapacity; 
    }

    // Unique method only for ElectricCar
    chargeBattery() {
        return `${this.brand} is charging. Battery size: ${this.batteryCapacity} kWh.`;
    }
}

// 3. Creating an instance of the child class
const myTesla = new ElectricCar("Tesla Model 3", 120, 75);

// Accessing inherited parent method
console.log(myTesla.move()); 
// Output: The Tesla Model 3 is moving at 120 km/h.

// Accessing unique child method
console.log(myTesla.chargeBattery()); 
// Output: Tesla Model 3 is charging. Battery size: 75 kWh.
