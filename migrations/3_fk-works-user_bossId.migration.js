'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Works', 'boss_id', {
      type: Sequelize.BIGINT,
    });
    await queryInterface.addConstraint('Works', {
      fields: ['boss_id'],
      type: 'foreign key',
      name: 'Works_Users_boss_id_fk',
      references: {
        table: 'Users',
        field: 'userId',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Works', 'boss_id');
  },
};
