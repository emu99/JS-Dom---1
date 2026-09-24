class SmartPhone {
    // Declaring private properties using the # symbol
    #batteryLevel;

    constructor(brand) {
        this.brand = brand;
        this.#batteryLevel = 100; // Default starting charge
    }

    // A Getter method to securely read the private data
    get battery() {
        return `${this.#batteryLevel}%`;
    }

    // A Setter method to securely modify the data with validation rules
    set useApp(minutes) {
        let drain = Math.floor(minutes * 0.5);
        
        // Validation logic: Ensure battery doesn't drop below 0
        if (this.#batteryLevel - drain < 0) {
            this.#batteryLevel = 0;
            console.log("Phone turned off. Battery empty!");
        } else {
            this.#batteryLevel -= drain;
        }
    }
}

// Creating an object instance
const myPhone = new SmartPhone("Samsung");

// 1. Reading data via the getter
console.log(myPhone.brand);   // Output: Samsung (Public property)
console.log(myPhone.battery); // Output: 100% (Accessed safely via getter)

// 2. Modifying data via the setter
myPhone.useApp = 30;          // Simulates playing a game for 30 minutes
console.log(myPhone.battery); // Output: 85%

// 3. Attempting illegal/direct external modifications
// myPhone.#batteryLevel = 500; 
// ❌ SyntaxError: Private field '#batteryLevel' must be declared in an enclosing class
