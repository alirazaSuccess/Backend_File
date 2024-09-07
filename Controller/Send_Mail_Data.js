const expressHandler = require('express-async-handler');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_EMAIL,
  port: process.env.SMTP_PORT == 465,
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

console.log(process.env.SMTP_EMAIL)

const Send_Mail_Data = expressHandler(async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: process.env.SMTP_MAIL,
    replayTo: email,
    subject: subject,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Message:</strong> ${message}</p>`
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Error sending email:', err);
      return res.status(500).send('Failed to send email');
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Data is successfully sent');
  });

  console.log(name, email, phone, subject, message);
});
module.exports = { Send_Mail_Data };
