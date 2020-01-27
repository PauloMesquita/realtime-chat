module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tbl_messages', {
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
         created_at: {
           type: DataTypes.DATE,
           allowNull: false,
         },
         updated_at: {
           type: DataTypes.DATE,
           allowNull: false,
         }
    })
}