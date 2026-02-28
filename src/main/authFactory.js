import { UserRepositoryMemory } from "../infrastructure/repositories/UserRepositoryMemory.js"
import { HashService } from "../infrastructure/services/HashService.js"
import { JwtService } from "../infrastructure/services/JwtService.js"
import { AuthenticateUser } from "../application/usecases/auth/AuthenticateUser.js"
import { AuthController } from "../interfaces/http/controllers/AuthController.js"
import { AuthMiddleware } from "../interfaces/http/middleware/AuthMiddleware.js"


const userRepository = new UserRepositoryMemory()
const hashService = new HashService()
const jwtService = new JwtService()


const authenticateUserUseCase = new AuthenticateUser(
    userRepository,
    hashService,
    jwtService
)


export const authController = new AuthController(
    authenticateUserUseCase
)


export const authMiddleware = new AuthMiddleware(jwtService)