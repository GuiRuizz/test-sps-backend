export class GetUserById {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async execute(id) {
        const user = await this.userRepository.findById(id)

        if (!user) {
            throw new Error("Usuário não encontrado")
        }

        return user
    }
}