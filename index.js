var _ = require("lodash");

module.exports = function(str) {
  var chars = "[a-zA-Z0-9\\!\\#\\$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\|\\}\\~\\@\\.]+";
  var emailRegExp = new RegExp(chars + "?\@" + chars + "?\\." + chars, "g");
  var emails = str.match(emailRegExp);
  return _.chain(emails)
    .map(function(email) { return email.toLowerCase(); })
    .filter(function(email) { return /.\@./.test(email) && !/\.\./.test(email); })
    .uniq()
    .value();
};
