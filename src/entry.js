export class Entry {
  constructor(title, content, timestamp) {
    this.title = title;
    this.content = content;
    this.timestamp = timestamp;
  }

  wordCount() {
    return this.content.split(" ").length;
  }

  charCount() {
    return this.content.length;
  }

  charTypeCount() {
    return {
      vowel: this.content.match(/[aeiou]/gi).length,
      consonant: this.content.match(/[bcdfghjklmnpqrstvwxys]/gi).length,
      space: this.content.match(/[\s]/gi).length,
      punctuation: this.content.match(/['":;,?.!()-]/gi).length,
    };
  }

  getTeaser() {
    const firstEightWords = this.content.split(" ").slice(0, 8).join(" ");
    const firstSentence = this.content.slice(0, (this.content.search(/[.?!]/) + 1));
    const smallest = Math.min(firstEightWords.length, firstSentence.length);
    return ((smallest === firstSentence.length) ? firstSentence : firstEightWords);
  }
}

// TODO:
//Max char count on getTeaser()
//Single word entries don't work properly
