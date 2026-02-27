import jwt from 'jsonwebtoken';
const { sign } = jwt;
import { compare } from 'bcryptjs';
import { users } from '../database.js';
const expireTime = '8h';

export async function login(req, res) {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);

  if (!user) return res.status(401).json({ error: 'Credenciais inválidas' });

  const passwordMatch = await compare(password, user.password);
  if (!passwordMatch) return res.status(401).json({ error: 'Credenciais inválidas' });

  const token = sign(
    { id: user.id, email: user.email, type: user.type },
    process.env.JWT_SECRET,
    { expiresIn: expireTime }
  );

  return res.json({ token });
}