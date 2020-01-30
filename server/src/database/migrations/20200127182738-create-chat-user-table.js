'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('tbl_chat_user', {
        fk_id_user: {
          type: Sequelize.STRING(3),
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
          type: Sequelize.STRING(4),
          primaryKey: true,
          allowNull: false,
          onDelete: 'cascade',
          references: {
            model: 'tbl_chats',
            key: 'id_chat',
          },
          field: 'fk_id_chat',
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          field: 'created_at',
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          field: 'updated_at'
        }
      })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('tbl_chat_user')
  }
};
