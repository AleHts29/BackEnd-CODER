const { db } = require("../../db");
var Sequelize = require("sequelize");
var DataTypes = Sequelize.DataTypes;
const S = Sequelize;

const User = db.define(
  "user",
  {
    username: {
      //   type: DataTypes.TEXT,
      //   allowNull: false,
      //   unique: true,
      type: DataTypes.TEXT,
      require: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("user", "moderador"),
      defaultValue: "user",
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = {
  User,
};
