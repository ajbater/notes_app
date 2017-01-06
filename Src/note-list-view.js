(function(exports) {
  function NoteListView(noteListModel) {
    this.noteListModel = noteListModel;
  }

  NoteListView.prototype.getListOfNotes = function() {
    return this.listOfNotes;
  };

  NoteListView.prototype.returnsHtmlList = function() {
    var output = "<ul>";
    this.noteListModel._notes.forEach(function(note) {
      output += "<li><a href='#" + note.id + "'><div>" + note.noteText.slice(0,20) + "</div></a></li>";
    })
    return output + "</ul>";
  }
  exports.NoteListView = NoteListView;
})(this);
