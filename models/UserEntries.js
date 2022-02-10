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
    }, 
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    mood: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT,
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