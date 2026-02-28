export class AuthenticateUser {
    constructor(userRepository, hashService, tokenService) {
        this.userRepository = userRepository
        this.hashService = hashService
        this.tokenService = tokenService
    }

    async execute({ email, password }) {
        const user = await this.userRepository.findByEmail(email)

        if (!user) {
            throw new Error("Credenciais inválidas")
        }

        const passwordMatch = await this.hashService.compare(
            password,
            user.password
        )

        if (!passwordMatch) {
            throw new Error("Credenciais inválidas")
        }

        const token = this.tokenService.generate({
            id: user.id,
            email: user.email,
            type: user.type
        })

        return { token }
    }
}