const Sequelize = require('sequelize')
const { STRING, FLOAT, INTEGER } = Sequelize;
const db = require('../db')

//We can rename the table(model) I don't really care what it is called :)
const Product = db.define('product', {
  name: {
    type: STRING,
    unique: true,
    allowNull: false
  },
  description: {
    type: STRING,
    allowNull: false,
    defaultValue: 'coffee'
  },
  //I dont like images but if someone does feel free to put in a nice default image :)
  imageURL: {
    type: STRING,
    defaultValue: null
  },
  // DECIMAL seems to be more popular on the internet, not sure if it matters 
  //FLOAT(5, 2) so the 2 means 2 decimal places 5 might mean 99,999 is as large as we can go not sure...,
  price: {
    type: FLOAT(5, 2),
    defaultValue: 1.51,
    allowNull: false
  },
  //not sure if the validate is really necessary but why not
  quantity: {
    type: INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      min: 0
    }
  }
})

module.exports = Product

