const db = require('../models')
const transporter = require('../nodemailer/')
module.exports = {
  addEmployee: function (req, res) {
    const { name, lastName, email, password, restaurantName, restaurantId } = req.body
    console.log('////////////////')
    console.log(req.body)
    console.log('////////////////')
    db.Employees.findOne({ email: email }).then(employee => {
      console.log(employee)
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
          console.log('/////////////')
          console.log(employee)
          console.log('/////////////')
          var mailOptions = {
            from: 'uoautomailer@gmail.com',
            to: employee.email,
            subject: 'Your accout information',
            text: 'Hey, ' + employee.firstName + '. Your Tannin account for ' + employee.restaurantName + 'was successfully created and ready to use. Your username is ' + employee.email + ' and password is ' +
                         password + '.  Please use this link to login  http://tannin.herokuapp.com/. Thanks you, ' + employee.restaurantName
          }

          transporter.sendMail(mailOptions, function (error, info) {
            console.log(mailOptions)
            if (error) {
              console.log(error)
            } else {
              console.log('Email sent: ' + info.response)
            }
          })

          db.Restaurants.findOneAndUpdate({ _id: employee.restaurantId }, { $push: { Employees: employee._id } }, { new: true }).then(restaurant => {
            // console.log(d);
            res.json({ employee, restaurant })
          })
        })
      } else {
        res.json('Employee already exists')
      }
    })
  },
  removeEmployee: function (req, res) {
    console.log(req.body)
    const { id, restaurantId } = req.body
    console.log(restaurantId)
    // first, find User to get restartnt id,
    // next, delete user
    // then, find Restartn by id we grabbed in step one and update employees array to remove that employee

    db.Restaurants.update({ _id: restaurantId }, { $pull: { Employees: id } }).then(restaurant => {
      console.log(restaurant)
      // res.json(restaurant);
      db.Employees.deleteOne({ _id: id }).then(emp => {
        res.json(emp)
      })
    })
    // db.Restaurants.findOneAndUpdate({_id: restaurantId},{$pull: {Employees:id}},function(res) {
    //     console.log(res);
    //     // res.json(res);

    // }
    // )x
    // console.log(data);
    // res.json(data)
  }
}
