// Require mongoose

var mongoose = require('mongoose')

var Schema = mongoose.Schema

var MasterWineListSchema = new Schema({
  name: {
    type: String
  },
  pronunciation: {
    type: String
  },
  summary: {
    type: String
  },
  producer: {
    type: String
  },
  varietal: {
    type: Array
  },
  color: {
    type: String
  },
  region: {
    type: String
  },
  primaryFlavors: {
    type: Array
  },
  sweetness: {
    type: String
  },
  body: {
    type: String
  },
  tannin: {
    type: String
  },
  acidity: {
    type: String
  },
  alcohol: {
    type: String
  },
  temp: {
    type: String
  },
  glassType: {
    type: String
  },
  decant: {
    type: String
  },
  ageability: {
    type: String
  },
  pairings: {
    type: Array
  },
  winery: {
    type: String
  },
  history: {
    type: String
  }

})

var MasterWineList = mongoose.model('MasterWineList', MasterWineListSchema)

module.exports = MasterWineList
