import { v7 as uuidv7 } from "uuid"

export class UuidGenerator {
    generate() {
        return uuidv7()
    }
}