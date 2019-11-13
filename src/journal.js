export class Journal {
  constructor() {
    this.entries = [];
    this.count = 0;
  }
  addEntry(entry) {
    entry.number = this.count;
    this.count++;
    this.entries.push(entry);
  }
}
