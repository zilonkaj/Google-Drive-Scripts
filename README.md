# Google-Drive-Scripts
Google Drive scripts I created to learn JavaScript and fix some annoyances I had with Google Docs. If you want to use any of these, feel free to download them, and if you'd like to submit changes or improvements, feel free to do so.

# Running the scripts
Each of my scripts only works with one Google Drive application due to how Google has built their code scripting editor (this is why one file has a DocumentApp object while the other has a SlidesApp object). There is probably a way to make it work with multiple applications, but for my purposes I only configured it to work with the app I was using it with.

To be able to use this on your Google Drive files, open the Google Drive file you wish to add the script to, and go to Tools -> Script Editor. This will open the Google Scripts interface with a file called Code.gs that is linked to the Google Drive document you were working on before. To use my code, copy-paste it into your Code.gs file, and from here you have a couple of options on how to actually run the code on your document. 

I used the "Test as add-on" option in the Run menu. After clicking "Test as add-on", I selected "Installed and Enabled" in the Installation Config dropdown, and I then selected my Google Drive document with the "Select Doc" button. Click save, then select the test from above and hit Test. This should open a copy of the document with the script active under the Macros submenu (if Macros doesn't appear, check the Add-ons submenu. Sometimes it puts it there).

There is also the Publish menu, however I did not try using that since it seemed like it wanted to deploy my scripts to the extension marketplace.

# Font Changer
Changes the selected text's font to a specified font and specified size using submenu buttons. This is basicially the same thing as using the default font menu, however I created seperate submenu options for the fonts I wanted so I wouldn't have to keep scrolling through the font menu.

Only works with Google Docs files.

# Straight Lines
This one was a bit more practical than Font Changer. When drawing Line objects in Google Slides, the lines can sometimes be <i>slightly</i> not so straight, which is super annoying since I like perfectly straight lines. This script fixes that: select the line in question, choose if it's a horizontal or vertical line, and watch as that 89.567 degree line turns into a straight 90 degree line. Wonderful!

Only works with Google Slides files.
