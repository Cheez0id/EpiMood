//To connect to the database, you must create a Sequelize instance. 
const { Model, DataTypes } = require ("sequelize");

//connect to database
const sequelize = require ("../config/connection")

//this is a subclass of model
class UserEntries extends Model {}

//subclass created table with rows
UserEntries.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    }, 
    mood: {
      type: DataTypes.INTEGER,
      allowNull: false,
      max: 6, 
    },
    episode: {
      type: DataTypes.BOOLEAN,  
    },
    text: {
      type: DataTypes.TEXT,
    },
    makePrivate: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "UserEntries",
  }
)

//export the subclass/model
module.exports = UserEntries;
