const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

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

const app = express();
app.use(bodyParser.json());

// Example route for creating a new user
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Define other routes for CRUD operations

app.listen(3000, () => {
  console.log(`Server is running on port ${process.env.DATABASE_PORT}`);
});