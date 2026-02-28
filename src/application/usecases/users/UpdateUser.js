export class UpdateUser {
    constructor(userRepository, hashService) {
        this.userRepository = userRepository
        this.hashService = hashService
    }

    async execute(id, data) {
        const user = await this.userRepository.findById(id)

        if (!user) {
            throw new Error("Usuário não encontrado")
        }

        if (data.email && data.email !== user.email) {
            const emailExists = await this.userRepository.findByEmail(data.email)

            if (emailExists) {
                throw new Error("E-mail já cadastrado")
            }
        }

        if (data.password) {
            data.password = await this.hashService.hash(data.password)
        }

        const updatedUser = await this.userRepository.update(id, data)

        return updatedUser
    }
}