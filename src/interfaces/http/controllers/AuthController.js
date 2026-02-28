export class AuthController {
    constructor(authenticateUserUseCase) {
        this.authenticateUserUseCase = authenticateUserUseCase
        this.login = this.login.bind(this)
    }

    async login(req, res) {
        try {
            const result = await this.authenticateUserUseCase.execute(req.body)
            return res.json(result)
        } catch (error) {
            return res.status(401).json({ error: error.message })
        }
    }
}