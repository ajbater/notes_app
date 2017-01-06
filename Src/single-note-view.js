(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  };

SingleNoteView.prototype.returnSingleNoteHtml = function() {
  return "<div>" + this.note.showNoteText() + "</div>";
};

  exports.SingleNoteView = SingleNoteView;
})(this);
