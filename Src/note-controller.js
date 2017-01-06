(function(exports) {

  function NoteController(){
    this.noteList = new NoteList();
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
    window.addEventListener("hashchange", findNoteFromNoteList);
  };

  // NoteController.prototype.showNoteForCurrentPage = function () {
  //   showNote(getNoteFromURL());
  // };

   NoteController.prototype.getNoteIdFromURL = function(){
    return window.location.hash.split("#")[1];
  };

  NoteController.prototype.findNoteFromNoteList = function(){
    var idFromURL = parseInt(noteController.getNoteIdFromURL());
    var singleNoteView = new SingleNoteView(noteList._notes[0]);
  };

  exports.NoteController = NoteController;
})(this);
