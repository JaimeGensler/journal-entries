import './styles.css';
import { Entry } from "./entry.js";
import { Journal } from "./journal.js";

function hiddenEntry(entry) {
  const html = "<div class= 'hidden' data-entry='" + entry.number +  "'><h3>" + entry.title + "<span class='teaser'>" + entry.getTeaser() + "</span></h3></div>";
  $('div#all-entries').prepend(html)
}

$(document).ready(function() {
  const journal = new Journal();

  $('div#all-entries').on('click', 'div', function() {
    $("div.displayed p").remove();
    $("div.displayed").toggleClass("displayed hidden");
    $(this).toggleClass("displayed hidden");
    $(this).append("<p>" + journal.entries[this.getAttribute("data-entry")].content + "</p>");
  });

  $("form#new-entry").submit(function(event) {
    event.preventDefault();

    const solution = $('#solution').val();

    const timestamp = new Date();
    const newEntry = new Entry($("input#entry-title").val(), $("textarea#entry-content").val(), timestamp);
    journal.addEntry(newEntry);
    hiddenEntry(newEntry);

console.log(newEntry.getTeaser());
console.log(newEntry.wordCount());
console.log(newEntry.charCount());
console.log(newEntry.content);
  });
});
