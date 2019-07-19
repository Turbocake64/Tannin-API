const db = require('../models')
const transporter = require('../nodemailer/')

module.exports = {
  addEmployee: function (req, res) {
    const { name, lastName, email, password, restaurantName, restaurantId } = req.body
    db.Employees.findOne({ email: email }).then(employee => {
      if (!employee) {
        db.Employees.create({
          firstName: name,
          lastName: lastName,
          email: email,
          password: password,
          restaurantName: restaurantName,
          restaurantId: restaurantId,
          isAdmin: false
        }).then(employee => {
          let mailOptions = {
            from: 'uoautomailer@gmail.com',
            to: employee.email,
            subject: 'Your Tannin account information for ' + employee.restaurantName,
            text: 'Hello, ' + employee.firstName + '. Your Tannin account for ' + employee.restaurantName +
              'was successfully created and is ready to use. Your username is ' + employee.email + ' and password is '
              + password + '. Please use this link to login http://tannin.com/. Thank you, ' + employee.restaurantName
          }
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error)
            } else {
              console.log('Email sent: ' + info.response)
            }
          })
          db.Restaurants.findOneAndUpdate({ _id: employee.restaurantId }, { $push: { Employees: employee._id } }, { new: true }).then(restaurant => {
            res.json({ employee, restaurant })
          })
        })
      } else {
        res.json('Employee already exists')
      }
    })
  },

  removeEmployee: function (req, res) {
    const { id, restaurantId } = req.body
    db.Restaurants.update({ _id: restaurantId }, { $pull: { Employees: id } }).then(restaurant => {
      db.Employees.deleteOne({ _id: id }).then(emp => {
        res.json(emp)
      })
    })
  }
}
