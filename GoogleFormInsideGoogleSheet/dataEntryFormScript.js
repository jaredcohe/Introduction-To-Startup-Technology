function showDataEntryForm(e) {
  Logger.log('showDataEntryForm');
  
  var html = HtmlService.createHtmlOutputFromFile('Data Entry Form Template')
      .setTitle('Data Entry Form')
      .setWidth(300);
      
  SpreadsheetApp.getUi()
      .showSidebar(html);
};

function onSubmitForm(data) {
  var ui = SpreadsheetApp.getUi();
  ui.alert('Form submitted');
  Logger.log(data);
  
  var file = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = file.getSheetByName("Data Entry - Embedded Form");
  var lastRow = sheet.getLastRow();
  var today = new Date();
  sheet.getRange(lastRow + 1, 1, 1, 6).setValues([[data["itemId"], data["category"], data["package"], data["price"], data["count"], today]]);
};
