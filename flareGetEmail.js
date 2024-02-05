function addSourcerRecruiterEmail() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();
  var lastColumn = sheet.getLastColumn();
  var headerRow = 1;
  
  // add new column after column H
  var newColumn = lastColumn + 1;
  sheet.insertColumnAfter(lastColumn);
  
  // set header for new column
  sheet.getRange(headerRow, newColumn).setValue("Sourcer/Recruiter Email");
  
  // loop through each row in sheet and set formula for new column
  for (var i = 1; i < values.length; i++) {
    var row = i + 1;
    var hValue = values[i][7]; // value in column H
    var gValue = values[i][6]; // value in column G
    var fValue = values[i][5]; // value in column F
    
    // set formula for new column based on column H, G, and F values
    var formula = '=iferror(index(active_sourcer_emails!B:B, match("' + hValue + '", active_sourcer_emails!A:A, 0)), iferror(index(active_sourcer_emails!B:B, match("' + gValue + '", active_sourcer_emails!A:A, 0)), index(active_sourcer_emails!B:B, match("' + fValue + '", active_sourcer_emails!A:A, 0))))';
    
    sheet.getRange(row, newColumn).setFormula(formula);
  }
}