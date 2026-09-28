//Bad way
class MySQLDatabase {
  connect() { console.log("Connected to MySQL"); }
}

class OrderManager {
  constructor() {
    // Directly dependent on MySQLDatabase. If the database changes, the entire class will have to be edited.
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
  // Any database object can be passed from the outside
  constructor(database) {
    this.database = database;
  }
  
  init() {
    this.database.connect();
  }
}

// Usage:
const mySQL = new MySQLDatabase();
const order1 = new OrderManager(mySQL); // Now it will be easy to switch to MongoDB as well
