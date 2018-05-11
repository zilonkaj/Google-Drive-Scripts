// Joseph Zilonka
// Change selection's font to whatever font type & size you like.
// Adapted from https://productforums.google.com/forum/#!msg/docs/bYYh34tuRPM/bIPobIVtBgAJ

// Runs when document opens. Creates Macros menu in top toolbar, submenu Change Font, with items Arial & Courier
function onOpen () {
  var ui;
  ui=DocumentApp.getUi();
  ui.createMenu('Macros')
       .addSubMenu(ui.createMenu('Change Font')
       .addItem('Arial', 'setArial')
// extra parenthesis closes sub menu
       .addItem('Courier', 'setCourier'))
      .addToUi();  
}


function setCourier(){
 ChangeFont("Courier New");
}

function setArial(){
 ChangeFont("Arial");
}

function ChangeFont(font) {
 var selection = DocumentApp.getActiveDocument().getSelection();
 if (selection) {
   var elements = selection.getRangeElements();
   for (var i = 0; i < elements.length; i++) {
     var element = elements[i];

     // Only modify elements that can be edited as text; skip images and other non-text elements.
     if (element.getElement().editAsText) {
       var text = element.getElement().editAsText();
       
       // offset params only change highlighted text
         text.setFontFamily(element.getStartOffset(), element.getEndOffsetInclusive(), font);
         text.setFontSize(element.getStartOffset(), element.getEndOffsetInclusive(), 11);
       }
     }
   }
 }
