//Bad way
class Report {
  constructor(data) {
    this.data = data;
  }
  //  Preparing reports
  generateHTML() {
    return `<h1>${this.data.title}</h1>`;
  }
  //  Saving files (this violates the Single Responsibility Principle / SRP).
  saveToFile(fileName) {
    console.log(`Saving report to ${fileName}...`);
  }
}
//Good way
class Report {
  constructor(data) {
    this.data = data;
  }
  generateHTML() {
    return `<h1>${this.data.title}</h1>`;
  }
}

// A separate class for saving files
class ReportSaver {
  save(reportHTML, fileName) {
    console.log(`Saving report to ${fileName}...`);
  }
}
