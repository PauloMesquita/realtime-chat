module.exports = (sequelize, DataTypes) => {
  const tbl_chat_user = sequelize.define('tbl_chat_user', {
    fk_id_user: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
      onDelete: 'cascade',
      references: {
        model: 'tbl_users',
        key: 'id_user',
      },
      field: 'fk_id_user',
    },
    fk_id_chat: {
        type: DataTypes.STRING(4),
        primaryKey: true,
        allowNull: false,
        onDelete: 'cascade',
        references: {
            model: 'tbl_chats',
            key: 'id_chat',
        },
        field: 'fk_id_chat'
    },
  })
  return tbl_chat_user
}