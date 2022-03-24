module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comment", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      allowEmpty: false,
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false,
      allowEmpty: false
    },
    book_id: {
      type: Sequelize.STRING,
      allowNull: false,
      allowEmpty: false,
    },
    comment: {
      type: Sequelize.STRING,
      allowNull: false,
      allowEmpty: false,
      len: [1, 512],
    },
  });

  return Comment;
};
