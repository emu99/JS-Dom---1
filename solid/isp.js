//Bad way
class SmartWorker {
  work() { console.log("Working..."); }
  eat() { console.log("Eating lunch..."); }
}

class Robot extends SmartWorker {
  // রোবট কাজ করতে পারে, কিন্তু খেতে পারে না!
  eat() { return null; } // বাধ্য হয়ে খালি মেথড রাখতে হচ্ছে
}
//Good way
const swimmer = {
  swim() { console.log("Swimming..."); }
};

const flyer = {
  fly() { console.log("Flying..."); }
};

// যার যা প্রয়োজন তাকে শুধু সেই মেথড দেওয়া (Composition)
class Duck {
  constructor() {
    Object.assign(this, swimmer, flyer);
  }
}

class Penguin {
  constructor() {
    Object.assign(this, swimmer); // পেনগুইন উড়তে পারে না, তাই শুধু swim দেওয়া হলো
  }
}
