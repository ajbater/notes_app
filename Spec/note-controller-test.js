function testNoteControllerCanBeInstantiated(){
  var noteController = new NoteController();
  assert.isTrue(noteController, "testNoteControllerCanBeInstantiated");
};

function testInnerHtml(){
  function NoteListViewDouble() {};
  NoteListViewDouble.prototype = {
    html: function() {
      return "<ul><li><div>Favourite food: pesto</div></li></ul>"
    }
  };
  var noteController = new NoteController();
  var noteListViewDouble = new NoteListViewDouble();
  noteController.createNote("Favourite food: pesto");
  var noteListModel = new NoteList();
  var html = document.getElementById("app");
  noteController.getHtml();
  var noteListView = noteListViewDouble;
  assert.isTrue(noteController.getHtml()=== "<ul><li><div>Favourite food: pesto</div></li></ul>", "testInnerHtml")
};
testNoteControllerCanBeInstantiated();
testInnerHtml();