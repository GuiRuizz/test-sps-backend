import { UserRepositoryMemory } from "../infrastructure/repositories/UserRepositoryMemory.js"
import { HashService } from "../infrastructure/services/HashService.js"

import { CreateUser } from "../application/usecases/users/CreateUser.js"
import { UpdateUser } from "../application/usecases/users/UpdateUser.js"
import { DeleteUser } from "../application/usecases/users/DeleteUser.js"
import { GetUserById } from "../application/usecases/users/GetUserById.js"
import { GetAllUsers } from "../application/usecases/users/GetAllUsers.js"

import { UserController } from "../interfaces/http/controllers/UserController.js"
import { UuidGenerator } from "../infrastructure/services/UUIDService.js"

const userRepository = new UserRepositoryMemory()
const hashService = new HashService()
const uuidGenerator = new UuidGenerator()

const createUserUseCase = new CreateUser(
    userRepository,
    hashService,
    uuidGenerator
)

const updateUserUseCase = new UpdateUser(
    userRepository,
    hashService
)

const deleteUserUseCase = new DeleteUser(userRepository)
const getUserByIdUseCase = new GetUserById(userRepository)
const getAllUsersUseCase = new GetAllUsers(userRepository)

export const userController = new UserController({
    createUserUseCase,
    updateUserUseCase,
    deleteUserUseCase,
    getUserByIdUseCase,
    getAllUsersUseCase
})