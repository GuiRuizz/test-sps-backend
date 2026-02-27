const express = require('express');
const router = express.Router();

const authMiddleware = require('./middleware/auth');
const { login } = require('./controllers/authController');
const {
  listUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('./controllers/userController');

// Login (única rota pública)
router.post('/auth/login', login);

// Todas abaixo protegidas
router.use(authMiddleware);

router.get('/users', listUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;