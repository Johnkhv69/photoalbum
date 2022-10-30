'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AccessRights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE', 
      },
      albumid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Albums',
          key: 'id',
        },
        onDelete: 'CASCADE', 
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE', 
      },
      AlbumId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Albums',
          key: 'id',
        },
        onDelete: 'CASCADE', 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AccessRights');
  }
};