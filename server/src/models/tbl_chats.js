module.exports = (sequelize, DataTypes) => {
  const tbl_chats = sequelize.define('tbl_chats', {
    id_chat: {
      type: DataTypes.STRING(4),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id_chat'
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'title'
    },
  })
  tbl_chats.associate = (models) => {
    tbl_chats.belongsToMany(models.tbl_users, {foreignKey: 'fk_id_user',targetKey: 'id_user',through: 'tbl_chat_user'})
    tbl_chats.hasMany(models.tbl_messages, {foreignKey: 'fk_id_chat',targetKey: 'id_chat'})
  }
  return tbl_chats
}
