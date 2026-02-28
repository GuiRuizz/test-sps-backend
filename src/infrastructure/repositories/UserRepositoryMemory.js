import { users } from "../../database.js"

export class UserRepositoryMemory {
    async findByEmail(email) {
        return users.find(u => u.email === email)
    }

    async findById(id) {
        return users.find(u => u.id == id)
    }

    async findAll() {
        return users
    }

    async save(user) {
        users.push(user)
    }

    async update(id, data) {
        const index = users.findIndex(u => u.id == id)
        users[index] = { ...users[index], ...data }
        return users[index]
    }

    async delete(id) {
        const index = users.findIndex(u => u.id == id)
        return users.splice(index, 1)[0]
    }
}