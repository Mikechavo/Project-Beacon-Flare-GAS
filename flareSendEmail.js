function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var emailColumnIndex = 10; // column K email
  var icimsN = 8; // column I Req ID ICIMS
  var cName = 0; // column A Full Name with Hyperlink
  var dStale = 9; // column J days stale
  var subject = "[TEST]Stale Candidate reminder, please action"; // replace with your own subject
  var body = 
"<p>The purpose of this email is to remind you of this candidate and to please take action as soon as possible.</p>"+
"<p>Please help us continue to improve on the cleanliness of our requisitions.</p>"; // replace with your own message p is used to seperate the paragraphs
  
 for (var i = 1; i < data.length; i++) {
  var reqId = data[i][icimsN]; 
  var candidateName = data[i][cName];
  var daysstale = data[i][dStale];
  var emailAddress = data[i][emailColumnIndex];
  if (emailAddress !== "#N/A") {
    MailApp.sendEmail({
      to: emailAddress,
      subject: subject,
      htmlBody: "<p>Hi,<p>" + 
        candidateName + " has been considered a stale candidate for more than " + daysstale + " days on requisition number " + reqId +"." + body +
        "<p>" + 
          SpreadsheetApp.getActiveSheet().getRange(i+1,cName+1).getFormula() + 
        "</p>" +  "<p>Thank You</p>"
    });
  }
 }
}