// Require mongoose

var mongoose = require('mongoose')
var Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
mongoose.promise = Promise

var EmployeeSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  isAdmin: {
    type: Boolean
  },
  password: {
    type: String
  },
  scores: [{
    wine: String,
    score: String
  }],

  restaurantName: {
    type: String
  },

  restaurantId: {
    type: String
  }
})

EmployeeSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}
EmployeeSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('=======NO PASSWORD PROVIDED=======')
    next()
  } else {
    this.password = this.hashPassword(this.password)
    next()
  }
})

var Employees = mongoose.model('Employees', EmployeeSchema)

module.exports = Employees
