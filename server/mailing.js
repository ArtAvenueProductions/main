const nodemailer = require('nodemailer');
const account = require('./accountInfo.js');

let transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 587,
  secure: false,
  auth: {
    user: account.user,
    pass: account.pass
  },
});

let mailOptions = {
  from: '"Kadi Tsang" <kadi@artavenue.global>',
  to: 'ansonaoao@gmail.com',
  subject: 'Hello',
  text: 'Hello World',
  html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js'
};

// transporter.sendMail(mailOptions, (err, options) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('Message sent: %s', info.messageId);
//   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
// })
module.exports = transporter;