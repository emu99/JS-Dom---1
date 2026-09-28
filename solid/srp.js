//Bad way
class Report {
  constructor(data) {
    this.data = data;
  }
  // ১ নম্বর দায়িত্ব: রিপোর্ট তৈরি করা
  generateHTML() {
    return `<h1>${this.data.title}</h1>`;
  }
  // ২ নম্বর দায়িত্ব: ফাইল সেভ করা (এটি SRP লঙ্ঘন করে)
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

// ফাইল সেভ করার জন্য আলাদা ক্লাস
class ReportSaver {
  save(reportHTML, fileName) {
    console.log(`Saving report to ${fileName}...`);
  }
}
