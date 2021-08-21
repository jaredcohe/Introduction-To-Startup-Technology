// Send gmail email with table
function sendInvoiceEmail() {
    var ui = SpreadsheetApp.getUi();
    var response = ui.alert('Send Email', 'Should we send the invoice email?', ui.ButtonSet.YES_NO);
    if (response == ui.Button.YES) {

        // Get all the data
        var wholesaleReportingFile = SpreadsheetApp.getActiveSpreadsheet();
        var invoiceSheetName = "Send Email - Script";
        var invoiceSheet = wholesaleReportingFile.getSheetByName(invoiceSheetName);
        var emailsToSendTo = "hi@opsmba.com"; // You can easily make this an input in the form or from the sheet
        var customer = invoiceSheet.getRange(4, 3).getValue();
        var invoiceDate = invoiceSheet.getRange(3, 3).getValue();
        var invoiceDateAsDate = new Date(invoiceDate);
        var invoiceMonth = invoiceDateAsDate.getMonth() + 1;
        var invoiceDay = invoiceDateAsDate.getDate();
        var invoiceYear = invoiceDateAsDate.getFullYear();
        var neatDate = invoiceMonth + "/" + invoiceDay + "/" + invoiceYear;
        var subject = "Invoice for " + customer + " on " + neatDate;
        var lastRow = invoiceSheet.getLastRow();
        var numberOfRows = lastRow - 10; // Subtract 10 because the table starts in row 10 and we want the number of rows of data
        var dataBody = invoiceSheet.getRange(11, 1, numberOfRows, 6).getValues();
        var rowsOfData = dataBody.length;
        var dataBodyHtml = "";

        // Top table with date and distributor
        dataBodyHtml+="<table style=\"border-collapse:collapse;text-align:center\" border=1 cellpadding=5>" +
            "<tr><td>Invoice Date / Pickup Date</td><td>" + neatDate + "</td></tr>" + 
            "<tr><td>Customer / Distributor</td><td>" + customer + "</td></tr></table><br /><br />"

        dataBodyHtml += "<table style=\"border-collapse:collapse;text-align:center\" border=1 cellpadding=5>" +
            "<th>Quantity</th><th>Brand</th><th>Package</th><th>Pickup Location</th><th>Unit Price</th><th>Total Price</th>";
        for(var i=0; i<rowsOfData-1; i++){
            var unitPrice = dataBody[i][4].toFixed(2);
            var totalPrice = dataBody[i][5].toFixed(2);
            dataBodyHtml+='<tr><td>'+dataBody[i][0]+'</td><td>'+dataBody[i][1]+'</td><td>'+dataBody[i][2]+'</td><td>'+dataBody[i][3]+'</td><td>$'+unitPrice+'</td><td>$'+totalPrice+'</td></tr>';
        }

        var totalTotalPrice = dataBody[rowsOfData-1][5].toFixed(2);
        dataBodyHtml+="<th>" + dataBody[rowsOfData-1][0] + "</th><th>" + dataBody[rowsOfData-1][1] + "</th><th>" + dataBody[rowsOfData-1][2] + "</th><th>" + dataBody[rowsOfData-1][3] + "</th><th>" + dataBody[rowsOfData-1][4] + "</th><th>$" + totalTotalPrice + "</th>";
        dataBodyHtml+='</table>';

        var messageObject = {
            to: emailsToSendTo,
            subject: subject,
            htmlBody: "Hey Jojo," +
            "<br /><br /> We need an invoice for the below. Thanks.<br /><br />" + 
            dataBodyHtml,
            name: "Threes Invoice Bot"
        };
    };

    MailApp.sendEmail(messageObject);
}
