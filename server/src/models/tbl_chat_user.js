const { Model, DataTypes } = require('sequelize')

class tbl_chat_user extends Model{
  static init(sequelize){
      super.init({
        fk_id_user: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
              model: 'tbl_users',
              key: 'id_user',
            },
        },
        fk_id_chat: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'tbl_chats',
                key: 'id_chat',
            },
        },
      }, {sequelize})
  }
}

module.exports = tbl_chat_user