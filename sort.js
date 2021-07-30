function sortByDate() {
  Logger.log('General.gs > sortByDate');
  
  // Get the sheet to sort
  var activeSheet = SpreadsheetApp.getActiveSheet();
  
  // Get the number of the last row with data to be the last row of the range to sort
  var lastRowOfData = activeSheet.getLastRow();
  
  // Get the number of the last column with data to be the last column of the range to sort
  var lastColumnOfData = activeSheet.getLastColumn();
  
  // Give the first row of data to start sorting in
  var firstRowOfData = 7;
  
  // Give the column number to use as the sorting basis
  var sortColumnNumber = 6;
  
  // Set the range to sort
  var range = activeSheet.getRange(firstRowOfData, 1, lastRowOfData - firstRowOfData + 1, lastColumnOfData);
  
  // Sort!
  range.sort({column: sortColumnNumber, ascending: true});
};

function sortByCount() {
  Logger.log('General.gs > sortByCount');
  var activeSheet = SpreadsheetApp.getActiveSheet();
  var lastRowOfData = activeSheet.getLastRow();
  var lastColumnOfData = activeSheet.getLastColumn();
  var firstRowOfData = 7;
  var sortColumnNumber = 6;
  var range = activeSheet.getRange(firstRowOfData, 1, lastRowOfData - firstRowOfData + 1, lastColumnOfData);
  range.sort({column: sortColumnNumber, ascending: false});
};
