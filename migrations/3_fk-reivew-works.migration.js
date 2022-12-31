'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Reviews', 'work_id', {
      type: Sequelize.BIGINT,
    });
    await queryInterface.addConstraint('Reviews', {
      fields: ['work_id'],
      type: 'foreign key',
      name: 'Reviews_Works_id_fk',
      references: {
        table: 'Works',
        field: 'workId',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Reviews', 'work_id');
  },
};
