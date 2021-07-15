// This function moves rows from one sheet to another
// Take the row with the active cell from the source sheet when the button is clicked
// Move to last open row of target sheet
function moveRows(){
    Logger.log("moveRows running");

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
            var targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Move Rows Target Sheet - Script");
            
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
