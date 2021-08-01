// This function moves rows from one sheet to another
// Take the row with the active cell from the source sheet when the button is clicked
// Move to last open row of target sheet
// Code in github: https://github.com/jaredcohe/Introduction-To-Startup-Technology/blob/main/moveRows.js
function moveRows(){
    Logger.log("moveRows.gs > moveRows");

    // Confirmation check
    var ui = SpreadsheetApp.getUi();
    var response = ui.alert("Move Row", "Should we move the selected row to the target sheet?", ui.ButtonSet.YES_NO);
    if (response == ui.Button.YES) {

        // Start: Get the data to move

            // Get the current sheet object
            var activeSheet = SpreadsheetApp.getActiveSheet();
            
            // Get the number of columns
            var lastColumnOfDataInActiveSheet = activeSheet.getLastColumn();
            Logger.log("lastColumnOfDataInActiveSheet: " + lastColumnOfDataInActiveSheet);
    
            // Get the number of the row to move
            var rowToMove = activeSheet.getActiveRange().getRow();
            Logger.log("rowToMove: " + rowToMove);
    
            // Get the range to move
            var rangeToCopyFrom = activeSheet.getRange(rowToMove, 1, 1, lastColumnOfDataInActiveSheet);
        
        // End: Get the data to move

        // Start: Copy and paste the data
        
            // Get the target sheet
            var targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Script Examples - Move Rows Target Sheet");
            
            // Get last row in target sheet
            var lastRowInTargetSheet = targetSheet.getLastRow();
            Logger.log("lastRowInTargetSheet: " + lastRowInTargetSheet);
            
            // Get range to paste to
            var rangeToPasteTo = targetSheet.getRange(lastRowInTargetSheet + 1, 1, 1, lastColumnOfDataInActiveSheet);
            
            // Copy and paste the data
            rangeToCopyFrom.copyTo(rangeToPasteTo, {contentsOnly:true});
        
        // End: Copy and paste the data

        // Clear the source data
        rangeToCopyFrom.clearContent();

        // Sort the source sheet
        var lastRowOfDataInActiveSheet = activeSheet.getLastRow();
        var rangeToSort = activeSheet.getRange(7, 1, lastRowOfDataInActiveSheet - 6, lastColumnOfDataInActiveSheet);
        rangeToSort.sort({column: 1, ascending: true});

        // Pop up box tells you it's done
        ui.alert("Done. Rows moved.");

    }; // End: Confirmation check

}; // End: moveRows

// This function moves rows between two sheets in two different files
// Take the row with the active cell from the source sheet when the button is clicked
// Move to last open row of target sheet in another file
// Code in github: https://github.com/jaredcohe/Introduction-To-Startup-Technology/blob/main/moveRows.js
function moveRowsToAnotherFile() {
    Logger.log("moveRows.gs > moveRowsToAnotherFile");
    
    var activeSheet = SpreadsheetApp.getActiveSheet();
    var rowNumberToMove = activeSheet.getActiveRange().getRow();
    var activeSheetLastColumn = activeSheet.getLastColumn();
    var rangeToMove = activeSheet.getRange(rowNumberToMove, 1, 1, activeSheetLastColumn).getValues();

    var targetFileId = "1ESqEZCpu3ojd1vrJERU3IaNKSDQGd4GO9LRB5j8O5Bk";
    var targetFile = SpreadsheetApp.openById(targetFileId);
    var targetSheet = targetFile.getSheetByName("TargetSheet");
    var targetSheetLastRow = targetSheet.getLastRow();
    var targetRange = targetSheet.getRange(targetSheetLastRow + 1, 1, 1, activeSheetLastColumn);
    targetRange.setValues(rangeToMove);
}
