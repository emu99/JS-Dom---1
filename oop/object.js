// 1. Defining the class
class Person {
    // The constructor method is called automatically when a new object is created
    constructor(name, age, profession) {
        this.name = name;           // Property
        this.age = age;             // Property
        this.profession = profession; // Property
    }

    // A method (behavior/function) belonging to the class
    introduce() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and I work as a ${this.profession}.`;
    }

    // Another method to update age
    celebrateBirthday() {
        this.age += 1;
        return `Happy Birthday ${this.name}! You are now ${this.age} years old.`;
    }
}

// 2. Creating objects (instances) from the class
const person1 = new Person("Rahim", 25, "Software Engineer");
const person2 = new Person("Karim", 30, "Graphic Designer");

// 3. Accessing properties and calling methods
console.log(person1.name);               // Output: Rahim
console.log(person1.introduce());        // Output: Hello, my name is Rahim, I am 25 years old, and I work as a Software Engineer.

console.log(person2.celebrateBirthday()); // Output: Happy Birthday Karim! You are now 31 years old.
