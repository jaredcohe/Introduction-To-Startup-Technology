function sortByDate() {
  Logger.log('General.gs > sortByDate');
  var activeSheet = SpreadsheetApp.getActiveSheet();
  var lastRowOfData = activeSheet.getLastRow();
  var lastColumnOfData = activeSheet.getLastColumn();
  var firstRowOfData = 7;
  var sortColumnNumber = 6;
  var range = activeSheet.getRange(firstRowOfData, 1, lastRowOfData - firstRowOfData + 1, lastColumnOfData);
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
