module.exports = (sequialize, type) => {
  return sequialize.define("user", {
    id: {
      type: type.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: type.STRING,
    email: type.STRING,
    password: type.STRING,
  });
};
