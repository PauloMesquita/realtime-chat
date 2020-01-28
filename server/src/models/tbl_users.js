const { Model, DataTypes } = require('sequelize')

class tbl_users extends Model{
    static init(sequelize){
        super.init({
            id_user: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        }, { sequelize })
    }
}

module.exports = tbl_users