//Bad way
class PaymentProcessor {
  processPayment(amount, type) {
    if (type === 'bkash') {
      console.log(`Paid ${amount} via bKash`);
    } else if (type === 'nagad') {
      console.log(`Paid ${amount} via Nagad`);
    } // নতুন রকেট বা কার্ড যোগ করতে হলে এই কোড এডিট করতে হবে
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

// মূল ক্লাসটি আর এডিট করতে হবে না, নতুন কোনো পেমেন্ট ক্লাস পাস করলেই হবে
class PaymentProcessor {
  processPayment(amount, paymentMethod) {
    paymentMethod.pay(amount);
  }
}
