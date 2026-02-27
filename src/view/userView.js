export function render(user) {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    type: user.type,
  };
}

export function renderMany(users) {
  return users.map(render);
}