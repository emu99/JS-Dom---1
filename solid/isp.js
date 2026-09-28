//Bad way
class SmartWorker {
  work() { console.log("Working..."); }
  eat() { console.log("Eating lunch..."); }
}

class Robot extends SmartWorker {
  // Robots can work, but they cannot eat!
  eat() { return null; } // Being forced to keep empty methods
}
//Good way
const swimmer = {
  swim() { console.log("Swimming..."); }
};

const flyer = {
  fly() { console.log("Flying..."); }
};

// Giving each entity only the methods they need (Composition).
class Duck {
  constructor() {
    Object.assign(this, swimmer, flyer);
  }
}

class Penguin {
  constructor() {
    Object.assign(this, swimmer); // Penguins cannot fly, so only the swim behavior was provided
  }
}
