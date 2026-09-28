//Bad way
class Bird {
  fly() { console.log("Flying..."); }
}

class Duck extends Bird {}

class Penguin extends Bird {
  fly() {
    throw new Error("পেনগুইন তো উড়তে পারে না!"); // এটি LSP লঙ্ঘন করে
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
class Penguin extends Bird {} // পেনগুইন শুধু হাঁটবে, উড়তে যাবে না
