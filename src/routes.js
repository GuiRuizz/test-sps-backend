import express from 'express';
const router = express.Router();

import authMiddleware from './middleware/auth.js';
import { login } from './controllers/authController.js';
import {
  listUsers,
  createUser,
  updateUser,
  deleteUser,
} from './controllers/userController.js';

const v1 = express.Router();

v1.post('/auth/login', login);

v1.use(authMiddleware);

v1.get('/users', listUsers);
v1.post('/users', createUser);
v1.put('/users/:id', updateUser);
v1.delete('/users/:id', deleteUser);


router.use('/v1', v1);

export default router;