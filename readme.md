# Emails in String ✉️

Extract unique email addresses out of just about any string!

### How to use

```js
import emailsInString from "emails-in-string";

const uniqueEmails = emailsInString(`user@domain.com,
  "User at Domain" <user@domain.com>, user2@domain.com,
  user+something@domain.com`);
// ["user@domain.com", "user2@domain.com", "user+something@domain.com" ]
```

Enjoy!