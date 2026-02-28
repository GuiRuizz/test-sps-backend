import { render, renderMany } from "../../../view/UserView.js"

export class UserController {
    constructor({
        createUserUseCase,
        updateUserUseCase,
        deleteUserUseCase,
        getUserByIdUseCase,
        getAllUsersUseCase
    }) {
        this.createUserUseCase = createUserUseCase
        this.updateUserUseCase = updateUserUseCase
        this.deleteUserUseCase = deleteUserUseCase
        this.getUserByIdUseCase = getUserByIdUseCase
        this.getAllUsersUseCase = getAllUsersUseCase
    }

    async create(req, res) {
        try {
            const user = await this.createUserUseCase.execute(req.body)
            return res.status(201).json(render(user))
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params

            const updatedUser = await this.updateUserUseCase.execute(
                id,
                req.body
            )

            return res.json(render(updatedUser))
        } catch (error) {
            if (error.message === "Usuário não encontrado") {
                return res.status(404).json({ error: error.message })
            }

            return res.status(400).json({ error: error.message })
        }
    }

    async getAll(req, res) {
        try {
            const users = await this.getAllUsersUseCase.execute()
            return res.json(renderMany(users))
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params

            const user = await this.getUserByIdUseCase.execute(id)

            return res.json(render(user))
        } catch (error) {
            if (error.message === "Usuário não encontrado") {
                return res.status(404).json({ error: error.message })
            }

            return res.status(400).json({ error: error.message })
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params

            const deletedUser = await this.deleteUserUseCase.execute(id)

            return res.status(200).json({
                success: true,
                message: "Usuário excluído com sucesso",
                data: render(deletedUser)
            })

        } catch (error) {
            if (error.message === "Usuário não encontrado") {
                return res.status(404).json({ error: error.message })
            }

            return res.status(400).json({ error: error.message })
        }
    }
}