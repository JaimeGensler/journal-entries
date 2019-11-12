import { Entry } from "./entry.js";
import { Journal } from "./journal.js";

$(document).ready(function() {
  const newJournal = new Journal();

  $("form#new-entry").submit(function(event) {
    event.preventDefault();

    const timestamp = new Date();
    const newEntry = new Entry($("input#entry-title").val(), $("input#entry-content").val(), timestamp);
    newJournal.addEntry(newEntry);
    console.log(newEntry.getTeaser());
  });
});
