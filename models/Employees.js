const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
mongoose.promise = Promise

const EmployeeSchema = new Schema({
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
    next()
  } else {
    this.password = this.hashPassword(this.password)
    next()
  }
})

const Employees = mongoose.model('Employees', EmployeeSchema)

module.exports = Employees
