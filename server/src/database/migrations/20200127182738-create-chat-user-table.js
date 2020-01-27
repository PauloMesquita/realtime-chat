'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('tbl_chat_user', {
        fk_id_user: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          references: {
            model: 'tbl_users',
            key: 'id_user',
          },
        },
        fk_id_chat: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          references: {
            model: 'tbl_chats',
            key: 'id_chat',
          },
        },
      })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('tbl_chat_user')
  }
};
