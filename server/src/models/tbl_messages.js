module.exports = (sequelize, DataTypes) => {
  const tbl_messages = sequelize.define('tbl_messages', {
    id_message: {
      type: DataTypes.STRING(7),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id_message',
    },
    fk_id_user: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'tbl_users',
        key: 'id_user',
      },
      field: 'fk_id_user',
    },
    fk_id_chat: {
      type: DataTypes.STRING(4),
      allowNull: false,
      onDelete: 'cascade',
      references: {
        model: 'tbl_chats',
        key: 'id_chat',
      },
      field: 'fk_id_chat',
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'content',
    },
  })
  tbl_messages.associate = (models) => {
    tbl_messages.belongsTo(models.tbl_users, {foreignKey: 'fk_id_user',targetKey: 'id_user'})
    tbl_messages.belongsTo(models.tbl_chats, {foreignKey: 'fk_id_chat',targetKey: 'id_chat', onDelete: 'cascade', hooks: 'true'})
  }
  return tbl_messages
}