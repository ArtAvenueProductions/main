const express = require('express');
const React = require('react');
const bodyParser = require('body-parser');
const transporter = require('./mailing.js');
const path = require('path');
const fs = require('fs');
// const https = require('https');
// const privateKey = fs.readFileSync(path.join(__dirname, '/sslcert/server.key'), 'utf8');
// const certificate = fs.readFileSync(path.join(__dirname, 'sslcert/server.cert'), 'utf8');

// const httpsCert = {key: privateKey, cert: certificate};

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../public'));

const mailPromise = (body) => {
  return new Promise((resolve, reject) => {
    let mailOptions = {
      from: '"Kadi Tsang" <kadi@artavenue.global>',
      to: 'kadi@artavenue.global, katusha@artavenue.global',
      subject: body.subject,
      text: body.content,
      html: `<p>from: ${body.name}</p><br>
             <p>sender email: ${body.email}</p><br>
             <p>Phone: ${body.phone}</p><br>
             <p>${body.content}</p>`
    };
    transporter.sendMail(mailOptions, (err, options) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log('Message sent: %s', options.messageId);
        resolve(options);
      }
    })
  });
}

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  })
})

app.get('/healthPath', (req, res) => {
  res.sendStatus(200);
})

app.post('/submitForm', (req, res) => {
  console.log(req.body);
  mailPromise(req.body).then((info) => {
    res.status(200).json(info);
  }).catch((err) => {
    res.status(404).json(err);
  })
})

// https.createServer(httpsCert, app).listen(3000, () => {
//   console.log('Listening to port 3000');
// })

app.listen(3000, () => {
  console.log('Listening to port 3000');
})