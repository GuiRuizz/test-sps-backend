import express from "express"
const router = express.Router()

import { authController, authMiddleware } from "./main/authFactory.js"
import { userController } from "./main/userFactory.js"

const v1 = express.Router()

// rota pública
v1.post("/auth/login", (req, res) =>
  authController.login(req, res)
)

// middleware global
v1.use(authMiddleware.handle)

// rotas protegidas
v1.get("/users", (req, res) =>
  userController.getAll(req, res)
)

v1.get("/users/:id", (req, res) =>
  userController.getById(req, res)
)

v1.post("/users", (req, res) =>
  userController.create(req, res)
)

v1.put("/users/:id", (req, res) =>
  userController.update(req, res)
)

v1.delete("/users/:id", (req, res) =>
  userController.delete(req, res)
)

router.use("/v1", v1)

export default router