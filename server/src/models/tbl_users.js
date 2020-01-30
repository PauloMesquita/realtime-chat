module.exports = (sequelize, DataTypes) => {
    const tbl_users = sequelize.define('tbl_users', {
        id_user: {
            type: DataTypes.STRING(3),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            field: 'id_user',
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'username',
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            fied: 'email'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'password'
        }
    })
    tbl_users.associate = (models) => {
        tbl_users.belongsToMany(models.tbl_chats, {foreignKey: 'fk_id_chat',targetKey: 'id_chat',through: 'tbl_chat_user'})
        tbl_users.hasMany(models.tbl_messages, {foreignKey: 'fk_id_user',targetKey: 'id_user'})
    }
    return tbl_users
}