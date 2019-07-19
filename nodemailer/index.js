const nodemailer = require('nodemailer')

// TODO: This auth info should get moved to a .env file
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'uoautomailer@gmail.com',
    pass: 'Project2UO'
  }
})

module.exports = transporter
