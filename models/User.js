//To connect to the database, you must create a Sequelize instance. 
const { Model, DataTypes } = require ("sequelize");

const sequelize = require ("../config/connection")

class User extends Model {}

User.init(
  {
    
  }
)