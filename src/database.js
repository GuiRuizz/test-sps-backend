const bcrypt = require('bcryptjs');

const users = [
  {
    id: 1,
    email: 'admin@sps.com',
    name: 'Admin',
    type: 'admin',
    password: bcrypt.hashSync('1234', 8),
  },
];

module.exports = { users };