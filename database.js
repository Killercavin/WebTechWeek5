require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: 'mysql'
});

const User = require('./models/user')(sequelize, DataTypes);
const Expense = require('./models/expense')(sequelize, DataTypes);
const Category = require('./models/category')(sequelize, DataTypes);
const PaymentMethod = require('./models/payment_method')(sequelize, DataTypes);
const Budget = require('./models/budget')(sequelize, DataTypes);

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });