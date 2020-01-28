const { Model, DataTypes } = require('sequelize')

class tbl_messages extends Model{
  static init(sequelize){
    super.init({
      id_message: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fk_id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tbl_users',
          key: 'id_user',
        },
      },
      fk_id_chat: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tbl_chats',
          key: 'id_chat',
        },
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {sequelize})
  }
}

module.exports = tbl_messages