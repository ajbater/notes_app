function testNoteControllerCanBeInstantiated(){
  var noteController = new NoteController();
  assert.isTrue(noteController, "testNoteControllerCanBeInstantiated");
};

// function testInnerHtml(){
//   function NoteListViewDouble() {};
//   NoteListViewDouble.prototype = {
//     returnsHtmlList: function() {
//       return "<ul><li><div>Favourite food: pesto</div></li></ul>"
//     }
//   };
//   var noteController = new NoteController();
//   var noteListViewDouble = new NoteListViewDouble();
//   noteController.noteListView = noteListViewDouble;
//   noteController.getHtml();
//   element = document.getElementById('app')
//   assert.isTrue(element.innerHTML === "<ul><li><div>Favourite food: pesto</div></li></ul>", "testInnerHtml")
// };

testNoteControllerCanBeInstantiated();
// testInnerHtml();
