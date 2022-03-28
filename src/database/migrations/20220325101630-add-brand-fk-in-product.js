'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   return await queryInterface.addColumn("Products","brandId",{
    type: Sequelize.INTEGER,
    // onDelete: 'SET NULL',
    // we will not allow them to delete brand if it has product other wise you could set set null on delete
    references: {
      model: 'Brands',
      key: 'id',
    },
   })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeColumn("Products","brandId")
  }
};
