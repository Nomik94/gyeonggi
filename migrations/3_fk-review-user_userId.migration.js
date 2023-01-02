'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Reviews', 'user_id', {
      type: Sequelize.BIGINT,
    });
    await queryInterface.addConstraint('Reviews', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'Reviews_Users_id_fk',
      references: {
        table: 'Users',
        field: 'userId',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Reviews', 'user_id');
  },
};
