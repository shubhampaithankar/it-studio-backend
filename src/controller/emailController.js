const transporter = require('../config/mailer')

const sendEmail = (req, res) => {
  try {

    const { data } = req.body

    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: 'Data Assignment',
      text: JSON.stringify(data, null, 2),
    }
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error)
        res.status(500).json({ error: 'Error sending email' })
      } else {
        console.log('Email sent:', info.response)
        res.json({ message: 'Email sent successfully' })
      }
    })
  } catch (error) {
    res.status(500).json({ error: 'Error sending email', message: error.message })
  }
}

module.exports = { sendEmail }
