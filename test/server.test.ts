import request from "supertest";
import express from "express";
import healthRoute from "../src/server";

const app = express();

app.use("/", healthRoute);

describe("Health Check Endpoint", () => {
  it("should return server health information", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("status", "OK");
    expect(response.body).toHaveProperty("uptime");
    expect(response.body).toHaveProperty("timestamp");
    expect(response.body).toHaveProperty("version", "1.0.0");
    expect(typeof response.body.uptime).toBe("number");
    expect(new Date(response.body.timestamp).toString()).not.toBe("Invalid Date");
  });
});
