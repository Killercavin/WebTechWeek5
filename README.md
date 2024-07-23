# Database Managment with MySQL and Node.js

## Steps 

### Installation

#### NodeJS & MySQL
- Make sure you have NodeJS and MySQL installed if ! head to their official websites using the links below
- NodeJS visit [NodeJS](https://nodejs.org) for the guide to download & install
- MySQL visit [MySQL](https://mysql.com) for download and install

#### Clone the repo
- Clone this repo in your desired directory
```bash 
git clone https://github.com/Killercavin/WebTechWeek5.git
```

#### Install required packages
- Change directory to the project repo directory
```sh 
cd WebTechWeek5 
```
- While in the repo directory install the following packages and create your `.env` file to hold your variables
```sh
npm install sequelize mysql2 
npm install express
npm install dotenv
```
- Set up & initialize Sequelize in the project
```sh
npx sequelize-cli init
```
- Configure sequelize and update the `config/config.json`
```json
{
  "development": {
    "username": "your_username",
    "password": "your_password",
    "database": "expense_manager",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "your_username",
    "password": "your_password",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "your_username",
    "password": "your_password",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Create models and migrations
```sh
npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string,created_at:date,updated_at:date
npx sequelize-cli model:generate --name Expense --attributes user_id:integer,category_id:integer,amount:float,date:date,description:string,created_at:date,updated_at:date
npx sequelize-cli model:generate --name Category --attributes user_id:integer,category_name:string,created_at:date,updated_at:date
npx sequelize-cli model:generate --name PaymentMethod --attributes user_id:integer,payment_method_name:string,created_at:date,updated_at:date
npx sequelize-cli model:generate --name Budget --attributes user_id:integer,category_id:integer,amount:float,start_date:date,end_date:date,created_at:date,updated_at:date
```
- Update each model and migrations
- Make migratons
```sh
npx sequelize-cli db:migrate
```
- Sync models
```javascript
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
```

### NOTE
- Disclaimer! This repo has errors therefore didn't run successfully