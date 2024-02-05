function generateEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Assuming the emails should start from row 2 (skip header)
  var startRow = 2;
  
  // Assuming the emails should be placed in the first column (column A)
  var emailColumn = 1;

  // Number of emails to generate
  var numEmails = 523;

  for (var i = 0; i < numEmails; i++) {
    var email = "test" + (i + 1) + "@test.com";
    
    // Write the email to the sheet
    sheet.getRange(startRow + i, emailColumn).setValue(email);
  }
}
