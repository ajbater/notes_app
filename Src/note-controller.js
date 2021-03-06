(function(exports) {

  function NoteController(noteList){
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.createNote = function(text){
    this.noteList.createNote(text);
    return this.noteList.returnList();
  };

  NoteController.prototype.getHtml = function(){
    html = document.getElementById("app");
    html.innerHTML = this.noteListView.returnsHtmlList();
  };

  NoteController.prototype.makeNoteLinkShowFullNote = function () {
    window.addEventListener("hashchange", this.showHtmlForSingleNote.bind (this));
  };

  NoteController.prototype.showHtmlForSingleNote = function(){
    var note = this.findNoteFromNoteList().returnSingleNoteHtml();
    html = document.getElementById("app");
    html.innerHTML = note;
  };

   NoteController.prototype.getNoteIdFromURL = function(){
    return window.location.hash.split("#")[1];
  };

  NoteController.prototype.findNoteFromNoteList = function(){
    var idFromURL = noteController.getNoteIdFromURL();
    var singleNoteView = new SingleNoteView(noteList._notes[idFromURL]);
    return singleNoteView;
  };

  NoteController.prototype.addSubmitListener = function(){
    document
      .getElementById("text-form")
      .addEventListener("submit", function(submitEvent){
        console.log(submitEvent.srcElement[0].value)
        submitEvent.preventDefault()
      });
  };

  exports.NoteController = NoteController;
})(this);
