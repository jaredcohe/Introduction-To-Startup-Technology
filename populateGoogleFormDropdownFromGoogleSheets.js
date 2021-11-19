// This script runs on a time trigger to once a day pull
// a range of data from Google Sheets and use that to populate
// the options in a dropdown in Google Forms
// Youtube video with more walk through: https://youtu.be/ilSebVz_Nfo

function addItemsToBeerNames() {

    // Get beer names list from Google Sheet
    var ss = SpreadsheetApp.openById("Google Sheets File ID such as 1szcOqJSo6TnTesCoJRQUqHhftKZ_sscVHtDgoN8sdioj");
    var sheet = ss.getSheetByName("Sheet Name");
    var sheetLastRow = sheet.getLastRow();
    var beerNames = sheet.getRange(3, 1, sheetLastRow-2, 1).getValues().sort();

    // Open a form by ID and add a new list item to each question
    var form = FormApp.openById('Google Forms File ID such as 3sdfas53So6TnTesCoJRQUqHhftKZ_sscVHtDgoN8sdioj');
    var item1 = form.getItemById("1634782189");
    item1.asListItem().setChoiceValues(beerNames);
    var item2 = form.getItemById("1271108612");
    item2.asListItem().setChoiceValues(beerNames);
    var item3 = form.getItemById("151943629");
    item3.asListItem().setChoiceValues(beerNames);
    var item4 = form.getItemById("2051183816");
    item4.asListItem().setChoiceValues(beerNames);
    var item5 = form.getItemById("156516518");
    item5.asListItem().setChoiceValues(beerNames);
}
