export class AuthMiddleware {
  constructor(tokenService) {
    this.tokenService = tokenService
    this.handle = this.handle.bind(this)
  }

  handle(req, res, next) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      return res.status(401).json({ error: "Token não informado" })
    }

    const [, token] = authHeader.split(" ")

    try {
      const decoded = this.tokenService.verify(token)
      req.user = decoded
      return next()
    } catch (error) {
      return res.status(401).json({ error: "Token inválido" })
    }
  }
}