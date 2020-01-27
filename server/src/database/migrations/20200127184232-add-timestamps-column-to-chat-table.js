'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('tbl_chats', 'created_at', {
      type: Sequelize.DATE,
      allowNull: false,
    }).then(() => {
      return queryInterface.addColumn('tbl_chats', 'updated_at', {
        type: Sequelize.DATE,
        allowNull: false,
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('tbl_chats', 'created_at').then(() => {
      return queryInterface.removeColumn('tbl_chats', 'updated_at')
    })
  }
}
