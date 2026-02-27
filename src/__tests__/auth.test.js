import request from "supertest";
import app from "../app";

describe("Authentication", () => {
  it("should login with valid credentials", async () => {
    const response = await request(app)
      .post("/v1/auth/login")
      .send({
        email: "admin@sps.com",
        password: "1234"
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  it("should fail with invalid credentials", async () => {
    const response = await request(app)
      .post("/v1/auth/login")
      .send({
        email: "admin@sps.com",
        password: "wrongpassword"
      });

    expect(response.status).toBe(401);
  });
});