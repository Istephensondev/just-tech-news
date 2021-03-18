// / import the sequelize constructor from library
const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize;
// heroku connection
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    // create connection to our database, pass in your MySQL info
    sequelize = new Sequelize('just_tech_news_db', 'root', 'your_new_password', {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}
module.exports = sequelize;