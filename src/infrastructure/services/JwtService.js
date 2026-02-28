import jwt from "jsonwebtoken"

export class JwtService {
    generate(payload) {
        return jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: "8h" }
        )
    }

    verify(token) {
        return jwt.verify(token, process.env.JWT_SECRET)
    }
}