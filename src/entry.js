export class Entry {
  constructor(title, content, timestamp) {
    this.title = title;
    this.content = content;
    this.timestamp = timestamp;
  }

  wordCount() {
    return this.content.split(" ").length;
  }

  charCount(isTypeSpecific) {
    if (!isTypeSpecific) {
      return this.content.length;
    } else {
      return {
        vowel: this.content.match(/[aeiou]/gi).length,
        consonant: this.content.match(/[bcdfghjklmnpqrstvwxys]/gi).length,
        space: this.content.match(/[\s]/gi).length,
        punctuation: this.content.match(/['":;,?.!()-]/gi).length,
      };
    }
  }

  getTeaser() {
    const firstEightWords = this.content.split(" ").slice(0, 8).join(" ");

    const puncCheck = this.content.search(/[.?!]/);
    const firstSentence = (puncCheck > -1) ? this.content.slice(0, puncCheck + 1) : firstEightWords;

    const smallest = Math.min(firstEightWords.length, firstSentence.length, 80);
    switch (smallest) {
      case firstSentence.length:
        return firstSentence;
      case firstEightWords.length:
        return firstEightWords;
      case 80:
        return this.content.slice(0, 80);
    }
  }
}
