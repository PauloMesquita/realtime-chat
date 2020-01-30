'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_messages', {
      id_message: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
      },
      fk_id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbl_users',
          key: 'id_user',
        },
      },
      fk_id_chat: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbl_chats',
          key: 'id_chat',
        },
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('tbl_messages')
  }
}
