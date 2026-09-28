//Bad way
class PaymentProcessor {
  processPayment(amount, type) {
    if (type === 'bkash') {
      console.log(`Paid ${amount} via bKash`);
    } else if (type === 'nagad') {
      console.log(`Paid ${amount} via Nagad`);
    } // To add a new Rocket or card, this code needs to be edited (or You must modify this code to add a new Rocket or card).
  }
}
// Good way
class BkashPayment {
  pay(amount) {
    console.log(`Paid ${amount} via bKash`);
  }
}

class NagadPayment {
  pay(amount) {
    console.log(`Paid ${amount} via Nagad`);
  }
}

// The main class will no longer need to be edited; simply passing a new payment class will be enough
class PaymentProcessor {
  processPayment(amount, paymentMethod) {
    paymentMethod.pay(amount);
  }
}
