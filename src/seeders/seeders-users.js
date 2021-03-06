'use strict';

module.exports = {
  // khi chạy bình thường sẽ thêm dữ liệu vào
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'Son',
      lastName: 'Nguyen',
      address: 'Vietnam',
      gender: '1',
      roleId: 'ROLE',
      phoneNumber: 'R1',
      positionId: '',
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  //được dùng khi chạy rollback để khôi phục dữ liệu ở phiên bản trước đó
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
