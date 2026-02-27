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

// Login (única rota pública)
router.post('/auth/login', login);

// Todas abaixo protegidas
router.use(authMiddleware);

router.get('/users', listUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;