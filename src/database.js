import { hashSync } from 'bcryptjs';

export const users = [
  {
    id: 1,
    email: 'admin@sps.com',
    name: 'Admin',
    type: 'admin',
    password: hashSync('1234', 8),
  },
];