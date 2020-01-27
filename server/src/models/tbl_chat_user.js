module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tbl_chat_user', {
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