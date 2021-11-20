function DeleteAllSheets() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheets = ss.getSheets();
    for (i = 0; i < sheets.length; i++) {
        switch(sheets[i].getSheetName()) {
            case "Instructions":
            case "Output":
            case "Tip Pool Rules":
            case "Example Day Tip Sheet":
            case "Tip Sheets ->":
            case "Lookup":
            break;
            default:
            ss.deleteSheet(sheets[i]);
        }
    }
}
