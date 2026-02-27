import { hash } from 'bcryptjs';
import { users } from '../database.js';
import { v7 as uuidv7 } from 'uuid';
import { renderMany, render } from "../view/userView.js";

export function listUsers(req, res) {
  return res.json(renderMany(users));
}

export async function createUser(req, res) {
  const { email, name, type, password } = req.body;

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'E-mail já cadastrado' });
  }

  const hashedPassword = await hash(password, 8);

  const newUser = {
    id: uuidv7(),
    email,
    name,
    type,
    password: hashedPassword,
  };

  users.push(newUser);

  return res.status(201).json(render(newUser));
}

export function updateUser(req, res) {
  const { id } = req.params;
  const index = users.findIndex(u => u.id == id);

  if (index === -1) return res.status(404).json({ error: 'Usuário não encontrado' });

  users[index] = { ...users[index], ...req.body };
  return res.json(render(users[index]));
}

export function deleteUser(req, res) {
  const { id } = req.params;
  const index = users.findIndex(u => u.id == id);

  if (index === -1) return res.status(404).json({ error: "Usuário não encontrado" });

  const deletedUser = users[index];
  users.splice(index, 1);

  return res.status(200).json({
    success: true,
    message: "Usuário excluído com sucesso",
    data: render(deletedUser)
  });
}