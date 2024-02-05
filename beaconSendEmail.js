function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var emailColumnIndex = 2; // column C email
  var sName = 1; // column B Assigned To
  var cName = 0; // column A Full Name
  var hLink = 3; // column D Contact Profile URL
  var subject = "Your candidate is open to new opportunities, please action"; // replace with your own subject
  var body = 
"<p>We've identified that candidates who are engaged within 48 hours of becoming 'open to new opportunities' are more likely to engage with us, and become applicants. The longer the window between when they become 'open to new opportunities' and when we engage, the more risk there is for the candidate to withdraw from process.</p>" +
"<p>**Please do your best to engage this candidate right away, but use your discretion and don't engage if it doesn't make sense to engage.</p>"+
"<p>Our recommendation is to acknowledge that you saw that they became 'open to new opportunities' on LinkedIn, and that we'd love to explore their interests further.</p>" +
"<p>Thanks,</p>"; // replace with your own message p is used to seperate the paragraphs
  
  for (var i = 1; i < data.length; i++) {
    var sourcerName = data[i][sName];
    var candidateName = data[i][cName];
    var hyperLink = data[i][hLink];
    var emailAddress = data[i][emailColumnIndex];
    if (emailAddress) {
      MailApp.sendEmail({to: emailAddress,
      subject: subject,
      htmlBody: "<p>Hi " + sourcerName + ",<p>" +
      candidateName + " " + hyperLink + " has recently become 'open to new opportunities' on LinkedIn and you're assigned to the candidate." + body  
      });
    }
  }
}
