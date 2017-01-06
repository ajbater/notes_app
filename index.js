noteList = new NoteList();
noteController = new NoteController(noteList);
noteController.createNote("Hello 12423423auwhreihehdjkbsjfsfjhsgdfjhsgd4342");
noteController.getHtml();
noteController.makeNoteLinkShowFullNote();
noteController.addSubmitListener();
