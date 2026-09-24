class WashingMachine {
    // 1. Internal, complex steps are hidden (Abstracted away)
    #fillWater() {
        return "Water filled to optimal level.";
    }

    #addDetergent() {
        return "Detergent released into the drum.";
    }

    #spinCycle() {
        return "Drum spinning at 1200 RPM.";
    }

    // 2. Simple, singular interface exposed to the user
    startWashCycle() {
        console.log("Starting machine...");
        console.log(this.#fillWater());
        console.log(this.#addDetergent());
        console.log(this.#spinCycle());
        return "Washing complete! 🧺";
    }
}

// Interacting with the abstraction
const myWasher = new WashingMachine();

// The user only triggers the high-level process
console.log(myWasher.startWashCycle());

// The user cannot access the internal complexities directly
// myWasher.#spinCycle(); // ❌ SyntaxError: Private field '#spinCycle' must be declared in an enclosing class
