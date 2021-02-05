//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/user');
const Product = require('./models/product');
const Cart = require('./models/cart');

//associations could go here!

const syncAndSeed =  async()=> {
  await db.sync({force: true})
  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
])

const products = await Promise.all([
  Product.create({name: 'coffee1'}),
  Product.create({name: 'coffee2'})
])
  
const [cody, murphy] = users;
const [coffe1, coffee2] = products;

  return {
    users: {
      cody,
      murphy
    },
    products: {
      coffe1,
      coffee2
    }
  };
}

module.exports = {
  db,
  syncAndSeed,
  models: {
    User,
    Product
  }
}
