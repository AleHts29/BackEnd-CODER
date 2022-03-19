const Sequelize = require("sequelize");

const DataTypes = Sequelize.DataTypes;

module.exports = (sequialize, type) => {
  return sequialize.define("user", {
    id: {
      type: DataTypes.TINYINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      require: true,
    },
    email: {
      type: DataTypes.STRING,
      require: true,
    },
    password: {
      type: DataTypes.STRING,
      require: true,
    },
  });
};
