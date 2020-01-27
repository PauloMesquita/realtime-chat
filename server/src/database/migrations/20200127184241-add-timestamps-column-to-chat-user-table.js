'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('tbl_chat_user', 'created_at', {
      type: Sequelize.DATE,
      allowNull: false,
    }).then(() => {
      return queryInterface.addColumn('tbl_chat_user', 'updated_at', {
        type: Sequelize.DATE,
        allowNull: false,
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('tbl_chat_user', 'created_at').then(() => {
      return queryInterface.removeColumn('tbl_chat_user', 'updated_at')
    })
  }
};
