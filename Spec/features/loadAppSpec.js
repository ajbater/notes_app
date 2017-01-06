(function featureTestPageLoadsWithEmptyNoteList(){
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  brand = document.getElementById("brand");
  title = document.getElementById("list-title");
  app = document.getElementById("app");
  noteController.getHtml();

  assert.isTrue(brand.innerHTML === "Notes App", "Page loads with brand name:");
  assert.isTrue(title.innerHTML === "Notes", "Page loads with list header: ");
  assert.isTrue(app.innerHTML === "<ul></ul>", "Page loads with empty notes list: ");
})();

(function featureTestNoteAppearsInNoteListUponSubmit(){
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  app = document.getElementById("app");
  form = document.getElementById("form");
  textarea = document.getElementById("textarea");
  textarea.innerHTML = "test";
  submit = document.getElementById("submit");
  submit.click();
  assert.isTrue(app.innerHTML === '<ul><li><div><a href="#0">test</a></div></li></ul>', "Note appears in note list when submit is clicked: ")
})();
