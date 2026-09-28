//Bad way
class MySQLDatabase {
  connect() { console.log("Connected to MySQL"); }
}

class OrderManager {
  constructor() {
    // সরাসরি MySQLDatabase এর ওপর নির্ভরশীল। ডাটাবেজ বদলাতে হলে পুরো ক্লাস এডিট করতে হবে।
    this.db = new MySQLDatabase(); 
  }
}
// Good way
class MySQLDatabase {
  connect() { console.log("Connected to MySQL"); }
}

class MongoDB {
  connect() { console.log("Connected to MongoDB"); }
}

class OrderManager {
  // বাইরে থেকে যেকোনো ডাটাবেজ অবজেক্ট পাস করা যাবে
  constructor(database) {
    this.database = database;
  }
  
  init() {
    this.database.connect();
  }
}

// ব্যবহার:
const mySQL = new MySQLDatabase();
const order1 = new OrderManager(mySQL); // এখন সহজে MongoDB-তেও সুইচ করা যাবে
