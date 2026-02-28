import { hash, compare } from "bcryptjs"

export class HashService {
    async hash(password) {
        return hash(password, 8)
    }

    async compare(password, hashedPassword) {
        return compare(password, hashedPassword)
    }
}