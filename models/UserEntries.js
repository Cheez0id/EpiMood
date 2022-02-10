//To connect to the database, you must create a Sequelize instance. 
const { Model, DataTypes } = require ("sequelize");

const sequelize = require ("../config/connection")

class UserEntries extends Model {}

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

module.exports = UserEntries;
