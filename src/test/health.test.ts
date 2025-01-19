const request = require("supertest");
const { app, server } = require("../app");

describe("Health Check Endpoint", () => {
  // Close the server after tests
  afterAll((done) => {
    server.close(() => {
      done();
    });
  });

  it("should return server health status", async () => {
    const res = await request(app).get("/api/v1/health");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status", "OK");
    expect(res.body).toHaveProperty("uptime");
    expect(res.body).toHaveProperty("timestamp");
    expect(res.body).toHaveProperty("version", "1.0.0");

    expect(typeof res.body.uptime).toBe("number");
    expect(new Date(res.body.timestamp).toString()).not.toBe("Invalid Date");
  });
});
