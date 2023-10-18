const nodemailer = require('nodemailer');
require('dotenv').config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_ID,
    pass: process.env.MAIL_APP_PASS,
  }
})
transporter.on('error', (err) => console.log(`There was an error:\n`, err));

module.exports = transporter;
