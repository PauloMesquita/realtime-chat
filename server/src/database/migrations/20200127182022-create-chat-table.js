'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_chats', {
      id_chat: {
        type: Sequelize.STRING(4),
        primaryKey: true,
        allowNull: false,
        field: 'id_chat'
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'title'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at'
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_at'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('tbl_chats')
  }
}
