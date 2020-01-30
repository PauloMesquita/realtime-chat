'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('tbl_users', {
        id_user: {
          type: Sequelize.STRING(3),
          primaryKey: true,
          allowNull: false,
          field: 'id_user',
        },
        username: {
          type: Sequelize.STRING(50),
          allowNull: false,
          unique: true,
          field: 'username'
        },
        email: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true,
          field: 'email'
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'password',
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          field: 'created_at'
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          field: 'updated_at',
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbl_users')
  }
};
