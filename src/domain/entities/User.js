export class User {
    constructor({ id, name, email, password }) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
    }

    isValidEmail() {
        return this.email.includes("@")
    }
}