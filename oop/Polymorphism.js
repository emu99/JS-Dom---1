// 1. Parent Class
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Generic method declaration
    makeSound() {
        return "Some generic animal sound...";
    }
}

// 2. Child Class 1 (Overrides parent method)
class Dog extends Animal {
    makeSound() {
        return `${this.name} says: Woof! Woof! 🐾`;
    }
}

// 3. Child Class 2 (Overrides parent method)
class Cat extends Animal {
    makeSound() {
        return `${this.name} says: Meow! 🐱`;
    }
}

// 4. Using Polymorphism in action
// A function that accepts ANY Animal object and triggers the same method
class AnimalShelter {
    triggerSound(animalInstance) {
        console.log(animalInstance.makeSound());
    }
}

const shelter = new AnimalShelter();
const myDog = new Dog("Buddy");
const myCat = new Cat("Whiskers");

// The exact same method execution produces entirely different results
shelter.triggerSound(myDog); // Output: Buddy says: Woof! Woof! 🐾
shelter.triggerSound(myCat); // Output: Whiskers says: Meow! 🐱
