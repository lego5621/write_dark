var save = function (context) {
  var ui = $.summernote.ui;

  // create button
  var button = ui.button({
    contents: '<i/> Save',
    tooltip: 'Save shange',
    click: function () {
      // invoke insertText method with 'hello' on editor module.
      context.invoke('editor.insertText', 'hello');
    }
  });

  return button.render();   // return button as jquery object
}

$(document).ready(function() {
  $('#summernote').summernote({height: 600,toolbar: [
    ['style', ['style']],
    ['font', ['bold', 'underline','strikethrough', 'superscript', 'subscript' ]],
    ['para', ['ul', 'ol', 'paragraph']],
    ['table', ['table']],
    ['insert', ['link', 'picture']],
    ['clear'],
    ['mybutton', ['save']]
  ],
  buttons: {
    save: save
  }});
});

