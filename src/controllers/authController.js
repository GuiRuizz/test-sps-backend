const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { users } = require('../database');
const expireTime = '8h';

async function login(req, res) {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, type: user.type },
    process.env.JWT_SECRET,
    { expiresIn: expireTime }
  );

  return res.json({ token });
}

module.exports = { login };