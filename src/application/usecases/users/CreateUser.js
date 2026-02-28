export class CreateUser {
    constructor(userRepository, hashService, idGenerator) {
        this.userRepository = userRepository
        this.hashService = hashService
        this.idGenerator = idGenerator
    }

    async execute({ email, name, type, password }) {
        const userExists = await this.userRepository.findByEmail(email)

        if (userExists) {
            throw new Error("E-mail já cadastrado")
        }

        const hashedPassword = await this.hashService.hash(password)

        const newUser = {
            id: this.idGenerator.generate(),
            email,
            name,
            type,
            password: hashedPassword
        }

        await this.userRepository.save(newUser)

        return newUser
    }
}