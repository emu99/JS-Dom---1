//Bad way
class Bird {
  fly() { console.log("Flying..."); }
}

class Duck extends Bird {}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins cannot fly!"); // This violates the Liskov Substitution Principle (LSP)
  }
}

//GOODWAY
class Bird {
  walk() { console.log("Walking..."); }
}

class FlyingBird extends Bird {
  fly() { console.log("Flying..."); }
}

class Duck extends FlyingBird {}
class Penguin extends Bird {} // Penguins will only walk, they will not try to fly
