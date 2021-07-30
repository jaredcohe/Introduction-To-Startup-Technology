// The onOpen function runs when anyone opens the spreadsheet file
function onOpen() {
  Logger.log('General.gs > onOpen');
  
  // Get the active spreadsheet to run the script in
  var spreadsheet = SpreadsheetApp.getActive();
  
  // Create an array of the menu items I want to add to the Google Sheet file
  var menuItems = [
    {name: 'Sort by Date', functionName: 'sortByDate'},
    {name: 'Move Row', functionName: 'moveRows'},
    {name: 'Do my laundry', functionName: 'sortByDate'}
  ];
  
  // Add menu to Google Sheet file
  spreadsheet.addMenu("Jared's Custom Scripts", menuItems);
};
