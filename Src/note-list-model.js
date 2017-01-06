(function(exports) {
  function NoteList() {
    this._notes = new Array;
  };

NoteList.prototype.returnList = function(){
  return this._notes;
}

NoteList.prototype.createNote = function(text) {
  note = new Note(text);
  this._notes.push(note);
}

  exports.NoteList = NoteList;
})(this);
