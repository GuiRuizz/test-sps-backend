const bcrypt = require('bcryptjs');
const { users } = require('../database');

function listUsers(req, res) {
  return res.json(userView.renderMany(users));
}

async function createUser(req, res) {
  const { email, name, type, password } = req.body;

  const emailExists = users.find(u => u.email === email);

  if (emailExists) {
    return res.status(400).json({ error: 'E-mail já cadastrado' });
  }

  const hashedPassword = await bcrypt.hash(password, 8);

  const { v7: uuidv7 } = require('uuid'); 

  const newUser = {
    id: uuidv7(),
    email,
    name,
    type,
    password: hashedPassword,
  };

  users.push(newUser);

  return res.status(201).json(userView.render(newUser));
}

function updateUser(req, res) {
  const { id } = req.params;
  const index = users.findIndex(u => u.id == id);

  if (index === -1) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }

  users[index] = { ...users[index], ...req.body };

  return res.json(userView.render(users[index]));
}

const userView = require("../view/userView");

function deleteUser(req, res) {
  const { id } = req.params;
  const index = users.findIndex(u => u.id == id);

  if (index === -1) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  const deletedUser = users[index];

  users.splice(index, 1);

  return res.status(200).json({
    success: true,
    message: "Usuário excluído com sucesso",
    data: userView.render(deletedUser)
  });
}

module.exports = {
  listUsers,
  createUser,
  updateUser,
  deleteUser,
};  