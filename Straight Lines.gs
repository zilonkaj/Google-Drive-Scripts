// Joseph Zilonka
// Straighten lines on Google Docs (horizontal or vertical)
// Adapted from https://productforums.google.com/forum/#!msg/docs/bYYh34tuRPM/bIPobIVtBgAJ & https://developers.google.com/apps-script/reference/slides/line

// Create Macros menu in top toolbar, submenu Straight Line, with items Horizontal & Vertical
function onOpen () {
  var ui;
  ui=SlidesApp.getUi();
  ui.createMenu('Macros')
       .addSubMenu(ui.createMenu('Straight Line')
       .addItem('Horizontal', 'setHorizontal')

// extra parenthesis closes sub menu
       .addItem('Vertical', 'setVertical'))
      .addToUi();  
}

function setHorizontal(){
 ChangeRotation('H');
}

function setVertical(){
 ChangeRotation('V');
}

function ChangeRotation(angle) {
 var selection = SlidesApp.getActivePresentation().getSelection();
 
  if (selection) {
   var elements = selection.getPageElementRange().getPageElements();
   // getPageElements returns array, so for loop extracts each PageElement from the array
    for (var i = 0; i < elements.length; i++) {
     // return as Line obj
     var element = elements[i].asLine();
     
     var point = element.getStart();
     var x = point.getX();
     var y = point.getY(); 

     var width = element.getWidth();
     var height = element.getHeight();
     
// to create horizontal line, set end points to y of start point. to put line back to original size,
// setWidth restores the original width
     if (angle == 'H')
     {
       element.setEnd(y, y);
       element.setWidth(width);
     }
// same process as above except with x and height     
     else
     {  
       element.setEnd(x, x);
       element.setHeight(height);
     }
   }
  }
} 
