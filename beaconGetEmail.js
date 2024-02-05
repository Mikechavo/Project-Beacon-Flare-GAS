function addNewColumn() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var lastColumn = sheet.getLastColumn();
  var columnDIndex = sheet.getRange("B1").getColumn();
  
  sheet.insertColumnAfter(columnDIndex);
  var newColumnIndex = columnDIndex + 1;
  var newColumnRange = sheet.getRange(1, newColumnIndex);
  newColumnRange.setValue("Sourcer Email"); // set label for the new column
  var newColumnRange = sheet.getRange(2, newColumnIndex, sheet.getLastRow() - 1, 1);
  newColumnRange.setFormula("=index(active_sourcer_emails!B:B,match(B2,active_sourcer_emails!A:A,0))"); // replace with your formula
  
  Browser.msgBox("A new column has been added to the right of column B and a formula has been added to all cells in the new column containing the Sourcer's Email.");
}
