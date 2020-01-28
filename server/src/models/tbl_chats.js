const { Model, DataTypes } = require('sequelize')

class tbl_chats extends Model{
  static init(sequelize){
      super.init({
        id_chat: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      }, {sequelize})
  }
}

module.exports = tbl_chats