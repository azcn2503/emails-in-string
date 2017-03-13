module.exports = function(str) {
  var chars = "[a-zA-Z0-9\\!\\#\\$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\|\\}\\~\\\.]+";
  var emailRegExp = new RegExp(chars + "?\@" + chars + "?\\." + chars, "g");
  var emails = str.match(emailRegExp);
  var uniqueEmails = {};
  for (var i = 0; i < emails.length; i += 1) {
    if (/\.\./.test(emails[i])) {
      emails.pop(i);
      continue;
    }
    uniqueEmails[emails[i].toLowerCase()] = true;
  }
  emails = [];
  for (var i in uniqueEmails) {
    if (!uniqueEmails.hasOwnProperty(i)) {
      continue;
    }
    emails.push(i);
  }
  return emails;
};
